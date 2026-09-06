//Creates new Webscoket connection to the specified URL
const socket = new WebSocket('ws://localhost:8000');

//Excutes when the connect is succesfully estblished
socket.addEventListener('open', event =>{
    console.log('WebSocket connection estabilished!');
    //sends a message to the WebSocket server 
    socket.send("Hello Server!");
});

//Listen for messages and excutes when a message is recived from the server.
socket.addEventListener('message', event =>{
    consloe.log('Message from server:', event.data);
});

//Executes when the connction is closed ,providing the close code and reason
socket.addEventListerner('close',event =>{
    console.logI('Webconnection is closed:', event.code,event.reason);

});

//Excutes if an error occurs during the webSocket communication
socket.addEventListener('error', error =>{
    console.log('Websocket error:', error);
});