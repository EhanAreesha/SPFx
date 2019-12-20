import * as React from 'react';


import NavItem from '../NavItem/NavItem';



const NavItems = () => (
    <ul>
        <NavItem url='/'>Home</NavItem>
        <NavItem url='/About'>About</NavItem>
        <NavItem url='/Contact'>Contact</NavItem>
    </ul>
);
export default NavItems;