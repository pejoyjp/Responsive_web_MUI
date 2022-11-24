import { AppBar, styled,Box, Toolbar, Typography, InputBase,Badge, Avatar,Menu,MenuItem} from '@mui/material';
import React, { useState } from 'react';
import logo from '../imges/logo.png'
import smallLogo from '../imges/smal_logo.png'
import { Mail ,Notifications} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent:'space-between'
})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
    
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems:"center",
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems:"center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))

function Narvar(props) {
    const [open,setOpen] = useState(false)
    return (
        
        <AppBar position='sticky'>
            <StyledToolbar>
                <Box sx={{display:{xs:"none",sm:"block"}}}>
                    <img src={logo} alt='' width="150px" />
                </Box>

                <Box sx={{display:{ xs: "block", sm: "none" }}}>
                    <img src={smallLogo} alt='' width="50px" />
                </Box>
                <Search>
                    <InputBase placeholder='search'/>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: "30px", height: "30px" }}
                        src="https://images.pexels.com/photos/5644036/pexels-photo-5644036.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        onClick = {e=>setOpen(true)}
                    />
                        
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: "30px", height: "30px" }} src="https://images.pexels.com/photos/5644036/pexels-photo-5644036.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <Typography variant='span'>Jin</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose = {e=>setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
        
    );
}

export default Narvar;