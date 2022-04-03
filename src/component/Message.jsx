import * as React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const MessageContext = React.createContext({});

export const useMessage = () => React.useContext(MessageContext);

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const MessageProvider = ({ children }) => {
    const [show, setShow] = React.useState(false);
    const [msg, setMessage] = React.useState({});

    const Message = React.useCallback(() => {
        const { type, text } = msg;
        return (
            <Snackbar open={show} autoHideDuration={3000} anchorOrigin={{ vertical: "top", horizontal: "center" }} onClose={() => { setShow(false) }} >
                <Alert onClose={() => { setShow(false) }} severity={type} sx={{ width: '100%', zIndex: 10000 }}>
                    {text}
                </Alert>
            </Snackbar>
        )
    }, [msg, show])

    const message = (type, text) => {
        setShow(true)
        setMessage({ type, text })
    }

    return (
        <MessageContext.Provider value={{ message }}>
            <Message />
            {children}
        </MessageContext.Provider>
    )
}
