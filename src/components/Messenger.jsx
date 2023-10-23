import { useContext } from "react";

import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
import LoginPage from "./account/LoginPage";

import ChatDialog from "./chat/ChatDialg";

const Box123 = styled(Box)`
    height:100vh;
    background-color:#DCDCDC;`

const LoginHeader = styled(AppBar)`
    height:220px;
    background-color:#00a884;
    box-shadow:none;`

const Header = styled(AppBar)`
    height:120px;
    background-color:#00A884;
    box-shadow:none;`

const Messenger =()=>{

    const {account} = useContext(AccountContext);

    return (
        <Box123>
            {
                
                account ? 
                <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog/> 
                </>
                : 
                <>
        <LoginHeader>
            <Toolbar>

            </Toolbar>
        </LoginHeader>
        <LoginPage/>
        </>
    
    }
        </Box123>
    )
}

export default Messenger;