import React, { useEffect, useState } from 'react'

const Bookings = () => {

    const [bookings,setBookings] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/booking')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div>
            <h3>You have : {bookings.length} bookings</h3>

            {
                bookings.map(book => <li>{book.name} from : {book.checkIn} To:{book.checkOut}</li>)
            }
        </div>
    )
}

export default Bookings
