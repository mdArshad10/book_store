import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const loginFormSubmit = (data) =>{
        console.log("form is submit")
        console.log(data)
    }

    const googleSignInHandler = ()=>{
        console.log("your are login successfully")
    }
    
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Login</h2>
            <form onSubmit={handleSubmit(loginFormSubmit)}>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-sm font-bold text-gray-700 mb-2'>Email</label>
                    <input type='email' {...register("email", { required: true, maxLength: 20 })}  id="email" placeholder='Email Address' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <input type='password' {...register("password", { required: true, maxLength: 20 })} placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div>
                    <input type="submit" value="Login" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none' />
                </div>
            </form>

            <p className='align-baseline font-medium mt-4 text-sm'>Don't have an account? <Link to='/register' className='text-blue-400  hover:underline'>Register</Link></p>

            <div className='mt-2'>
                <button
                onClick={googleSignInHandler}
                className='w-full flex justify-center items-center bg-blue-500 text-white px-4 py-2 font-bold rounded focus:outline-none hover:bg-white hover:text-gray-600'>
                    <FaGoogle className='mr-2'/> Sign in with Google 
                </button>
            </div>
            <p className="mt-6 text-center text-gray-500 text-xs">2025 Book Store, All Rights reserved. </p>
        </div>
    </div>
  )
}

export default Login;