import React from 'react';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';

import '~/config/loadFonts.js';

import Routes from '~/routes';

const App = () => (
  <>
    <Routes />
    <StatusBar barStyle="light-content" backgroundColor="#8A05BE" />
  </>
);

export default App;
