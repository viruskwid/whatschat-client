import React, { useState } from 'react'

const styles={
  button: {
    width:'10%' ,
    height:50 ,
    fontWeight:'bold', 
    borderRadius:10 ,
    fontSize:18 ,
    backgroundColor:'#34b7f1',
    borderWidth:0,
    color:'#fff'
  },
  textarea:{ 
     width:'60%' ,
     height:50 ,
     borderRadius:10, 
     borderWidth:0 , 
     padding:10 , 
     fontSize:18
    },
  textContainer:{
    display:"flex", 
    justifyContent:'space-evenly', 
    alignItems:'center'}
}

export default function Input({addMessage}) {

  const [message , setMessage] = useState('')
  function addAMessage(){
    addMessage({
        message
    })
    setMessage('')
}
  return (
    <div  className='d-flex align-align-items-baseline  justify-content-center w-100'  style={{height:'100vh', marginTop:'200px'}}>
        <div>
           <input className='form-control shadow' rows={6} placeholder='Type a message' value={message} onChange={e=>setMessage(e.target.value)} >
  
           </input>
        </div>
         <div><button className='btn btn-success ms-2 shadow ' onClick={()=> addAMessage()}>Send</button></div>
    </div>
  )
}

 