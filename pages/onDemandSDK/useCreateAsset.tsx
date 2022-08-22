import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAsset, useCreateAsset } from "@livepeer/react";
import styles from "../../styles/CreateAssetForm.module.css";
import logo from "../../public/studioLogo.png";

export default function CreateAsset() {
  const [video, setVideo] = useState<File | undefined>();
  const { mutate: createAsset, data: createdAsset, status } = useCreateAsset({});
  const { data: asset, error } = useAsset({
    assetId: createdAsset?.id,
    refetchInterval: (asset) => (!asset?.playbackUrl ? 5000 : false),
  });

  console.log(createdAsset);

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

      {asset?.status.phase !== "ready" ? null : (
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
