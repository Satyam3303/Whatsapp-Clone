import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box, styled } from '@mui/material';

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;`

const Parent = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;    
`


const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px 10px;
    color: #919191;
    `

const InputField = styled(InputBase)`
    width: 100%;
    padding:16px;
    padding-left:65px;
    height: 15px;
    font-size: 14px;`

const Search = ()=>{
    return(
        <>
        <Component>
            <Parent>
                <Icon>
                <SearchIcon
                fontSize='small'/>
                </Icon>
                <InputField
                placeholder='Search or start a new chat'/>
            </Parent>
        </Component>
        </>
    )
}

export default Search;