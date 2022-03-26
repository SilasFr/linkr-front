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
  async function handleDelete() {
    try {
      console.log("delete", postId);
    } catch (e) {
      alert("Não foi possível excluir o post");
    }
  }
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
          <CloseButton onClick={modalControl.onCloseModal}>
            No, go back
          </CloseButton>
          <DeleteButton onClick={handleDelete}>Yes, delete it</DeleteButton>
        </Interface>
      </ModalContainer>
    </Modal>
  );
}
