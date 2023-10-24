import { Box, Typography, styled, Divider } from "@mui/material";

const Wrapper = styled(Box)`
    background: #f8f9f8;
    padding: 30px 0;
    text-align:center;
    height:100vh;
    `

const Container = styled(Box)`
    padding: 0 200px;
    `
const Image = styled('img')({
    width:400,
    marginTop:100
})

const Title = styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family:inherit;
    font-weight:300;
    color:#41525d;
    `

const SubTitle = styled(Typography)`
    font-size: 14px;
    color #667781;
    font-weight:400;
    font-family: inherit;`

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity:0.4;`

const EmptyChat = () =>{

const image = "https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg"
    return(
        <>
        <Wrapper>
            <Container>
                <Image src={image} alt="empty"/>
                <Title>Whatsapp Web</Title>
                <SubTitle>Send and receive messages without keeping your phone online.</SubTitle>
                <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</SubTitle>
                <StyledDivider/>
            </Container>
        </Wrapper>
        </>
    )
}

export default EmptyChat;