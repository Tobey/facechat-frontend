import React from 'react';
import  { NavLink,
} from "react-router-dom"

import { 
  Grid, 
  Image, 
  Card, 
  Icon, 
  Button, 
  Container, 
  Item, 
  Divider,
  Header,
  Rating,
  Statistic,
  Segment,
  Progress
  } from 'semantic-ui-react'

import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Baddie from './baddie1.jpg';
import Tana from './tana.jpg';
import Rando from './profilepic.jpeg';
import Burnes from './bernes.jpeg';

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

    render() {
      return (
        <Container >
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
              <NavLink to="/chat/">  
                <Button  size="medium" color="blue"
                  fluid
                >
                  Call to action
                </Button>
              </NavLink>
         
              </Grid.Column>
              
          </Grid.Row>
      </Grid>
      </Container>
  
        );
      }
  }
  
  export default ProfileLayout;