import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import firebaseConfigApp from '../util/firebase-app'
import { getFirestore,addDoc, collection  } from 'firebase/firestore'
import Swal from 'sweetalert2'
const db = getFirestore(firebaseConfigApp)

const Contact = () => {
    const navigate = useNavigate()
  const [formValue,setFormValue]= useState(
    {
      FullName:'',
      email:'',
      message:''
  
    }
  )
  // e.preventDefault()
  // console.log(formValue)
  const submitvalue = async(e)=>{
  try{
    e.preventDefault()
    const snapshot = await addDoc(collection(db,"contact"), formValue)
    console.log(snapshot)
    navigate('/')
    new Swal({
      icon:"Success",
      title:"Send Message Success firebase"
     })
  }
  catch(err){
    new Swal({
      icon:"Error",
      title:"Send Message unsuccess",
      text:err.message
     })
  }
  }
  
  const handleChange = (e)=>{
   const input= e.target
   const name = input.name
   const value = input.value
  
   setFormValue({
    ...formValue,
    [name]:value
   })
  }

  return (
    <>
<Navbar>
<div className="flex flex-col md:w-6/12  md:mx-auto mx-2 md:my-5 my-2 py-4 shadow-lg border rounded bg-slate-200">
          {/* <div className="md:w-full md:h-2/6 w-screen h-36">
            <img src="/k.jpg" className="w-full h-full object-cover" alt="Contact Banner" />
          </div> */}
          <div className='px-4'>
            <form  className="md:mt-8 space-y-6" onSubmit={submitvalue}>
              <div className="flex flex-col mt-1">
                <label className="md:font-semibold md:text-lg mb-1">Full Name</label>
                <input
                  onChange={handleChange}
                  required
                  name="FullName"
                  type="text"
                  value={formValue.FullName}
                  placeholder="Enter your name"
                  className="p-3 border border-grey-600 rounded"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label className="md:font-semibold md:text-lg mb-1">Email</label>
                <input
                  onChange={handleChange}
                  required
                  name="email"
                  type="email"
                  value={formValue.email}
                  placeholder="Enter your Email"
                  className="p-3 border border-grey-600 rounded"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label className="md:font-semibold md:text-lg mb-1">Message</label>
                <textarea
                  onChange={handleChange}
                  required
                  name="message"
                  value={formValue.message}
                  placeholder="Enter your message"
                  className="p-3 border border-grey-600 rounded"
                />
              </div>
              <button
                type="submit"
                className="md:py-3 md:px-8 px-4 py-1 rounded bg-slate-500 mt-4 text-white font-semibold hover:bg-green-300 hover:text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
</Navbar>    
    </>
  )
}

export default Contact
