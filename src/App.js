import React from 'react';
import logo from './logo.svg';

import Home from './components/Layout';

import {Divider,  } from 'semantic-ui-react'


class App extends React.Component {


  render() {
    return (
      <Container  fluid style={{ width: '100%', height: '100%' }}>
      <Divider  horizontal><b>Facechat.</b></Divider>
         <br /><br />
         <Container>
           <Home/>
         </Container>
     </Container>

      );
    }
}

export default App
