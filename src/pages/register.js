import React, { Component } from 'react';
import MainForm from '../forms/MainForm';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

class Register extends Component {

  render() {
    return(
      <Container textAlign='center'>
       <MainForm />
     </Container>   )
  }
}

export default Register;
