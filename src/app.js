/*eslint no-unused-vars: "error"*/
import React from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';
import SelectField from 'react-md/lib/SelectFields';

import { Follow, Share } from 'react-twitter-widgets'

import ScoreboardModule from './modules/scoreboard';
import AdminModule from './modules/admin';

import './styles.global.scss';

let logo = require('../static/img/Frown Crown White.svg');

const nav = <Button key="nav" icon>menu</Button>;
const actions = [
  <Button key="search" icon>search</Button>,
  <Button key="edit" icon>edit</Button>,
  <Button key="chart-line" icon>chart-line</Button>,
];

const title = (
  <h2 style={{ textAlign: 'center' }}>Sports Despair</h2>
);

const App = () => (
  <div>
    <Helmet
      title="The Sports Despair"
      meta={[
        { name: 'description', content: 'The Sports Despair Index, charting the misery brought about by your city\'s sports teams' },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "link", rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { name: "link", rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
        { name: "link", rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
        { name: "link", rel: "manifest", href: "/manifest.json" },
        { name: "link", rel: "mask-icon", href: "/safari-pinned-tab.svg" },
        { name: "link", rel: "shortcut icon", href: "/favicon.ico" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
        { name: "google-site-verification", content: "Yhgd2rV5JGe52krL2rcOyekBMDOwoRxOGHsMf3YZG0o" },
      ]}
    />
    <Toolbar
      colored
      fixed={true}
      className='header'
    >
      <div className='logo' style={{ display: 'inline-block', textAlign: 'center', position: 'absolute', lineHeight: '70px', left: '50%', transform: 'translate3d(-50%, 0, 0)' }}>
        &nbsp; Sports
        <img className="logoImg" src={logo} />
        Despair
      </div>
    </Toolbar >
    <main className="md-toolbar-relative" style={{ paddingTop: 50, textAlign: 'center' }}>
      <Follow username="SportsDespair" />


      <Switch>
        <Route exact path='/' component={ScoreboardModule} />
        <Route path='/admin' component={AdminModule} />
      </Switch>
      <Share url="https://www.sportsdespair.com" />
    </main>
  </div>
);

export default App;