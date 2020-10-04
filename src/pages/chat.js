import React from 'react';
import { withRouter } from "react-router-dom";

import Publisher from '../components/Publisher';
import Subscriber  from '../components/Subscriber';
import { OTSession, OTStreams } from 'opentok-react';

import ProfileLayout from '../components/Layout';


import opentokconfig from '../config';
import config from '../config';
import { authenticationService } from '../services/auth.service';
import  { wsService } from '../services/ws.service'


import './chat.css'
import 'semantic-ui-css/semantic.min.css';

const OT = require('@opentok/client');
const qs = require('qs');

class Chat extends React.Component {
  timeout = 250; // Initial timeout duration as a class variable


  constructor(props) {
    super(props);

    this._isMounted = false;

    this.serverHandlers  = {
      'user_details': this.handle_user_details,
      'publish': this.handle_paytok_credentials,
      'subscribe': this.handle_paytok_credentials,
    }

    this.state = {
      auth: null,
      session: null,
      token: null,
      connectionCount: 0,
      session: null,
      ws: null,
      username: null,
      isConnected: false,
      influencer: null,
      error: null
    }
    

 this.sessionEventHandlers = {
      connectionCreated: event =>  {
          console.log("[NEW] connection created", event);
          var data = {
            connectionId: event.connection.connectionId,
            creationTime: event.connection.creationTime,
            data: event.connection.data,
            event: event.type,
            sessionId: this.state.session,
            action: 'connection_created',

          }
          console.log('sending it', data)
          authenticationService.ws.send(data);


      },
      connectionDestroyed: event =>  {
          console.log("connection destroyed", event);
      },
      sessionConnected: event => {
          console.log("Client connect to a session")
      },
      sessionDisconnected: event => {
        console.log("Client disConnect to a session")
      },
      sessionReconnected: event => {
        console.log("session reconnected")
      },
    };
  }

  componentWillUnmount() {

    this._isMounted = false;
    let data = {
      influencer: this.props.match.params.influencer,
      action: 'exit_influencer_page'
    }
    if (this.state.ws) {
        this.state.ws.next(data)
    }
 }
 
  componentDidMount() {
    this._isMounted = true; // https://stackoverflow.com/questions/52061476/cancel-all-subscriptions-and-asyncs-in-the-componentwillunmount-method-how
    if (!this._isMounted || this.state.isConnected) {
        return
    }
    console.log("Mounted!", this.state.auth, authenticationService.auth, authenticationService.auth.ws)


    authenticationService.auth.subscribe(auth => {
      if (!auth) {
        return
      }
      console.log('chat auth.subscribe', auth)
      this.setState({auth})
      this.connectToWS()
    })

    // authenticationService.auth.ws.send(data)

    // this.connect()
    console.log('connected to session', this.state)
  }

  connectToWS = () => {
    authenticationService.refresh()
    const ws_params = { 't': `Bearer ${authenticationService.accessToken}`}
    const ws = wsService.createWebSocketConnection(config.PAYTOK_WS_URL, ws_params)
    this.setState({ ws }, () => {

    ws.subscribe(
        (data) => this.onWsEvent(data),
        (err) => this.onWsClose(err),
        () => this.onWsClose(),
    );
    let data = {
      influencer: this.props.match.params.influencer,
      action: 'enter_influencer_page'
    }
    ws.next(data)
    this.setState({ isConnected: true })

    });
  }

  onWsEvent = (data) => {
    console.log('ws event', data)

    if (typeof data.action != 'undefined') {
      let hander = this.serverHandlers[data.action]
      if (typeof hander != 'undefined') {
          hander(data)
      } else {
        console.log('[NO Handler]', data)
      }

    } else {
      console.log('[UNHANLDED WS MSG]', data)
    }

  }

  onWsError = (err) => {
    console.log('Socket err', err)
  }

