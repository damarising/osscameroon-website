import * as React from "react";
import DeveloperDetail from "@components/common/DeveloperDetail";
import {DEVELOPER_DATA} from "@fixtures/developers";

type DeveloperDetailModalProps = {
  visible: boolean;
  onClose: () => void;
  devId: string;
}

const DeveloperDetailModal = ({ visible, devId, onClose }: DeveloperDetailModalProps) => {
  return (
    <>
      {visible &&
        (
          <div id="developer-modal">
            <DeveloperDetail data={DEVELOPER_DATA} onClose={onClose} />
          </div>
        )
      }
    </>
  );
};

export default DeveloperDetailModal;