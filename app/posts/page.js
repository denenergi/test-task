import React from 'react'
import Post from '../components/Post'
import { instance } from '../api/axios.api'
import { Container, Grid, Typography } from '@mui/material'

export const metadata = {
    title: "Posts",
    description: "List of posts",
  };

async function fetchData() {
    const data = await instance.get('/posts')
    return data.data
}

const PostsPage = async () => {
    const posts = await fetchData();
    return (
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{ fontSize: 30, alignSelf: 'center', mb: 5 }} color="text.secondary" gutterBottom variant="h2" component="h2">
                Posts
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
                {posts.map(post => <Post post={post} key={post.id} />)}
            </Grid>
        </Container>
    )
}

export default PostsPage