  onWsClose = () => {
    console.log('Socket closed')
    const that = this
    setTimeout(function() {
      that.connectToWS()
    }, 1000);

        //     console.log(
        //     `Socket is closed. Reconnect will be attempted in ${Math.min(
        //         10000 / 1000,
        //         (that.timeout + that.timeout) / 1000
        //     )} second.`,
        //     e.reason
        // );

        // that.timeout = that.timeout + that.timeout; //increment retry interval
        // connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
  }


  handle_user_details = (data) => {

    if (typeof data.username != 'undefined' && typeof data.influencer != 'undefined') {

        this.setState({username: data.username, influencer: data.influencer})

    }

  }


  handle_paytok_credentials = (data) => {

    if (typeof data.token != 'undefined' && typeof data.session_id != 'undefined' ) {

      console.log('Joining session', data.session_id);
      this.setState({session: data.session_id, token: data.token})

    }
    
  }

  //  connect = () => {
  //       let token = authenticationService.accessToken
  //       let params = { token }
  //       let query_params = Object.entries(params).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');

  //       console.log('params', params)
  //       var   ws = new WebSocket(`${config.PAYTOK_WS_URL}}/paytok/?${query_params}`)
  //       let that = this; // cache the this
  //       var connectInterval;
  //       // websocket onopen event listener
  //       ws.onopen = () => {
  //           console.log("connected websocket main component");

  //           this.setState({ ws: ws });

  //           that.timeout = 250; // reset timer to 250 on open of websocket connection
  //           clearTimeout(connectInterval); // clear Interval on on open of websocket connection
  //       };
  //       // websocket onclose event listener
  //       ws.onclose = e => {
  //           console.log(
  //               `Socket is closed. Reconnect will be attempted in ${Math.min(
  //                   10000 / 1000,
  //                   (that.timeout + that.timeout) / 1000
  //               )} second.`,
  //               e.reason
  //           );

  //           that.timeout = that.timeout + that.timeout; //increment retry interval
  //           connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
  //       };

  //       // websocket onerror event listener
  //       ws.onerror = err => {
  //           console.error(
  //               "Socket encountered error: ",
  //               err.message,
  //               "Closing socket"
  //           );

  //           ws.close();
  //       };

  //       ws.addEventListener('message', function (event) {
  //           console.log('Message from server ', event.data);
  //           var data = JSON.parse(event.data)
  //           if (typeof data.token != 'undefined' && typeof data.session_id != 'undefined' ) {
  //                   console.log('Joining session', data.session_id);
  //                  that.setState({session: data.session_id, token: data.token, connectionCount: 2})

  //           }

  //           if (typeof data.username != 'undefined' ) {
  //              that.setState({username: data.username})

  //           }

  //       });
  //   };
    /**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
    // check = () => {
    //     const { ws } = this.state;
    //     if (!ws || ws.readyState == WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
    // };

  render() {
    {console.log('renderrrr', this.state)}

    if (this.state.session == null ){

       if (this.state.username != null && this.state.influencer != null) {
             return <ProfileLayout 
                      username={this.state.username}
                      influencerFirstName={this.state.influencer.user.first_name}
                      influencerLastName={this.state.influencer.user.last_name}
                      influencerUsername={this.state.influencer.user.username}
                      category={this.state.influencer.category}
                      description1={this.state.influencer.description1}
                      description2={this.state.influencer.description2}
                      per_slot={this.state.influencer.per_slot}
                      slot={this.state.influencer.slot}
                      error={this.state.error}
              />

       } else  {
             return <div>Loading..</div>
       }
    } else {
      return (
          <OTSession
          apiKey={opentokconfig.API_KEY}
          sessionId={this.state.session}
          token={this.state.token}
          eventHandlers={this.sessionEventHandlers}
          onError={this.onError}
    >

          <OTStreams>
            <Subscriber/>
        </OTStreams>
        <Publisher/>
      </OTSession>
      )
    }
  }


}
export default  withRouter(Chat) 

