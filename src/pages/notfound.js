import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

class NotFound extends Component {

  render() {
    return (
      <Container textAlign='center' >
            <Header 
             as='h1'>Page not found.</Header>
     </Container>   )

  }
}

export default NotFound;
