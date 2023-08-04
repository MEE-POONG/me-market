import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaEnvelopeSquare, FaFacebook, FaPhoneAlt } from 'react-icons/fa';

const Address: React.FC = () => {
    return (
        <Container className='mb-5'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <div className="line-dec" />
                        <h2>
                            Contact <em>{" "}Us</em>
                        </h2>
                    </div>
                </div>
                <div className="col-lg-5 align-self-center">
                    <span className="author text-center">
                        <img
                            src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/907bdcd3-565b-4ae1-045b-c4d966eaa600/350"
                            alt=""
                            style={{ maxHeight: "100px", borderRadius: "20%", objectFit: "contain" }}
                        />
                        <h4 className='text-center mt-3'>
                            Me Prompt Technology
                        </h4>
                        <p className='c-purples'>46/3 Ratchanikun Rd, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000</p>
                    </span>
                    <p className='a-c-purple'>
                        <FaFacebook />{" "}
                        <a href="mailto:meeprompt.teach@gmail.com">
                            Me Prompt technology- รับทำเว็บไซต์ กราฟิกดีไซน์
                        </a>
                    </p>
                    <p className='a-c-purple'>
                        <FaEnvelopeSquare />{" "}
                        <a href="mailto:meeprompt.teach@gmail.com">
                            meeprompt.teach@gmail.com
                        </a>
                    </p>
                    <p className='a-c-purple'>
                        <FaPhoneAlt />{" "}
                        <a href="tel:+0644482650">
                            064 448 2650</a>{" , "}<a href="tel:+0918136426">091 813 6426</a>
                    </p>
                </div>
                <div className="col-lg-7">
                    <div className="left-image">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.410881370793!2d102.09982811484463!3d14.969879789568058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31194d8e8317c351%3A0xd84c052ad6cf5c55!2sME%20PROMPT%20TECHNOLOGY!5e0!3m2!1sen!2sth!4v1689233978614!5m2!1sen!2sth"
                            style={{ minWidth: "100%", minHeight: 400, borderRadius: 20 }}>

                        </iframe>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Address;
