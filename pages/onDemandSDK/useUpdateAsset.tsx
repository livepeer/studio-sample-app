import { useUpdateAsset } from "@livepeer/react";
import { useState } from "react";
import styles from "../../styles/CreateAssetForm.module.css";

export default function UpdateAsset() {
  const [ assetId, setAssetId ] = useState<string>('');
  const [name, setName] = useState<string | undefined>();
  const [storage, setStorage] = useState<string | undefined>(undefined);
  const [meta, setMeta] = useState<string>();

  const { mutate: updateAsset, status, error } = useUpdateAsset();

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Get Created Asset By Id</h1>
      <div className={styles.card}>
        <label htmlFor="assetId" className="text-base">
          Asset ID:
        </label>
        <br />
        <input
          className="border rounded-md text-base mx-2"
          type="text"
          name="assetId"
          value={assetId}
          required
          onChange={(e) => setAssetId(e.target.value)}
        />
        <br />
        <label htmlFor="name" className="text-base">
          New Name:
        </label>
        <br />
        <input
          className="border rounded-md text-base mx-2"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="storage" className="text-base">
          Storage:
        </label>
        <br />
        <input
          className="border rounded-md text-base mx-2"
          type="text"
          name="storage"
          value={storage}
          onChange={(e) => setStorage(e.target.value)}
        />
        <br />
        <label htmlFor="meta" className="text-base">
          Meta:
        </label>
        <br />
        <input
          className="border rounded-md text-base mx-2"
          type="text"
          name="meta"
          placeholder='{"title":"Asset Title"}'
          value={meta}
          onChange={(e) => setMeta(e.target.value)}
        />
        <br />
        <button
          disabled={status === "loading"}
          onClick={() => {
            updateAsset({
              assetId,
              name,
              storage: 'ipfs',
              meta: meta ? JSON.parse( meta ) : null
            });
          }}
        >
          Update Asset
        </button>
      </div>
    </div>
  );
}
