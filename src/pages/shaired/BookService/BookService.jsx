import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react'

const BookService = () => {
    const services = useLoaderData()
    const { title, price, _id, img } = services
    const { user } = useContext(AuthContext)


    const handleBookService = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const date = form.date.value
        const email = user?.email
        const booking = {
            customerName: name,
            date,
            img,
            email,
            services: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

    }
    return (
        <div>
            <h2>Book/Service: {title}</h2>
            <div className="bg-base-200 min-h-screen">
                <div className="flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full">
                        <form onSubmit={handleBookService} className="card-body">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" defaultValue={user?.displayName} name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name='date' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" defaultValue={price} className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary btn-block" type="submit" value="order confirm" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookService;