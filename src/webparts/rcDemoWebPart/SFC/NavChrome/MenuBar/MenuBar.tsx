import * as React from 'react';
import Logo from '../Logo/Logo';
import NavItems from '../NavItems/NavItems';



const MenuBar = () => (
    <header>
        <Logo/>
            <nav>
                 <NavItems/>   
            </nav>
    </header>
);
export default MenuBar;