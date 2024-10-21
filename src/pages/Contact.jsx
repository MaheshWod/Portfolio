import React from 'react'
import Navbar from '../components/Navbar'
import { Form } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Contact = () => {

  const { register, 
    handleSubmit, 
    watch, 
    formState: { errors } }
   = useForm();
  const onSubmit = async (data) => {
const userinfo = {
  name: data.name,
  email:data.email,
  message:data.message
}
try{
  await axios.post("https://getform.io/f/amdpqnxb", userinfo);
  alert("your message has been sent")
}catch(error){
  console.log(error)
}


  }

  return (
    <>
      <Navbar />
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
        <span className='mb-5 font-semibold'>Please fill out the form below to contact me</span>
        <form onSubmit={handleSubmit(onSubmit)}
        action='https://getform.io/f/amdpqnxb'
        method='POST'
         className='bg-slate-200 w-96 px-8 py-6 rounded-xl flex flex-col items-center'>
          <h1 className='text-semibold mb-4'>Send Your Message</h1>

          <div className='w-full'>
            <label className='block text-grey-700 mt-2'>
              Full Name
            </label>
            <input
             {...register("name", { required: true })}
             className='shadow appearance-none border rounded py-2 px-2 pt-1 text-green-700 leading-tight focus:outline-none w-full'
              id='name'
              type='text'
              name='name'
              placeholder='Enter Your Full Name'
            />
            {errors.name && <span>This field is required</span>}

            <label className='block text-grey-700 mt-2'>
              Email Address
            </label>
            <input
            {...register("email", { required: true })}
             className='shadow appearance-none border rounded py-2 px-2 pt-1 text-green-700 leading-tight focus:outline-none w-full'
              id='email'
              type='text'
              name='email'
              placeholder='Enter Your Email'
            />
            {errors.email && <span>This field is required</span>}

            <label className='block text-grey-700 mt-2'>
              Message
            </label>
            <textarea 
            {...register("message", { required: true })}
            className='shadow appearance-none border rounded py-2 px-2 pt-1 text-green-700 leading-tight focus:outline-none w-full'
              id='message'
              name='message'
              type = 'text'
              placeholder='Enter Your Query'
            ></textarea>
            {errors.message && <span>This field is required</span>}
          </div>

          <div className='w-full flex justify-start mt-4'>
            <button type = 'submit'className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700'>
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
