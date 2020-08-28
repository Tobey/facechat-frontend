import {  webSocket } from 'rxjs/webSocket';


const createWebSocketConnection = (base, params) => {

  const  query = new URLSearchParams(params).toString()
  const url =  `${base}/paytok/?${query}`
  console.log(url)
  const socket = webSocket(url)
  return  socket
}

  export const wsService = {
    createWebSocketConnection,
};