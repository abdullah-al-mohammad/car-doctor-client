import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import { BookingRow } from "./BookingRow";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure()

    // const url = `https://cardoctor-bdserver-delta.vercel.app//bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;
    useEffect(() => {

        // send cookie in backend
        axiosSecure.get(url,)
            .then(res => {
                setBookings(res.data)
                // console.log(res.data);

            })
        // fetch(url)
        // 	.then(res => res.json())
        // 	.then(data => {
        // 		setBookings(data);
        // 	});
    }, []);

    const handleDelete = id => {
        const proceed = confirm('Are You Sure You Want To Delete')
        if (proceed) {
            fetch(`https://cardoctor-bdserver-delta.vercel.app//bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }

                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`https://cardoctor-bdserver-delta.vercel.app//bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // update State
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining]
                    setBookings(newBooking)
                }

            })
    }
    return (
        <div>
            <h2 className="text-5xl">Your Bookings: {bookings?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
