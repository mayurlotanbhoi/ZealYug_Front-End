

import Swal from 'sweetalert2/dist/sweetalert2.js'
import React, { useState } from 'react';

function LoginPage() {
        const [userName, setUserName] = useState();
        const [useEmail, setUserEmail] = useState();
        const [isFormSubmit, setFormSubmit] = useState(false);

        console.log(useEmail)

        const sendDataToApi = async () => {

                setFormSubmit(true)
                try {
                        if (userName && useEmail) {
                                const dataForSend = {
                                        userName: userName,
                                        userEmail: useEmail,
                                };

                                console.log(dataForSend)

                                const res = await fetch("https://zealyug-node-mail.onrender.com/addUser", {
                                        method: "PUT",
                                        headers: {
                                                "Content-Type": "application/json", // Specify JSON content type
                                        },
                                        body: JSON.stringify(dataForSend),
                                });

                                if (res.ok) {
                                        const data = await res.json();
                                        console.log(data);

                                        Swal.fire({
                                                title: 'success',
                                                text: `Data saved. We have sent an email to this ${useEmail} mail address`,
                                                icon: 'success',
                                                confirmButtonText: 'Cool'
                                        })
                                        // https://car-service-foi1.onrender.com/

                                        window.location.href = "https://car-service-foi1.onrender.com/";

                                } else {
                                        console.error("Request failed with status:", res.status);
                                        Swal.fire({
                                                title: 'error',
                                                text: "OOPS Somthing is Wrong.",
                                                icon: 'error',
                                                confirmButtonText: 'Cool'
                                        })
                                }
                        } else {
                                console.error("userName and useEmail are required.");
                                Swal.fire({
                                        title: 'error',
                                        text: "userName and useEmail are required.",
                                        icon: 'error',
                                        confirmButtonText: 'Cool'
                                })
                        }
                } catch (error) {
                        Swal.fire({
                                title: 'error',
                                text: "OOPS Somthing is Wrong.",
                                icon: 'error',
                                confirmButtonText: 'Cool'
                        })
                        console.error("An error occurred:", error);
                }
                setFormSubmit(false)
        };

        return (
                <section className="vh-100 d-flex flex-column justify-content-center " >
                        <div className="container-fluid h-custom mt-5  d-flexjustify-content-center " style={{ width: "100vw", height: "100vh" }}>
                                <div className="row d-flex justify-content-center align-items-center h-100" >
                                        <div className="col-md-9 col-lg-6 col-xl-5">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                                        className="img-fluid" alt="Sample image" />
                                        </div>
                                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                                <form>
                                                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                                        <i className="fab fa-facebook-f"></i>
                                                                </button>

                                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                                        <i className="fab fa-twitter"></i>
                                                                </button>

                                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                                        <i className="fab fa-linkedin-in"></i>
                                                                </button>
                                                        </div>

                                                        <div className="divider d-flex align-items-center my-4">
                                                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                                        </div>

                                                        {/* <!-- user Name input --> */}
                                                        <div className=" mb-3">
                                                                <input type="text" id="form3Example4" className="form-control form-control-lg"
                                                                        placeholder="Enter user name" onChange={(e) => setUserName(e.target.value)} />
                                                                <label className="form-label" for="form3Example4"></label>
                                                        </div>

                                                        {/* <!-- Email input --> */}
                                                        <div className=" mb-4">
                                                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                                                        placeholder="Enter a valid email address" onChange={(e) => setUserEmail(e.target.value)} />
                                                                <label className="form-label" for="form3Example3"></label>
                                                        </div>



                                                        <div className="d-flex justify-content-between align-items-center">
                                                                {/* <!-- Checkbox --> */}
                                                                <div className="form-check mb-0">
                                                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                                                        <label className="form-check-label" for="form2Example3">
                                                                                Remember me
                                                                        </label>
                                                                </div>
                                                                <a href="#!" className="text-body">Forgot password?</a>
                                                        </div>

                                                        <div className="text-center text-lg-start mt-4 pt-2">
                                                                {!isFormSubmit ? <button type="button" className="btn btn-primary btn-lg login-btn"
                                                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={() => sendDataToApi()}>Login</button>
                                                                        :
                                                                        <button type="button" className="btn btn-primary btn-lg login-btn"
                                                                                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} disabled>Submiting...</button>}

                                                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                                                        className="link-danger">Register</a></p>
                                                        </div>

                                                </form>
                                        </div>
                                </div>
                        </div>
                        <div
                                className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary ">
                                {/* <!-- Copyright --> */}
                                <div className="text-white mb-3 mb-md-0">
                                        Copyright © 2020. All rights reserved.
                                </div>
                                {/* <!-- Copyright --> */}

                                {/* <!-- Right --> */}
                                <div>
                                        <a href="#!" className="text-white me-4">
                                                <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#!" className="text-white me-4">
                                                <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#!" className="text-white me-4">
                                                <i className="fab fa-google"></i>
                                        </a>
                                        <a href="#!" className="text-white">
                                                <i className="fab fa-linkedin-in"></i>
                                        </a>
                                </div>
                                {/* <!-- Right --> */}
                        </div>
                </section>
        );
}

export default LoginPage;

