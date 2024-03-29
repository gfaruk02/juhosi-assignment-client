import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const { signInUser } = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = {email, password}
        console.log(data);
        signInUser(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          e.target.reset();
          navigate("/");
        })
        .catch(error => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your email and password do not match. Please try again',
          })
        })
    }
    return (
        <div className="hero bg-base-100">
            <div className="hero-content">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white font-semibold bg-green-700 hover:bg-green-900"> Login</button>
                        </div>
                    </form>
                    <div className="px-4 mb-8"> 
                    Do not Have an Account? Please <Link to='/register'> <span className=" font-bold text-green-500 ">Register</span> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;