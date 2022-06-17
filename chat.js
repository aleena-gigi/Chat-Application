
const socket=io('http://localhost:4000',{transports: ['websocket']});
const msgform=document.getElementById('send-container') //gets the field form to listen to the events
const msginp=document.getElementById('msg-input')
const textmsg=document.getElementById('text-msg')
const nameelement=document.getElementById('name')
const newmsg=document.getElementById('msg-box') //create a variable to access the msg box feild

socket.on('send-to-all',data=>{     //When server broadcast the msg to all
    console.log(data)
    append(data) //call the function append to display the new msg on the msg box field
})
msgform.addEventListener('submit',e=>{  //this function gets called when the user submits the form
    e.preventDefault()  //it prevents from submitting blank document
    const message=msginp.value  //takes the value from the msg-input field
    const name=nameelement.value    //takes the value from the name field
    append(`Me:${message}`)        //This prints the msg you sent on your browser as Me
    socket.emit('rec-msg',name,message)  //sends the msg to the server
    msginp.value=""             //Clears the input boxes
    nameelement.value=""

})
function append(msg){
    const msgelement=document.createElement('div')  //create a new element of type div
    msgelement.innerText=msg    //set its value as the msg
    newmsg.append(msgelement) //appends the new msg on the msg box field

}
