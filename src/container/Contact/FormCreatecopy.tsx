import React from 'react';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const FormCreatecopy: React.FC = () => {
    return (
        <div className="item-details-page">
            <div className="container">
                {/* contact form */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec" />
                            <h2>
                                <em>Contact Us</em>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="left-image">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.410881370793!2d102.09982811484463!3d14.969879789568058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31194d8e8317c351%3A0xd84c052ad6cf5c55!2sME%20PROMPT%20TECHNOLOGY!5e0!3m2!1sen!2sth!4v1689233978614!5m2!1sen!2sth"
                                style={{ minWidth: "100%", minHeight: 350, borderRadius: 20 }}>

                            </iframe>
                        </div>
                    </div>
                    <div className="col-lg-7 align-self-center">
                        <h4>Contact us when you want to make a website.</h4>
                        <span className="author">
                            <img
                                src="/images/logo.png"
                                alt=""
                                style={{ maxWidth: 150, borderRadius: "20%" }}
                            />
                            <h6>
                                Me Prompt Technology
                                <br />
                                <a href="#">@mepoong</a>
                            </h6>
                        </span>
                        <p>

                        </p>
                        <div className="row">
                            <div className="col-lg-5">
                                <span className="bid">
                                    <strong><AiOutlineHome size={30} /></strong>
                                    <br />
                                    <p>46/3 Ratchanikun Rd, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000</p>
                                    <br />
                                </span>
                            </div>
                            <div className="col-lg-3">
                                <span className="owner">
                                    <strong><AiOutlinePhone size={30} /></strong>
                                    <br />
                                    <p><a href="tel:+0644482650">064 448 2650</a></p>
                                    <p><a href="tel:+0918136426">091 813 6426</a></p>
                                    <br />
                                </span>
                            </div>

                            <div className="col-lg-3">
                                <span className="owner">
                                    <strong><AiOutlineMail size={30} /></strong>
                                    <br />
                                    <p><a href="mailto:meeprompt.teach@gmail.com">meeprompt.teach@gmail.com</a></p>
                                    <br />
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* sent mail form  */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec" />
                            <h2>
                                Apply For <em>Your Project</em> Here.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <form id="contact" action="" method="post">
                            <div className="row">
                                <div className="col-lg-4">
                                    <fieldset>
                                        <label htmlFor="title">Project Title</label>
                                        <input
                                            type="title"
                                            name="title"
                                            id="title"
                                            placeholder="Ex. Lyon King"
                                            autoComplete="on"
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-4">
                                    <fieldset>
                                        <label htmlFor="description">Description For Project</label>
                                        <input
                                            type="description"
                                            name="description"
                                            id="description"
                                            placeholder="Give us your idea"
                                            autoComplete="on"
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-4">
                                    <fieldset>
                                        <label htmlFor="username">Your Name</label>
                                        <input
                                            type="name"
                                            name="name"
                                            id="name"
                                            placeholder="Ex. Mee Poong"
                                            autoComplete="on"
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <fieldset>
                                        <label htmlFor="price">Your Email</label>
                                        <input
                                            type="mail"
                                            name="mail"
                                            id="mail"
                                            placeholder="Your@mail.com"
                                            autoComplete="on"
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <fieldset>
                                        <label htmlFor="royalities">Your Phone</label>
                                        <input
                                            type="phone"
                                            name="phone"
                                            id="phone"
                                            placeholder="044 556 0031"
                                            autoComplete="on"
                                        />
                                    </fieldset>
                                </div>
                                <div className="col-lg-4">
                                </div>
                                <div className="col-lg-4">
                                    <fieldset>
                                        <button
                                            type="submit"
                                            id="form-submit"
                                            className="orange-button"
                                        >
                                            Submit Your Applying
                                        </button>
                                    </fieldset>
                                </div>
                                <div className="col-lg-4">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FormCreatecopy;
