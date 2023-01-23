import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";

const ModalComponent = ({
  children = <></>,
  open = false,
  modalTitle = "Modal Title",
  handleCloseClick = () => {},
  handleProceedClick = () => {},
}) => {
  const styles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    background: "#272525 0% 0% no-repeat padding-box",
    boxShadow: "0px 2px 6px #0A0000",
    borderRadius: "8px",
  };
  return (
    <Modal
      open={open}
      disableAutoFocus
      disableEnforceFocus
      disableEscapeKeyDown
    >
      <Box sx={styles}>
        <Box
          className="d-flex justify-content-between align-items-center px-4 py-2"
          sx={{ borderBottom: "1.5px solid #FFFFFF" }}
        >
          <Typography className="color-light-white modal-title fw-600">
            {modalTitle}
          </Typography>
          <Tooltip title="Close">
            <Box
              data-testid="close-button"
              className="cursor-pointer close-button p-1"
              onClick={handleCloseClick}
            >
              <HighlightOffOutlinedIcon fontSize="medium" />
            </Box>
          </Tooltip>
        </Box>
        <Box className="mxh-400 px-4 overflowY-scroll overflowX-hidden hide-scrollbar">
          {children}
        </Box>
        <Box
          className="d-flex justify-content-center align-items-center px-4 py-2"
          sx={{ borderTop: "1.5px solid #FFFFFF" }}
        >
          <Button
            id="proceed-button"
            disableElevation
            disableFocusRipple
            variant="contained"
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              background: "#272525",
              boxShadow: "0px 3px 6px #0A0000",
              border: "1px solid #FFFFFF66",
              "&:hover": {
                background: "#272525",
              },
            }}
            onClick={handleProceedClick}
          >
            Proceed
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
