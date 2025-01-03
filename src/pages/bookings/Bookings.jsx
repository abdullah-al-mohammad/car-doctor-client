import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { BookingRow } from "./BookingRow";

const Bookings = () => {
	const { user } = useContext(AuthContext);
	const [bookings, setBookings] = useState();
    console.log(bookings);
    
	const url = `http://localhost:3000/bookings?email=${user?.email}`;
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setBookings(data);
			});
	}, []);
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
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
                        {
                            bookings.map(booking => <BookingRow 
                                key={booking._id}
                                booking={booking}
                                ></BookingRow>)
                        }
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Bookings;
