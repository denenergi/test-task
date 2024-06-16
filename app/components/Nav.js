"use client"
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

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

const Nav = () => {
    const pathname = usePathname()
    return (
        <List sx={{ display: 'flex', gap: '10px', display: {xs: 'none', sm: 'flex'} }}>
            {navItems.map((item, index) => (
                <ListItem disablePadding key={index} sx={{ flexGrow: 1 }}>
                    <Link href={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItemButton sx={{ textAlign: 'center' }} selected={item.link === pathname}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default Nav