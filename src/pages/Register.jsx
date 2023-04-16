import React from 'react'

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span>Adamo Chat App</span>
            <span>Register</span>
            <form action=''>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type="file"/>
                <button>Sign up</button>
            </form>
            <p>You have an account? Login</p>
        </div>
    </div>
  )
}
