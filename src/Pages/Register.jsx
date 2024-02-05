import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = "customer";
        const data = {name, email, password, role}
        console.log(data);
    }
    return (
        <div className="hero bg-base-100">
            <div className="hero-content">
                <div className="card shrink-0 w-[380px] shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Your Full Name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary text-white font-semibold bg-green-700 hover:bg-green-900"> Register</button>
                        </div>
                    </form>
                    <div className="px-5 mb-8"> 
                        Have an account? Please <Link to='/login'> <span className=" font-bold text-green-500 ">Login</span> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;