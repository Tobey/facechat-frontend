import React from 'react';
import { Form, Checkbox, Container, Segment, Header, Input } from 'semantic-ui-react'

import { history } from '../helpers/history';
import { Fetch } from '../helpers/auth-request';
import { handleResponse } from '../helpers/handle-response';
import { authenticationService } from '../services/auth.service';

import MobileButton from '../components/Button'

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }

  class Login extends React.Component {
    constructor(props) {
      super(props);

      // redirect to home if already logged in
      if (authenticationService.currentUser) { 
        console.log('user ', authenticationService.currentUser)
        authenticationService.logout();
        this.props.history.push('/chat/mayajama/');
         
      }

      this.state = {
          username: null,
          password: null,
          auth: null
      };
  }

  componentDidMount() {
    authenticationService.auth.subscribe(auth => this.setState({ auth }));
  }


  logout() {
      authenticationService.logout();
      history.push('/login/');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    authenticationService.login(this.state.username, this.state.password).then(auth => {
      if (auth) {
        console.log('login success', auth)
        const params = new URLSearchParams(this.props.location.search );
        let next = params.get('next') || '/'
        this.props.history.push(next);
      }
    })
         
    
  }
    render() {
      return (
        <Container>
            <Header as='h1' content='Login' style={style.h1} textAlign='center' />
                <Form>
                <Form.Field>
                    <label>Usernane or Email</label>
                    <Form.Input  
                    onChange={(e) => this.setState({username: e.target.value})}
                    placeholder='Username or Email' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Form.Input 
                    type='password' 
                    onChange={(e) => this.setState({password: e.target.value})} />
                </Form.Field>
                  <MobileButton
                    fluid
                    type='submit' 
                    disabled = {!(this.state.username && this.state.password)}
                    onClick={this.handleSubmit} >Login
                    </MobileButton>
                </Form>

        </Container>
        );
      }
    
    }
    export default Login