import React, { useState } from 'react'
import _ from 'lodash'

const button = {
  width:'10%' ,
  height:50 ,
  fontWeight:'bold', 
  borderRadius:10 ,
  fontSize:18 ,
  backgroundColor:'#075e54',
  borderWidth:0,
  color:'#fff',
  margin:10
}

export default function UserLogin({setUser}) {
  const [user , setAUser] = useState('')

  function handleSetUser(){
    if (!user) return
    localStorage.setItem('user', user)
    setUser(user)
    localStorage.setItem('avatar' ,`https://picsum.photos/id/${_.random(1, 1000)}/200/300` )
  }

  return (
  <>
      <div  style={{height:'70px'}} className='w-100 bg-secondary  shadow  '>
         <h3 className='text-light ' style={{margin:10, textAlign:'center'}}> <i class="fa-brands fa-facebook-messenger me-2"></i> Whats Chat </h3>
      
        
      </div>

      <div style={{height:'100vh' }} className='w-100 d-flex   justify-content-center mt-5'>
      <input    style={{height:'50px' , border:'none'}}
                  className='shadow '
                    value={user}
                    onChange={e=> setAUser(e.target.value)}
                    placeholder="Enter Username"
                    ></input>

                  <div className='mt-2 ms-2 '> <button className='btn btn-success shadow ' onClick={()=>handleSetUser()}>Login</button></div>
      </div>
     
  </>
  )
}

