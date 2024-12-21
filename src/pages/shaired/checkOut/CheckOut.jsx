import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const services = useLoaderData()
    const { title, price } = services
    return (
        <div>
            <h2>Home/CheckOut{title} </h2>
            <div className="bg-base-200">
                <div className="flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full">
                        <form className="card-body">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="First Name" name='firstName' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Last Name" name='lastName' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Phone</span>
                                    </label>
                                    <input type="number" placeholder="Your Phone" name='phone' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" placeholder="Your Email" name='email' className="input input-bordered" required />
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

export default CheckOut;