import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const initialState = {
    name: "",
    email: "",
    message: "",
};

export const Contact = (props) => {
    const [{ name, email, message }, setState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const clearState = () => setState({ ...initialState });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(process.env.EMAILJS_SERVICE_ID!, process.env.EMAILJS_TEMPLATE_ID!, e.target, process.env.EMAILJS_PUBLIC_KEY!)
            .then(
                (result) => {
                    clearState();
                },
                ({ text }) => {
                    console.error(text);
                }
            );
    };

    return (
        <>
            <section id="contact">
                <div className="container text-center">
                    <h2 className="section-title">Get In Touch</h2>
                    <p>
                        Please fill out the form below to send us an email and we will
                        get back to you as soon as possible.
                    </p>
                    <div className="row justify-content-md-center">
                        <div className="col-md-6 text-start">
                            <div className="row">
                                <form name="sentMessage" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    required
                                                    onChange={handleChange}
                                                />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    required
                                                    onChange={handleChange}
                                                />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            className="form-control"
                                            rows={4}
                                            placeholder="Message"
                                            required
                                            onChange={handleChange}
                                        />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div id="success"></div>
                                    <button type="submit" className="btn btn-custom btn-lg">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-1" />
                        <div className="col-md-3 contact-info text-start">
                            <div className="contact-item">
                                <h3>Contact Info</h3>
                                <p>
                                    <span>
                                        <i className="fa-solid fa-map-marker"></i> Address
                                    </span>
                                    {props.data ? props.data.address : "loading"}
                                </p>
                            </div>
                            <div className="contact-item">
                                <p>
                                    <span>
                                        <i className="fa-solid fa-phone"></i> Phone
                                    </span>{" "}
                                    {props.data ? props.data.phone : "loading"}
                                </p>
                            </div>
                            <div className="contact-item">
                                <p>
                                    <span>
                                        <i className="fa-solid fa-envelope"></i> Email
                                    </span>{" "}
                                    {props.data ? props.data.email : "loading"}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="social">
                                    <ul>
                                        <li>
                                            <a href={props.data ? props.data.facebook : "/"}>
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={props.data ? props.data.twitter : "/"}>
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={props.data ? props.data.youtube : "/"}>
                                                <i className="fa-brands fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer">
                <div className="container text-center">
                    <p>
                        &copy; 2024 Issaaf Kattan React Land Page Template. Design by{" "}
                        <a href="http://www.templatewire.com" rel="nofollow">
                            TemplateWire
                        </a>
                    </p>
                </div>
            </footer>

        </>
    );
};
