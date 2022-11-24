import React, { useState } from 'react';
import {Add as AddIcon, DateRange, EmojiEmotions} from "@mui/icons-material"
import { Fab, Tooltip, Modal, Box, Typography, Avatar,TextField,Button,ButtonGroup} from '@mui/material';
import styled from 'styled-components';
import { createTheme, Stack } from '@mui/system';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
    
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: "10px",
    marginBottom:"20px"
    
})

function Add(props) {
    const [open, setOpen] = useState(false)
   
    return (
        <>
            <Tooltip onClick={e=>setOpen(true)}
                title="Delete" sx={{
                position: "fixed",
                bottom: 20,
                left:{xs:"calc(50% - 25px)",md:30}
            }}>
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign='center'>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar src='https://images.pexels.com/photos/7799327/pexels-photo-7799327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            sx={{width:30,height:30}} />
                        
                        <Typography variant='span' fontWeight={500}>
                            Jin
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{width:"100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Default Value"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={2}>
                        <EmojiEmotions />
                        <EmojiEmotions />
                        <EmojiEmotions />
                        <EmojiEmotions />
                    </Stack>

                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>One</Button>
                        <Button sx={{width:"100px"}}>
                            
                            <DateRange/>
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
}

export default Add;