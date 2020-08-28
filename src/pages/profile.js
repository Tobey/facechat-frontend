import React from 'react';

import ProfileLayout from '../components/Layout';

import { Container, Divider } from 'semantic-ui-react'


class Profile extends React.Component {
  render() {
    return (
      <Container  fluid >
      <Divider  horizontal><b>Facechat.</b></Divider>
         <br /><br />
         <Container>
           <ProfileLayout/>
         </Container>
     </Container>

      );
    }
}

export default Profile