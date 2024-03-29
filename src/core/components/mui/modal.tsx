import { Modal, Box } from "@mui/material";

export default function ModalMUI(props: any) {
  const { children, open, handleClose } = props;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ textAlign: "center" }}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </>
  );
}
