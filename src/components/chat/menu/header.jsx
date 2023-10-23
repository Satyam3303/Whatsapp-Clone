import { useContext } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";

import ChatIcon from '@mui/icons-material/Chat';

import HeaderMenu from "./HeaderMenu";

const Component = styled(Box)`
    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;`

const Parent =styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child{
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
    `

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
})

const Header = () =>{

    const {account} = useContext(AccountContext);
    return(
        <Component>
            <Image src={account.picture} alt="nothing"/>
            <Parent>
                <ChatIcon/>
                <HeaderMenu/>
            </Parent>
        </Component>
    )
}

export default Header;