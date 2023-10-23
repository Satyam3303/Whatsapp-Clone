import { Dialog, Box, Typography, List, ListItem,styled } from "@mui/material";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";

import qrCode from '../../Assets/qrCode.png'

import { AccountContext } from "../../context/AccountProvider";

const Box1 = styled(Box)`
    display: flex;`


const Box2 = styled(Box)`
    padding: 50px 0px 50px 50px;`

const Box3 = styled('img')({
    height: 280,
    width: 280,
    margin:' 10px 0 0 50px'
})

const Title = styled(Typography)`
    font-size:25px;
    color: #525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:25px`

const List1 = styled(List)`
    & > li{
        padding:0px;
        margin-top:15px;
        font-size:18px;
        line-height:30px;
        color:#4a4a4a;
    }`
     

const dialogStyle = {
    height:'96%',
    marginTop:'10%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overFlow:'hidden',
}

const LoginPage = ()=>{

    const {setAccount} = useContext(AccountContext);

    const onLoginSuccess=(res)=>{
        var decoded = jwt_decode(res.credential);
        console.log(decoded);
        setAccount(decoded);
    }

    const onLoginError=(res)=>{
        console.log(res);
    }

    return (
        <>
        <Dialog
        open={true}
        hideBackdrop={true}
        PaperProps= {{sx:dialogStyle}}>
            <Box1>
                <Box2>
                  <Title>To use Whatsapp on your computer:</Title>
                  <List1>
                        <ListItem>1. Open Whatsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select Whatsapp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                  </List1>
                </Box2>
                
                <Box style={{position:'relative'}}>
                    <Box3 src={qrCode} alt="qr code" />
                        <Box style={{position:'absolute', top:'50%', transform:'translateX(25%)'}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}

                        />
                        </Box>
                </Box>
            </Box1>
        </Dialog>
        </>
    )
}

export default LoginPage;