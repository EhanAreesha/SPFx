import * as React from 'react';

import MenuBar from '../NavChrome/MenuBar/MenuBar'

const NavChrome = (props:any) => (
    <div>
        <MenuBar/>
        <div>
           {props.children}
        </div>
    </div>
);
export default NavChrome;