import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../../style/modal.css";
import {
  CloseButton,
  DeleteButton,
  Dialog,
  Interface,
  ModalContainer,
} from "../../components/ModalComponents";

export default function ModalComponent({ modalControl }) {
  return (
    <Modal
      center
      open={modalControl.open}
      onClose={modalControl.onCloseModal}
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      showCloseIcon={false}
    >
      <ModalContainer>
        <Dialog>Are you sure you want to delete this post?</Dialog>
        <Interface>
          <CloseButton>No, go back</CloseButton>
          <DeleteButton>Yes, delete it</DeleteButton>
        </Interface>
      </ModalContainer>
    </Modal>
  );
}
