import "./ModalConfirmLogout.css"
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const ModalConfirmLogout = ({ open, onClose, onConfirm }) => {
  
    return (
      <div className="modal-container">
        <Modal
          open={open}
          onHide={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box className="modal-content" sx={{ width: 300, bgcolor: 'background.paper', p: 2, textAlign: "center" }}>
            <h2 className="modal-title" id="modal-modal-title">Confirmación de Logout</h2>
            <p className="modal-description" id="modal-modal-description">¿Estas seguro de que deseas hacer logout?</p>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onConfirm}>Logout</Button>
          </Box>
        </Modal>
      </div>
    );
  };
  
  export default ModalConfirmLogout;
