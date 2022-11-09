import React from 'react';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }


    return (
        <div className="hero my-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className='text-3xl mx-auto mt-4 font-bold text-orange-500'>Login Now !!!</h1>
                <form onSubmit={handleLogin} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-orange-500" type="submit" value="Login" />

                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;