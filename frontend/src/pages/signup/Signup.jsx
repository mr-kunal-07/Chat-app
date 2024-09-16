import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (

    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-200'>Sign Up
          <span className='text-blue-500'> Chat App</span>
        </h1>

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter Name' className='w-full input h-10 input-bordered' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input h-10 input-bordered' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Password' className='w-full input h-10 input-bordered' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Conform Password</span>
            </label>
            <input type="password" placeholder='Conform Password' className='w-full input h-10 input-bordered' />
          </div>

          {/* GENDER CHECKBOX GOES HEAR */}
          <GenderCheckBox/>

          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>Already have an account?</a>

          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
          </div>

        </form>



      </div>
    </div>
  )
}

export default Signup