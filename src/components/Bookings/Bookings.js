import React, { useEffect, useState } from 'react'

const Bookings = () => {

    const {bookings,setBookings} = useState
    useEffect(()=>{
        fetch('http://localhost:5000/booking')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Bookings
