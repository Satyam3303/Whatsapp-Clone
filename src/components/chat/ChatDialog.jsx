import { Dialog, Box, styled } from "@mui/material";
import { useContext } from "react";
import Menu from "./menu/menu";

import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../context/AccountProvider";

const dialogStyle = {
    height:'95%',
    width:'100%',
    margin:'20px',
    maxWidth:'100%',
    borderRadius:'0px',
    maxHeight:'100%',
    boxShadow:'none',
    overFlow:'hidden',
}

const Component = styled(Box)`
    display:flex`

const LeftComponent = styled(Box)`
    min-width:450px`

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    Height: 100%;
    border-left: 1px solid #dcdcdc;`
    

const ChatDialog = ()=>{

    const{ person } =useContext(AccountContext);

    return(
        <>
        <Dialog
            open={true}
            PaperProps={{sx:dialogStyle}}
            hideBackdrop={true}
            maxWidth={'md'}>

                <Component>
                    <LeftComponent>
                        <Menu/>
                    </LeftComponent>
                    <RightComponent>
                        {Object.keys(person).length ? <ChatBox/> : <EmptyChat/>}
                    </RightComponent>
                </Component>

        </Dialog>
        </>
    )
}

export default ChatDialog;