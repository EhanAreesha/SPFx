import * as React from 'react';

import { NavLink } from 'react-router-dom';

export interface NavItemProps{
    url: string,
    exact?: boolean,
    children: React.ReactNode
}

const NavItem = (props:NavItemProps) => (
    <li>
        <NavLink 
            to={props.url} 
            exact={props.exact}> {props.children} 
        </NavLink>
    </li>
);
export default NavItem;