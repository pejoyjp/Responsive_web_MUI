import React from 'react';
import { Box } from '@mui/material';

import Post from './Post';

function Feed(props) {
    return (
        <Box flex={4} >
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    );
}

export default Feed;