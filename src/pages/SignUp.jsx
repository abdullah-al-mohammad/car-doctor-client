import { Link } from 'react-router-dom';
import img from '../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState()
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const formData = { name, email, password }
        // console.log(formData);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
            .catch(error => {
                // const error = error.code
                // setError(error)
                console.log(error);

            })


    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border">
                    <h1 className="text-2xl font-bold text-center pt-4">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign in" />
                        </div>
                    </form>
                    <p className='text-center my-4'>Already have an account? <Link to='/signin' className='text-orange-500 font-bold'>Signin</Link></p>
                    {/* <p>{error}</p> */}
                </div>
            </div>
        </div>
    );
};

export default SignUp;