import { Dialog } from "@mui/material";

const dialogStyle = {
    height:'95%',
    width:'100%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overFlow:'hidden',
}

const ChatDialog = ()=>{
    return(
        <>
        <Dialog
            open={true}
            PaperProps={{sx:dialogStyle}}
            hideBackdrop={true}>

        </Dialog>
        </>
    )
}

export default ChatDialog;