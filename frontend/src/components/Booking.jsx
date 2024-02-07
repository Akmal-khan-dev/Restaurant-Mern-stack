import React, { useState } from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const Booking = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState(0);
    const navigate = useNavigate()

    const handleBooking = async(e)=>{
      e.preventDefault();
      try {
        const {data} = await axios.post("http://localhost:4001/api/v1/booking/booking",{firstName, lastName, email, date, time, phone},
        {
            headers:{
                "Content-Type":"Application/json"
            },
            withCredentials:true
        });
        toast.success(data.message)
        setFirstName("")
        setLastName("")
        setEmail("")
        setTime("")
        setDate("")
        setPhone("")
        navigate("/success")
      } catch (error) {
        toast.error(error)
      }
    }
  return (
    <section className='reservation' id='reservation'>
      <div className="container">
        <div className="banner">
            <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
            <div className="reservation_form_box">
                <h1>Make A Reservation</h1>
                <p>For Further Questions, Please Call</p>
                <form >
                    <div>
                        <input type="text" placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                        <input type="text" placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                    </div>
                    <div>
                        <input type="date" placeholder='Date' value={date} onChange={(e)=>setDate(e.target.value)} />
                        <input type="time" placeholder='Time' value={time} onChange={(e)=>setTime(e.target.value)} />
                    </div>
                    <div>
                        <input type="email" placeholder='Email' value={email} className='email_tag' onChange={(e)=>setEmail(e.target.value)} />
                        <input type="number" placeholder='Phone' value={phone} onChange={(e)=>setPhone(e.target.value)} />
                       
                    </div>
                    <button type='submit' onClick={handleBooking} >Reserveration <span> <HiOutlineArrowNarrowRight/> </span></button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
