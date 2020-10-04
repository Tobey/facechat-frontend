import React from 'react';
import  { NavLink,
} from "react-router-dom"

import { 
  Grid, 
  Image, 
  Icon, 
  Container, 
  Item, 
  Header,
  Rating,
  Statistic,
  Message
  } from 'semantic-ui-react'

import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Baddie from './baddie1.jpg';
import Tana from './tana.jpg';
import Rando from './profilepic.jpeg';
import Burnes from './bernes.jpeg';

import MobileButton from './Button'

import { apiService } from '../services/api.service';

const Progressbar = () => (
  <CircularProgressbar
  value={66}
  text={`3:32`}
  // circleRatio={0.5}
  styles={buildStyles({
    strokeLinecap: 'butt',
    textSize: '14px',
    pathTransitionDuration: 0.5,
    pathColor: `rgba(62, 152, 199, ${200 / 100})`,
    textColor: '#d62d20',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
)


class ProfileLayout extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        error: null
      }
    }

    render() {

      let message

      if (this.state.error){
        message = <Message negative floating> <Message.Header>{this.state.error}</Message.Header></Message>
      } else {
        message =  ''
      }
      return (
        <Container >



              {message}
          <Grid  centered verticalAlign='middle' divided='vertically'>
          {/* top  profile row  */}
          <Grid.Row 
          centered 
          columns={1} 
          style={{
          background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,0.5)), url(${Burnes})`,
          padding: '10em'
          }}>


  
          </Grid.Row>
          <Grid.Row>
          <Grid.Column 
             style={{}}>
              <Image src={Rando} centered rounded  size='small'/>
            </Grid.Column>
          <Rating icon='star' defaultRating={2} maxRating={3} />
          </Grid.Row>

          {/* profile details */}
          <Grid.Row centered stretched columns={2} >
            <Grid.Column textAlign="center" >
                <Item> 
                    <Item.Content>
                        <Header
                          style={{textTransform:'captialize'}}
                        > 
                          {this.props.influencerFirstName} {this.props.influencerLastName}
                        </Header>
                        <Item.Meta> {this.props.category}  </Item.Meta>
                        <Item.Description>
                        {this.props.description1}
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </Item>
            </Grid.Column>
            <Grid.Column textAlign="center">
                <Item>
                  <Item.Content>
                  <Item.Meta>Description</Item.Meta>
                  </Item.Content>
                  <Item.Description color="yellow">     {this.props.descriptionw2} </Item.Description>
                  <Statistic size='tiny' color='olive' >
                  <Statistic.Value>
                    <Icon name='pound sign'/> {this.props.per_slot}
                  </Statistic.Value>
                  <Statistic.Label>  {this.props.slot} min</Statistic.Label>
                </Statistic>
                </Item> 
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row columns={1} centered>
              <Grid.Column verticalAlign='middle' width={6}>  
              <Progressbar/>
          </Grid.Column>
          </Grid.Row> */}
          {/* Live Actions */}
          <Grid.Row columns={1} centered>
              <Grid.Column verticalAlign='middle'>
                <MobileButton  size="medium" color="blue"
                  fluid
                  onClick={
                    () => {
                      
                      console.log('paying from profile ')
                      const respose = apiService.payForSession(this.props.influencerUsername)

                      respose.then(data => {
                        if (typeof data.error !== 'undefined') {
                        console.log('response !!!!! ---- ',data)
                          this.setState({error: data.error})
                          const that = this
                          setTimeout(function() {
                            that.setState({error: null})
                          }, 2000);
                      } 
                      })
                   

                    }
                  }
                >
                  Call to action
                </MobileButton>
         
              </Grid.Column>
              
          </Grid.Row>
      </Grid>
      </Container>
  
        );
      }
  }
  
  export default ProfileLayout;