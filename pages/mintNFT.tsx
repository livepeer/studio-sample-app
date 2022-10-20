import { useMemo, useCallback, useState } from 'react';
import { useAsset, useUpdateAsset, useCreateAsset, Player, LivepeerProvider } from '@livepeer/react';
import { ConnectKitButton } from 'connectkit';
import { useDropzone } from 'react-dropzone';
import ClockLoader from 'react-spinners/ClockLoader';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import styles from '../styles/MintNFT.module.css';



export default function MintNFT() {

  const [ video, setVideo ] = useState<File | null>( null );
  const [isExportStarted, setIsExportedStarted] = useState(false);

  const { address } = useAccount();


  const {
    mutate: createAsset,
    data: createdAsset,
    status: createStatus,
    uploadProgress,
  } = useCreateAsset();

  const { data: asset, status: assetStatus } = useAsset<LivepeerProvider, any>({
    assetId: createdAsset?.id,
    refetchInterval: (asset) => (asset?.storage?.status?.phase !== 'ready' ? 5000 : false),
  });
  
const { mutate: updateAsset, status: updateStatus } = useUpdateAsset();
  
const onDrop = useCallback(async (acceptedFiles: File[]) => {
  if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles?.[0]) {
    setVideo(acceptedFiles[0]);
  }
}, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'video/*': ['*.mp4'],
    },
    maxFiles: 1,
    onDrop,
  } );
  

    const progressFormatted = useMemo(
      () =>
        uploadProgress
          ? `Uploading: ${Math.round(uploadProgress * 100)}%`
          : asset?.status?.progress
          ? `Processing: ${Math.round(asset?.status?.progress * 100)}%`
          : null,
      [uploadProgress, asset?.status?.progress]
    );
  
  const isLoading = useMemo(
    () =>
      createStatus === 'loading' ||
      assetStatus === 'loading' ||
      updateStatus === 'loading' ||
      (asset && asset?.status?.phase !== 'ready') ||
      (isExportStarted && asset?.status?.phase !== 'success'),
    [createStatus, asset, assetStatus, updateStatus, isExportStarted]
  );

  const videoNftAbi = [
    'event Mint(address indexed sender, address indexed owner, string tokenURI, uint256 tokenId)',
    'function mint(address owner, string tokenURI) returns (uint256)',
  ] as const;

  const { config } = usePrepareContractWrite({
    // The demo NFT contract address on Polygon Mumbai
    addressOrName: '0xA4E1d8FE768d471B048F9d73ff90ED8fcCC03643',
    contractInterface: videoNftAbi,
    // Function on the contract
    functionName: 'mint',
    // Arguments for the mint function
    args: [address, asset?.storage?.ipfs?.nftMetadata?.url],
    enabled: Boolean(address && asset?.storage?.ipfs?.nftMetadata?.url),
  } );
  
  const {
    data: contractWriteData,
    isSuccess,
    write,
    error: contractWriteError,
  } = useContractWrite(config);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Mint Video NFT</h1>
      <ConnectKitButton />
      <div className={styles.card}>
        {address && (
          <div>
              {asset?.status?.phase !== 'ready' ? (
            <div className={styles.drop} {...getRootProps()}>
              <input {...getInputProps()} />
                <div>
                  <p>
                    Drag and drop or <span>browse files</span>
                  </p>
                </div>
            </div>
              ) : (

                  <Player playbackId={asset.playbackId} />

              )}

            <div className={styles.progress}>
              {video ? <p>Name: {video.name}</p> : <p>Select a video file to upload.</p>}
              {progressFormatted && <p>{progressFormatted}</p>}
            </div>

            <br />
            <div>
              {asset?.status?.phase !== 'ready' ? (
                <button
                  className={styles.button}
                  onClick={() => {
                    if (video) {
                      createAsset({ name: video.name, file: video });
                    }
                  }}
                  disabled={!video || isLoading || Boolean(asset)}
                >
                  Upload Asset
                  <br />
                  {isLoading && <ClockLoader color='#fff' />}
                </button>
              ) : asset?.status?.phase === 'ready' && asset?.storage?.status?.phase !== 'ready' ? (
                <button
                  className={styles.button}
                  onClick={() => {
                    if (asset?.id) {
                      setIsExportedStarted(true);
                      updateAsset({
                        assetId: asset?.id,
                        storage: { ipfs: true },
                      });
                    }
                  }}
                  disabled={!asset?.id || isLoading || Boolean(asset?.storage?.ipfs?.cid)}
                >
                  Upload to IPFS
                  <br />
                  {isLoading && <ClockLoader color='#fff' />}
                </button>
              ) : contractWriteData?.hash && isSuccess ? (
                <a
                  className={styles.link}
                  target='_blank'
                  href={`https://mumbai.polygonscan.com/tx/${contractWriteData.hash}`}
                  rel='noreferrer'
                >
                  <button>View Mint Transaction</button>
                </a>
              ) : contractWriteError ? (
                <p>{contractWriteError.message}</p>
              ) : asset?.storage?.status?.phase === 'ready' && write ? (
                <button
                  className={styles.button}
                  onClick={() => {
                    write();
                  }}
                >
                  Mint NFT
                  <br />
                  {isSuccess && <ClockLoader color='#fff' />}
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
