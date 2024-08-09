import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoadingButton from '@mui/lab/LoadingButton';

type ConfirmDialogProps = {
   description?: string;
   onClose: () => void;
   onConfirm: () => void;
   open: boolean;
   pending: boolean;
   title: string;
};

export const ConfirmDialog = ({ description, onClose, onConfirm, open, pending, title }: ConfirmDialogProps) => {
   return (
      <Dialog
         open={open}
         onClose={onClose}
         maxWidth="xs"
         aria-labelledby="confirm-dialog-title"
         aria-describedby="confirm-dialog-description">
         <DialogTitle id="confirm-dialog-title" sx={{ pt: 3 }}>
            {title}
         </DialogTitle>
         <DialogContent sx={{ textAlign: 'left' }}>
            {description && <DialogContentText id="confirm-dialog-description">{description}</DialogContentText>}
         </DialogContent>
         <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button onClick={onClose}>Cancel</Button>
            <LoadingButton autoFocus onClick={onConfirm} loading={pending} variant="contained">
               Ok
            </LoadingButton>
         </DialogActions>
      </Dialog>
   );
};
