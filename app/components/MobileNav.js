"use client"
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { usePathname } from "next/navigation";

const navItems = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Posts",
        link: "/posts"
    }
]

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250, height: "100%", background: "blue", display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', p: 4 }} role="presentation" onClick={toggleDrawer(false)}>
            <Typography variant="h3" sx={{ alignSelf: 'center', mb: 4 }}>
                <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                    MUI
                </Link>
            </Typography>
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Link href={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                            <ListItemButton sx={{ textAlign: 'center' }} selected={item.link === pathname}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <React.Fragment key={'right'}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    open={open} onClose={toggleDrawer(false)}
                >
                    {DrawerList}
                </Drawer>
            </React.Fragment>
        </Box>
    )
}

export default MobileNav