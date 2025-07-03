// import React, { useContext } from 'react'
// import {AppContext} from "../context/AppContext"
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import PaymentModal from '../components/PaymentModal'
// import KhaltiPayment from '../components/KhaltiPayment'

// const MyAppointments = () => {

//   const {backendUrl,token,getDoctorsData} = useContext(AppContext)
//   // payment modal state
//   const [showPaymentModal, setShowPaymentModal] = useState(false)
//   const [selectedAppointment, setSelectedAppointment] = useState(null)
  

//   const [appointments, setAppointments] = useState([])
//   const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//   const slotDateFormat = (slotDate) => {
//     const dateArray = slotDate.split('_')
//     return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
//   }

//   const getUserAppointments = async () => {
//     try{
//       const {data} = await axios.get(backendUrl + '/api/user/appointments' ,{headers:{token}})

//       if(data.success){
//         setAppointments(data.appointments.reverse())
//         console.log(data.appointments);
        
//       }

//     }catch(error){
//       console.log(error);
//       toast.error(error.message)

//     }
//   }


  
//   const cancelAppointment = async (appointmentId) => {

//     try{

//       const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment',{appointmentId},{headers:{token}})
//       if(data.success){
//         toast.success(data.message)
//         getUserAppointments()
//         getDoctorsData()
//       }else{
//         toast.error(data.message)
//       }

//     }catch(error){
//       console.log(error);
//       toast.error(error.message)

//     }



//   }
//   const handlePayOnline = (appointment) => {
//   setSelectedAppointment(appointment)
//   setShowPaymentModal(true)
// }


  





//   useEffect(() => {
//     if(token){
//       getUserAppointments()
//     }
//   },[token])


//   return (
//     <div>
//       <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
//       <div>
//         {appointments.map((item,index) => (
//           <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2  border-b' key={index}>
//             <div>
//               <img className='w-32 bg-indigo-50' src={item.docData.image} alt="" />
//             </div>
//             <div className='flex-1 text-sm text-zinc-600'>
//               <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
//               <p>{item.docData.speciality}</p>
//               <p className='text-zinc-700 font-medium mt-1'>Address:</p>
//               <p className='text-xs'>{item.docData.address.line1}</p>
//               <p className='text-xs'>{item.docData.address.line2}</p>
//               <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium' >Date & Time:</span>{slotDateFormat(item.slotDate)} | {item.slotTime}</p>
//             </div>
//             <div></div>
//             <div className='flex flex-col gap-2 justify-end'>
//             {/*  {!item.cancelled && <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>}  */}
//             {!item.cancelled && !item.payment && (
//   <button 
//     onClick={() => handlePayOnline(item)}
//     className='text-sm text-stone-500 text-center sm:min-w-48 py-2 hover:bg-primary hover:text-white transition-all duration-300'>
//     Pay Online
//   </button>
// )}
// {item.payment && <p className="text-green-600 text-sm text-center">Paid</p>}

//               {!item.cancelled && <button onClick={()=>cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2  hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>}
//               {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
//             </div>

//           </div>
//         ))}

//       </div>
      
//     </div>

//     {showPaymentModal && selectedAppointment && (
//   <PaymentModal 
//     appointment={selectedAppointment}
//     onClose={() => setShowPaymentModal(false)}
//     refreshAppointments={getUserAppointments}
//   >
//     <KhaltiPayment 
//       amount={selectedAppointment.amount}
//       appointmentId={selectedAppointment._id}
//       onSuccess={() => {
//         setShowPaymentModal(false)
//         getUserAppointments()
//         toast.success("Payment Successful")
//       }}
//     />
//   </PaymentModal>
// )}
    
// export default MyAppointments

// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from "../context/AppContext"
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import PaymentModal from '../components/PaymentModal'
// import KhaltiPayment from '../components/KhaltiPayment'

// const MyAppointments = () => {
//   const { backendUrl, token, getDoctorsData } = useContext(AppContext)

//   const [appointments, setAppointments] = useState([])
//   const [showPaymentModal, setShowPaymentModal] = useState(false)
//   const [selectedAppointment, setSelectedAppointment] = useState(null)

//   const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//   const slotDateFormat = (slotDate) => {
//     const dateArray = slotDate.split('_')
//     return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
//   }

