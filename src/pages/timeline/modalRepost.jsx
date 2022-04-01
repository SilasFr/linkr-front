import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../../style/modal.css";
import {
  CloseButton,
  DeleteButton,
  Dialog,
  Interface,
  ModalContainer,
} from "../../components/ModalComponents";
import { useContext } from "react";
import TimelineContext from "../../contexts/timelineContext";
import { api } from "../../services/api";
import UserContext from "../../contexts/userContext";

export default function ModalRepost({ postId }) {
  const { userData } = useContext(UserContext);
  const { repostModal, setRepostModal } = useContext(TimelineContext);
  const { reload, setReload } = useContext(TimelineContext);
  const closeModal = () => {
    return setRepostModal(false);
  };

  async function handleRepost() {
    try {
      const promise = api.repost(userData.token, postId);
      promise.then((response) => {
        setReload(!reload);
      });
      promise.catch((error) => {
        alert(
          "Error! Não foi possível repostar agora, por favor tente mais tarde.",
          error.response
        );
      });
    } catch (e) {
      alert("Error! ", e);
    }
  }
  return (
    <Modal
      center
      open={repostModal}
      onClose={closeModal}
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      showCloseIcon={false}
    >
      <ModalContainer>
        <Dialog>Do you want to re-post this link?</Dialog>
        <Interface>
          <CloseButton onClick={closeModal}>No, go back</CloseButton>
          <DeleteButton onClick={handleRepost}>Yes, repost it</DeleteButton>
        </Interface>
      </ModalContainer>
    </Modal>
  );
}
