import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl text-orange-500 text-center font-bold my-6'>Blogs</h2>
            <div className='bg-orange-300 text-center grid grid-cols-1 py-32 mx-12 rounded-xl '>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 px-36">Difference between SQL and NoSQL?</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-base-100 rounded-box w-52">
                        <li>SQL is the programming language used to interface with relational databases.NoSQL is a class of DBMs that are non-relational .SQL database are tabular and NoSQL are non-tabular.SQL schema are procedural and NoSQL are dynamic. Example of SQL -oracle,mysql and example of NoSQL - mongoDB, redis</li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 px-36">What is JWT, and how does it work?</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-base-100 rounded-box w-52">
                        <li>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 px-36">What is the difference between javascript and NodeJS?</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-base-100 rounded-box w-52">
                        <li>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1 px-36">How does NodeJS handle multiple requests at the same time?</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2  shadow bg-base-100 rounded-box w-52">
                        <li>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blogs;