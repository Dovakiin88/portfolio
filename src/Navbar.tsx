import React, { ReactNode, useState } from "react";
import HouseIcon from '@mui/icons-material/House';
import StorageIcon from '@mui/icons-material/Storage';
import FeedIcon from '@mui/icons-material/Feed';
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import { FaBars } from 'react-icons/fa'


interface NavbarProps {
    children?: ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen); }
    const menuItem = [
        {
            path: '/',
            name: 'Home',
            icon: <HouseIcon />
        },
        {
            path: '/bio',
            name: 'About Me',
            icon: <FeedIcon />
        },
        {
            path: '/qualifications',
            name: 'Skills',
            icon: <FeedIcon />
        },
        {
            path: '/contactme',
            name: 'Contact me',
            icon: <StorageIcon />
        }
    ]

    return (
        <div className="container">
            <div style={{ width: isOpen ? '300px' : '50px', color: 'white' }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">A.V.A</h1>
                    <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>

                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Navbar