//   const getUserAppointments = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
//       if (data.success) {
//         setAppointments(data.appointments.reverse())
//         console.log(data.appointments)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   const cancelAppointment = async (appointmentId) => {
//     try {
//       const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
//       if (data.success) {
//         toast.success(data.message)
//         getUserAppointments()
//         getDoctorsData()
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   const handlePayOnline = (appointment) => {
//     setSelectedAppointment(appointment)
//     setShowPaymentModal(true)
//   }

//   useEffect(() => {
//     if (token) {
//       getUserAppointments()
//     }
//   }, [token])

//   return (
//     <>
//       <div>
//         <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
//         <div>
//           {appointments.map((item, index) => (
//             <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
//               <div>
//                 <img className='w-32 bg-indigo-50' src={item.docData.image} alt="" />
//               </div>
//               <div className='flex-1 text-sm text-zinc-600'>
//                 <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
//                 <p>{item.docData.speciality}</p>
//                 <p className='text-zinc-700 font-medium mt-1'>Address:</p>
//                 <p className='text-xs'>{item.docData.address.line1}</p>
//                 <p className='text-xs'>{item.docData.address.line2}</p>
//                 <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
//               </div>
//               <div></div>
//               <div className='flex flex-col gap-2 justify-end'>
//                 {!item.cancelled && !item.payment && (
//                   <button
//                     onClick={() => handlePayOnline(item)}
//                     className='text-sm text-stone-500 text-center sm:min-w-48 py-2 hover:bg-primary hover:text-white transition-all duration-300'>
//                     Pay Online
//                   </button>
//                 )}
//                 {item.payment && <p className="text-green-600 text-sm text-center">Paid</p>}

//                 {!item.cancelled && (
//                   <button
//                     onClick={() => cancelAppointment(item._id)}
//                     className='text-sm text-stone-500 text-center sm:min-w-48 py-2 hover:bg-red-600 hover:text-white transition-all duration-300'>
//                     Cancel appointment
//                   </button>
//                 )}
//                 {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {showPaymentModal && selectedAppointment && (
//         <PaymentModal
//           appointment={selectedAppointment}
//           onClose={() => setShowPaymentModal(false)}
//           refreshAppointments={getUserAppointments}
//         >
//           <KhaltiPayment
//             amount={selectedAppointment.amount}
//             appointmentId={selectedAppointment._id}
//             onSuccess={() => {
//               setShowPaymentModal(false)
//               getUserAppointments()
//               toast.success("Payment Successful")
//             }}
//           />
//         </PaymentModal>
//       )}
//     </>
//   )
// }

// export default MyAppointments
// // This code is a React component that displays a user's appointments, allows them to cancel appointments, and pay for appointments online using Khalti payment gateway. It uses context for global state management and Axios for API calls. The component also includes a payment modal for handling online payments.
// // The component fetches appointments from the backend, formats the appointment date, and provides functionality to cancel appointments. It also handles the payment process using Khalti, displaying a success message upon successful payment. The component is designed to be responsive and user-friendly, with clear actions for users to manage their appointments.
// // The Khalti payment integration allows users to pay for their appointments directly from the app, enhancing the user experience by providing a seamless payment solution. The component also includes error handling to manage any issues that may arise during API calls or payment processing.
// // Overall, this component is a crucial part of the user interface for managing appointments in a healthcare application, providing essential functionalities for users to interact with their healthcare providers effectively.
// // The component is structured to be modular, allowing for easy updates and maintenance. It uses React  hooks for state management and side effects, ensuring that the component re-renders appropriately when data changes. The use of context allows for easy access to global state variables like `backendUrl` and `token`, making the component flexible and adaptable to different contexts within the application.


// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import PaymentModal from '../components/PaymentModal'

// const MyAppointments = () => {
//   const { backendUrl, token, getDoctorsData } = useContext(AppContext)
//   const [appointments, setAppointments] = useState([])
//   const [showPaymentModal, setShowPaymentModal] = useState(false)
//   const [selectedAppointment, setSelectedAppointment] = useState(null)

//   const getUserAppointments = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
//         headers: { token },
//       })
//       if (data.success) setAppointments(data.appointments.reverse())
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   useEffect(() => {
//     if (token) getUserAppointments()
//   }, [token])

//   const handlePayOnline = (appointment) => {
//     setSelectedAppointment(appointment)
//     setShowPaymentModal(true)
//   }

//   const onPaymentSuccess = () => {
//     setShowPaymentModal(false)
//     getUserAppointments()
//     getDoctorsData()
//   }

//   return (
//     <>
//       <div>
//         <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My appointments</p>
//         <div>
//           {appointments.map((item) => (
//             <div
//               className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
//               key={item._id}
//             >
//               <div>
//                 <img className="w-32 bg-indigo-50" src={item.docData.image} alt="" />
//               </div>
//               <div className="flex-1 text-sm text-zinc-600">
//                 <p className="text-neutral-800 font-semibold">{item.docData.name}</p>
//                 <p>{item.docData.speciality}</p>
//                 <p className="text-zinc-700 font-medium mt-1">Address:</p>
//                 <p className="text-xs">{item.docData.address.line1}</p>
//                 <p className="text-xs">{item.docData.address.line2}</p>
//                 <p className="text-xs mt-1">
//                   <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>{' '}
//                   {item.slotDate} | {item.slotTime}
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 justify-end">
//                 {!item.cancelled && !item.payment && (
//                   <button
//                     onClick={() => handlePayOnline(item)}
//                     className="text-sm text-stone-500 text-center sm:min-w-48 py-2 hover:bg-primary hover:text-white transition-all duration-300"
//                   >
//                     Pay Online
//                   </button>
//                 )}
//                 {item.payment && (
//                   <p className="text-green-600 text-sm text-center">Paid</p>
//                 )}

//                 {!item.cancelled && (
//                   <button
//                     onClick={() => cancelAppointment(item._id)}
//                     className="text-sm text-stone-500 text-center sm:min-w-48 py-2 hover:bg-red-600 hover:text-white transition-all duration-300"
//                   >
//                     Cancel appointment
//                   </button>
//                 )}
//                 {item.cancelled && (
//                   <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">
//                     Appointment Cancelled
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {showPaymentModal && selectedAppointment && (
//         <PaymentModal
//           show={showPaymentModal}
//           onClose={() => setShowPaymentModal(false)}
//           amount={selectedAppointment.amount}
//           appointmentId={selectedAppointment._id}
//           onPaymentSuccess={onPaymentSuccess}
//         />
//       )}
//     </>
//   )
// }

// export default MyAppointments

import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import KhaltiCheckout from 'khalti-checkout-web'

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext)
  const [appointments, setAppointments] = useState([])

  const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

   const slotDateFormat = (slotDate) => {
         const dateArray = slotDate.split('_')
     return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
   }

  // Fetch user appointments from backend
  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, {
        headers: { token },
      })
      if (data.success) setAppointments(data.appointments.reverse())
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) getUserAppointments()
  }, [token])

  // Cancel appointment function (make sure you have this implemented or import it)
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/cancel-appointment`,
        { appointmentId },
        { headers: { token } }
      )
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // Directly open Khalti checkout on Pay Online click
  const handlePayOnline = (appointment) => {
    const config = {
      publicKey: "7551599c13cd4fb096b8bcbc07c36de4", // your Khalti public key
      productIdentity: appointment._id,
      productName: "Doctor Appointment",
      productUrl: "http://localhost:5173",
      eventHandler: {
        onSuccess: async (payload) => {
          try {
            const res = await axios.post(
              `${backendUrl}/api/user/verify-khalti`,
              {
                token: payload.token,
                amount: payload.amount,
                appointmentId: appointment._id,
              },
              {
                headers: { token },
              }
            )

            if (res.data.success) {
              toast.success("Payment successful and verified!")
              getUserAppointments()
              getDoctorsData()
            } else {
              toast.error("Payment verification failed")
            }
          } catch (error) {
            toast.error("Error verifying payment")
          }
        },
        onError: (error) => {
          toast.error("Payment failed or cancelled")
        },
        onClose: () => {
          console.log("Khalti modal closed")
        },
      },
    }

    const checkout = new KhaltiCheckout(config)
    checkout.show({ amount: appointment.amount * 100 }) // amount in paisa
  }

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My appointments</p>
      <div>
        {appointments.map((item) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            key={item._id}
          >
            <div>
              <img className="w-32 bg-indigo-50" src={item.docData.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p className="text-zinc-700 font-medium mt-1">Address:</p>
              <p className="text-xs">{item.docData.address.line1}</p>
              <p className="text-xs">{item.docData.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>{' '}
                {slotDateFormat(item.slotDate)} | {item.slotTime}
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-end">
              {!item.cancelled && !item.payment && (
                <button
                  onClick={() => handlePayOnline(item)}
                  className="text-sm text-stone-500 text-center sm:min-w-48 py-2 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Pay Online
                </button>
              )}
              {item.payment && (
                <p className="text-green-600 text-sm text-center">Paid</p>
              )}

              {!item.cancelled && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="text-sm text-stone-500 text-center sm:min-w-48 py-2 hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  Cancel appointment
                </button>
              )}
              {item.cancelled && (
                <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">
                  Appointment Cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments
