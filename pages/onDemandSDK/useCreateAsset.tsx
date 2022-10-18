import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAsset, useCreateAsset } from "@livepeer/react";
import styles from "../../styles/CreateAssetForm.module.css";
import logo from "../../public/studioLogo.png";

export default function CreateAsset() {
  // Set state for video file to upload
  const [video, setVideo] = useState<File | undefined>();
  // Create an asset using 'useCreateAsset' hook by using the mutate property set to 'createAsset'
  //  and also getting the asset Id after creation with 'createdAsset' parameter from the data property
  const { mutate: createAsset, data: createdAsset, status } = useCreateAsset({});
  // Passing it the asset ID using the 'useAsset' hook to retrieve the asset
  // assigning the 'assetId' with the newly created asset's id 'createdAsset?.id'
  const { data: asset, error } = useAsset({
    assetId: createdAsset?.id,
    refetchInterval: (asset) => (!asset?.playbackUrl ? 500 : false),
  });

  // console.log(createdAsset);

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <input type="file" accept="video/mp4" onChange={(e) => setVideo(e?.target?.files?.[0])} />
        <button
          disabled={!video || status === "loading"}
          onClick={() => {
            if (video) {
              createAsset({
                name: video.name,
                file: video,
              });
            }
          }}
        >
          Create Asset
        </button>
      </div>
      {/* Displays the asset card of the created asset otherwise displays error if not created */}
      {asset?.status?.phase !== "ready" ? null : (
        <div className={styles.card} key={asset?.id}>
          <Link href={`/videoAssets/${asset?.id}`}>
            <a>
              <Image src={logo} alt="Livepeer Studio Logo" width="50" height="50" />
              <h2> {asset?.name} </h2>
            </a>
          </Link>
        </div>
      )}
      {error && <div className={styles.card}>{error.message}</div>}
    </div>
  );
}
