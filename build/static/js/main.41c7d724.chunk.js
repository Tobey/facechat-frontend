(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{164:function(e,t,n){},199:function(e,t,n){e.exports=n(357)},357:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(43),r=n.n(c),l=n(19),i=n(20),s=n(21),u=n(22),m=n(90),d=n(372),E=n(187),h=n(375),p=n(371),b=n(369),f=n(373),v=n(58),g=n(370),O=n(115),y=(n(204),function(){return o.a.createElement(O.a,{value:66,text:"3:32",styles:Object(O.b)({strokeLinecap:"butt",textSize:"14px",pathTransitionDuration:.5,pathColor:"rgba(62, 152, 199, ".concat(2,")"),textColor:"#d62d20",trailColor:"#d6d6d6",backgroundColor:"#3e98c7"})})}),S=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,{centered:!0,verticalAlign:"middle",divided:"vertically"},o.a.createElement(d.a.Row,{centered:!0,columns:1},o.a.createElement(d.a.Column,null,o.a.createElement(E.a,{src:"https://semantic-ui.com/images/avatar2/large/kristy.png",centered:!0,rounded:!0,size:"medium"})),o.a.createElement(h.a,{icon:"star",defaultRating:2,maxRating:3}),o.a.createElement(p.a,{size:"tiny"})),o.a.createElement(d.a.Row,{centered:!0,stretched:!0,columns:2},o.a.createElement(d.a.Column,{textAlign:"center"},o.a.createElement(b.a,null,o.a.createElement(b.a.Content,null,o.a.createElement(f.a,null,"Header"),o.a.createElement(b.a.Meta,null,"Description "),o.a.createElement(b.a.Description,null,"More stuff here"),o.a.createElement(b.a.Extra,null,"Additional Details")))),o.a.createElement(d.a.Column,{textAlign:"center"},o.a.createElement(b.a,null,o.a.createElement(b.a.Content,null,o.a.createElement(b.a.Meta,null,"Description")),o.a.createElement(b.a.Description,{color:"yellow"}," More stuff here "),o.a.createElement(p.a,{size:"tiny",color:"olive"},o.a.createElement(p.a.Value,null,o.a.createElement(v.a,{name:"pound sign"})," 500"),o.a.createElement(p.a.Label,null,"limited offer"))))),o.a.createElement(d.a.Row,{columns:1,centered:!0},o.a.createElement(d.a.Column,{verticalAlign:"middle",width:6},o.a.createElement(y,null))),o.a.createElement(d.a.Row,{columns:1,centered:!0},o.a.createElement(d.a.Column,{verticalAlign:"middle"},o.a.createElement(m.b,{to:"/chat/"},o.a.createElement(g.a,{size:"medium",color:"blue",style:{whiteSpace:"nowrap"}},"place a bid")))))}}]),n}(o.a.Component),k=n(365),j=n(366),C=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(k.a,{fluid:!0},o.a.createElement(j.a,{horizontal:!0},o.a.createElement("b",null,"Facechat.")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(k.a,null,o.a.createElement(S,null)))}}]),n}(o.a.Component),w=n(92),x=n(86),T=n(45),M=n(177),A=(o.a.Component,n(164),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setAudio=function(e){a.setState({audio:e})},a.setVideo=function(e){a.setState({video:e})},a.changeVideoSource=function(e){"camera"!==a.state.videoSource?a.setState({videoSource:"camera"}):a.setState({videoSource:"screen"})},a.onError=function(e){a.setState({error:"Failed to publish: ".concat(e.message)})},a.state={error:null,audio:!1,video:!0,videoSource:"camera"},a}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(T.OTPublisher,{properties:{publishAudio:this.state.audio,publishVideo:this.state.video,videoSource:"screen"===this.state.videoSource?"screen":void 0,height:"30vh",width:"30vw"}})}}]),n}(o.a.Component)),D=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setAudio=function(e){a.setState({audio:e})},a.setVideo=function(e){a.setState({video:e})},a.onError=function(e){a.setState({error:"Failed to subscribe: ".concat(e.message)})},a.state={error:null,audio:!1,video:!0},a}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(T.OTSubscriber,{properties:{subscribeToAudio:this.state.audio,subscribeToVideo:this.state.video,height:"100vh",width:"100vw"},onError:this.onError})}}]),n}(o.a.Component),_="46531532",F=(n(165),n(327),n(337)),R=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a,o;return Object(l.a)(this,n),(o=t.call(this,e)).timeout=250,o.connect=function(){var e=F.parse(o.props.location.search,{ignoreQueryPrefix:!0}).__t;console.log("token",e);var t,n=new WebSocket("ws://localhost:8002/paytok/?t=Token+"+e),a=Object(x.a)(o);n.onopen=function(){console.log("connected websocket main component"),o.setState({ws:n}),a.timeout=250,clearTimeout(t)},n.onclose=function(e){console.log("Socket is closed. Reconnect will be attempted in ".concat(Math.min(10,(a.timeout+a.timeout)/1e3)," second."),e.reason),a.timeout=a.timeout+a.timeout,t=setTimeout(o.check,Math.min(1e4,a.timeout))},n.onerror=function(e){console.error("Socket encountered error: ",e.message,"Closing socket"),n.close()},n.addEventListener("message",(function(e){console.log("Message from server ",e.data);var t=JSON.parse(e.data);"undefined"!=typeof t.token&&"undefined"!=typeof t.session_id&&(console.log("Joining session",t.session_id),a.setState({session:t.session_id,token:t.token,connectionCount:2})),"undefined"!=typeof t.username&&a.setState({username:t.username})}))},o.check=function(){var e=o.state.ws;e&&e.readyState!=WebSocket.CLOSED||o.connect()},o.state=(a={session:null,token:null,connectionCount:0},Object(w.a)(a,"session",null),Object(w.a)(a,"ws",null),Object(w.a)(a,"username",null),a),o._isMounted=!1,o.sessionEventHandlers={connectionCreated:function(e){console.log("[NEW] connection created",e);var t={connectionId:e.connection.connectionId,creationTime:e.connection.creationTime,data:e.connection.data,event:e.type,sessionId:o.state.session,parser:"connection_created"};console.log("sending it",t),o.state.ws.send(JSON.stringify(t))},connectionDestroyed:function(e){console.log("connection destroyed",e)},sessionConnected:function(e){console.log("Client connect to a session")},sessionDisconnected:function(e){console.log("Client disConnect to a session")},sessionReconnected:function(e){console.log("session reconnected")}},o}return Object(i.a)(n,[{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&(console.log("Mounted!"),this.connect(),console.log("connected to session"))}},{key:"render",value:function(){return null==this.state.session?null!=this.state.username?o.a.createElement("div",null,"Hi ",this.state.username," "):o.a.createElement("div",null,"Loading.."):o.a.createElement(T.OTSession,{apiKey:_,sessionId:this.state.session,token:this.state.token,eventHandlers:this.sessionEventHandlers,onError:this.onError},o.a.createElement(T.OTStreams,null,o.a.createElement(D,null)),o.a.createElement(A,null))}}]),n}(o.a.Component),L=n(374),N=n(368),z=n(367),I={h1:{marginTop:"3em"},h2:{margin:"4em 0em 2em"},h3:{marginTop:"2em",padding:"2em 0em"},last:{marginBottom:"300px"}},V=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(k.a,null,o.a.createElement(f.a,{as:"h1",content:"Signup",style:I.h1,textAlign:"center"}),o.a.createElement(f.a,{as:"h2",content:"Personal Detail",style:I.h2,textAlign:"center"}),o.a.createElement(L.a,null,o.a.createElement(N.a,null,o.a.createElement(N.a.Field,null,o.a.createElement("label",null,"First Name"),o.a.createElement("input",{placeholder:"First Name"})),o.a.createElement(N.a.Field,null,o.a.createElement("label",null,"Last Name"),o.a.createElement("input",{placeholder:"Last Name"})),o.a.createElement(N.a.Field,null,o.a.createElement(z.a,{label:"I agree to the Terms and Conditions"})),o.a.createElement(g.a,{type:"submit"},"Submit"))))}}]),n}(o.a.Component),H=n(16),J=o.a.createElement(m.a,null,o.a.createElement(H.c,null,o.a.createElement(H.a,{exact:!0,path:"/",component:C}),o.a.createElement(H.a,{exact:!0,path:"/chat/",component:R}),o.a.createElement(H.a,{path:"/signup/",component:V})));r.a.render(J,document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.41c7d724.chunk.js.map