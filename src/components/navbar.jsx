import React, { Component } from 'react';
import { Navbar, NavbarBrand, Badge } from 'reactstrap';



const NavBar = ({ totallCounter }) => {
    return (
        <div style={{ direction: "rtl" }}>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand style={{ fontSize: "1.5rem", fontWeight: "bold" }} href='/'>سبد خرید
                    <Badge style={{ fontSize: ".8rem", fontWeight: 400 }} color='info' pill className='mb-2 me-3 text-dark'>تعداد اقلام :
                        {' ' + totallCounter}
                    </Badge>
                </NavbarBrand>
            </Navbar>
        </div>
    );
}

export default NavBar;
