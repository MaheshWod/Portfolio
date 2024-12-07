import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import firebaseConfigApp from '../util/firebase-app'
import { getFirestore,addDoc, collection  } from 'firebase/firestore'
import Swal from 'sweetalert2'

const db = getFirestore(firebaseConfigApp)
const HireMe = () => {
  const navigate = useNavigate()
const [formValue,setFormValue]= useState(
  {
    FirstName:'',
    LastName:'',
    email:'',
    mobile:'',
    message:''

  }
)
// e.preventDefault()
// console.log(formValue)
const submitvalue = async(e)=>{
try{
  e.preventDefault()
  const snapshot = await addDoc(collection(db,"hireme"), formValue)
  console.log(snapshot)
  navigate('/')
  new Swal({
    icon:"Success",
    title:"Send Message Successful firebase"
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
        


        <div className="flex flex-col md:w-8/12  md:mx-auto mx-2 md:my-5 my-2 py-4 shadow-lg border rounded bg-slate-200">
        
            <form  className=" md:space-y-4  md:p-4 p-3 " onSubmit={submitvalue}>
              <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 mx-auto'>
              <div className="flex flex-col mt-1">
                <label className="md:font-semibold md:text-lg mb-1">FirstName </label>
                <input
                  onChange={handleChange}
                  required
                  name="FirstName"
                  type="text"
                  value={formValue.FirstName}
                  placeholder="Enter your name"
                  className="md:p-3 p-2 border border-grey-600 rounded"
                />
              </div>
              <div className="flex flex-col mt-1">
                <label className="md:font-semibold md:text-lg mb-1">Last Name</label>
                <input
                  onChange={handleChange}
                  required
                  name="LastName"
                  type="text"
                  value={formValue.LastName}
                  placeholder="Enter your name"
                  className="md:p-3 p-2 border border-grey-600 rounded"
                />
              </div>
              </div>
             <div  className='grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 mx-auto justify-between'>
             <div className="flex flex-col mt-1">
                <label className="md:font-semibold md:text-lg mb-1">Email</label>
                <input
                  onChange={handleChange}
                  required
                  name="email"
                  type="email"
                  value={formValue.email}
                  placeholder="Enter your Email"
                  className="md:p-3 p-2 border border-grey-600 rounded"
                />
              </div>
             <div className="flex flex-col mt-1">
                <label className="md:font-semibold md:text-lg mb-1">Ph.Number</label>
                <input
onChange={handleChange}                  required
                  name="mobile"
                  type="number"
                  value={formValue.mobile}
                  placeholder="Enter your PhoneNumber"
                  className="md:p-3 p-2 border border-grey-600 rounded"
                />
              </div>
             </div>
              <div className="flex flex-col mt-1">
                <label className="md:font-semibold md:text-lg mb-1">Message</label>
                <textarea onChange={handleChange}
                  required
                  name="message"
                  value={formValue.message}
                  placeholder="Enter your message"
                  className="md:p-3 p-2 border border-grey-600 rounded w-full"
                />
              </div>
            
              <button
                type="submit"
                className="md:py-3 md:px-8 px-4 py-1 rounded bg-slate-500 mt-4 text-white font-semibold hover:bg-green-300 hover:text-white"
              >
                Send Me
              </button>
            </form>
          </div>
        {/* </div> */}
      </Navbar>
    </>
  )
}

export default HireMe