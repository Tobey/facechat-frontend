import React from 'react';
import { Container} from 'semantic-ui-react'

import { history } from '../helpers/history';
import { authenticationService } from '../services/auth.service';


  class Logout extends React.Component {
    constructor(props) {
      super(props);

      // redirect to home if already logged in
      if (authenticationService.currentUser) { 
        console.log('user ', authenticationService.currentUser)
        authenticationService.logout().then(() => {
          this.props.history.push('/login/');
        });
         
      }

  }

  componentDidMount() {
    authenticationService.auth.subscribe(auth => this.setState({ auth }));
  }


  logout(e) {
      e.preventDefault();
      authenticationService.logout().then(() => {
        history.push('/login/');
      });
  }

    render() {
      return (
        <Container>
          loging out ..
        </Container>
        );
      }
    
    }
    export default Logout