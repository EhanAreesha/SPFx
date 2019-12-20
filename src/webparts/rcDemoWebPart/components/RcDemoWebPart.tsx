import * as React from 'react';
import styles from './RcDemoWebPart.module.scss';
import { IRcDemoWebPartProps } from './IRcDemoWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';

import EventInfo from '../EventInfo/EventInfo';

import NavChrome from '../SFC/NavChrome/NavChrome'
import Members from "../Members/Members";
import { HashRouter, Switch, Route } from 'react-router-dom';


export default class RcDemoWebPart extends React.Component<IRcDemoWebPartProps, {}> {
  public render(): React.ReactElement<IRcDemoWebPartProps> {
    return (
      <HashRouter>
        <NavChrome>
          <Switch>
            <Route path="/Contact" component={Members} />
            <Route path="/" component={EventInfo} exact/>
            <Route render={()=><h1>Page Not found</h1>} />
          </Switch>          
        </NavChrome>
      </HashRouter>
    );
  }
}
