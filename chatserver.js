const io=require('socket.io')(4000) /*creates a socket for us on the port 3000.r
socket.io() is actually a function so we are going to call this function and run it in port 3000 
and we called it as a variable io*/

io.on('connection',socket =>{       /*this is going to run every time a client connects to our server and it gives a 
                                    socket instance for each one of them*/
    console.log(socket.id)       //socket id is the id each user gets when they connect to the server  
    socket.on('rec-msg',(name,msg)=>{
       // console.log(data) //send it to all the clients except the one who sent it
        socket.broadcast.emit('send-to-all',`${name}:${msg}`)
    })                 
})    
/* 
 Install devstart
 now go to the package.json add scripts{ "devStart":"nodemon"}
 devStart prevents you from running your server each time you make some changes in the code
 This is to Run the server: npm run devStart
 now open the index.html file
 */