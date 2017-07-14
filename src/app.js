import React from 'react';
import Helmet from 'react-helmet';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons';
import SelectField from 'react-md/lib/SelectFields';

import ScoreboardModule from './modules/scoreboard';

import './styles.global.scss';

let logo = require('../static/img/Frown Crown White.svg');

const nav = <Button key="nav" icon>menu</Button>;
const actions = [
  <Button key="search" icon>search</Button>,
];

const title = (
  <h2 style={{ textAlign: 'center' }}>Sports Despair</h2>
);

const App = () => (
  <div>
    <Helmet
      title="The Sports Despair"
      meta={[{
        name: 'description',
        content: 'The Sports Despair Index, charting the misery brought about by your citys sports teams',
      }]} />
    <Toolbar
      colored

      fixed={true}
      className='header'
    >
      <div className='logo' style={{ display: 'inline-block' , textAlign: 'center', position: 'absolute', lineHeight: '70px', left: '50%', transform: 'translate3d(-50%, 0, 0)' }}>
      Sports<img src={logo} style={{ height: 60, verticalAlign: 'top', paddingLeft: 10, paddingRight: 10 }} />Despair
      </div>
    </Toolbar >
    <main className="md-toolbar-relative" style={{ paddingTop: 50, textAlign: 'center' }}>
      <ScoreboardModule />
    </main>
  </div>
);

export default App;