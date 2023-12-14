
import React, { useEffect, useState } from "react";
import styles from "./CapsulItem.module.css";

interface CapsulItemProps {
  capsul: {
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: string|null;
    original_launch_unix: number|null;
    details:string|null;
  };
}

const CapsulItem: React.FC<CapsulItemProps> = (props) => {
  let [status, setStatus] = useState(true);

  useEffect(() => {
    if (props.capsul.status !== "active") {
      setStatus(false);
    }
  }, []);

  return (
    <div>
      {status && (
        <div className={styles.wrapCapsules}>
          <p>{props.capsul.capsule_serial}</p>
          <p>{props.capsul.capsule_id}</p>
          <p>{props.capsul.status}</p>
          <p>{props.capsul.original_launch}</p>
          <p>{props.capsul.original_launch_unix}</p>
          <p>{props.capsul.details}</p>
        </div>
      )}
    </div>
  );
};

export default CapsulItem;
