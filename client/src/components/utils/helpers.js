import { toast } from 'react-toastify';

export const showToastError = message => {
    if (!message) return null;

    toast.error(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
}

export const showToastSuccess = message => {
    if (!message) return null;
    
    toast.success(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
}