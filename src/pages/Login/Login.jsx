import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
// import { useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    // const { logInUser } = useContext(AuthContext)
    const { logInUser } = useAuth()
    const location = useLocation()

    const navigate = useNavigate()

    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                // const error = error.massage;
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
                    <h1 className="text-2xl font-bold text-center pt-4">Login</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
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
                    <p className='text-center my-4'>New to car Doctors? <Link to='/signUp' className='text-orange-500 font-bold'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;