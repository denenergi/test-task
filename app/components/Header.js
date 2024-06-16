import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import Nav from './Nav'
import MobileNav from './MobileNav';

const Header = () => {
    return <AppBar sx={{ position: 'static', backgroundColor: "blue", mb: "30px" }}>
        <Container maxWidth="lg">
            <Toolbar sx={{p: {xs: 0, sm: 0, md: 0}}}>
                <Typography variant="h4" sx={{ flexGrow: 1 }}>
                    <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                        MUI
                    </Link>
                </Typography>
                <Nav />
                <MobileNav />
            </Toolbar>
        </Container>
    </AppBar >
}

export default Header