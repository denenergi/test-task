import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const Post = ({ post }) => {
    return (
        <Grid item xs={1} sm={1} md={1}>
            <Card sx={{ minWidth: 200, height: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <CardContent >
                    <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom>
                        {post.title}
                    </Typography>
                    <Typography variant="p" component="div" sx={{ fontSize: 12}}>
                        {post.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={`/posts/${post.id}`}><Button size="small">Learn More</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Post