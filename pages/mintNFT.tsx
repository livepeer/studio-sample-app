import { useMemo, useCallback, useState } from 'react';
import { useAsset, useUpdateAsset, useCreateAsset } from '@livepeer/react';
import { ConnectKitButton } from 'connectkit';
import { useDropzone } from 'react-dropzone';
import BarLoader from 'react-spinners/Barloader';
import { useAccount } from 'wagmi';
import styles from '../styles/MintNFT.module.css';



export default function MintNFT() {

 const [video, setVideo] = useState<File | null>(null);

  const { address } = useAccount();

  const {
    mutate: createAsset,
    data: createdAsset,
    status: createStatus,
    uploadProgress,
  } = useCreateAsset();

  const { data: asset, status: assetStatus } = useAsset( {
    assetId: createdAsset?.id,
    refetchInterval: ( asset ) => ( asset?.storage?.status?.phase !== 'ready' ? 5000 : false ),
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

  return (
    <div>
      <ConnectKitButton />
      {address && (
        <div>
          <div className={styles.drop} {...getRootProps()}>
            <input {...getInputProps()} />
            <div>
              <p>
                Drag and drop or <span>browse files</span>
              </p>
            </div>
          </div>

          <div className={styles.progress}>
            {video ? <p>Name: {video.name}</p> : <p>Select a video file to upload.</p>}
            {progressFormatted && <p>{progressFormatted}</p>}
          </div>

        </div>
      )}
    </div>
  );
}
