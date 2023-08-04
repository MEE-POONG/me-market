import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const FormCreateCopy: React.FC = () => {
    return (
        <div className="item-details-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>Apply For <em>Your Item</em> Here.</h2>
                        </div>
                    </div>
                </div>
                <form id="contact" action="" method="post">
                    <Row>
                        <div className="col-lg-4">
                            <Form.Group className="mb-3" controlId="itemTitle">
                                <Form.Label>Item Title</Form.Label>
                                <Form.Control type="text" placeholder="Ex. Lyon King" required />
                            </Form.Group>
                        </div>
                        <div className="col-lg-4">
                            <Form.Group className="mb-3" controlId="itemDescription">
                                <Form.Label>Description For Item</Form.Label>
                                <Form.Control type="text" placeholder="Give us your idea" required />
                            </Form.Group>
                        </div>
                        <div className="col-lg-4">
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Your Username</Form.Label>
                                <Form.Control type="text" placeholder="Ex. @alansmithee" required />
                            </Form.Group>
                        </div>
                        <div className="col-lg-6">
                            <Form.Group className="mb-3" controlId="itemPrice">
                                <Form.Label>Price Of Item</Form.Label>
                                <Form.Control type="text" placeholder="Price depends on quality. Ex. 0.06 ETH" required />
                            </Form.Group>
                        </div>
                        <div className="col-lg-6">
                            <Form.Group className="mb-3" controlId="royalties">
                                <Form.Label>Royalties</Form.Label>
                                <Form.Control type="text" placeholder="Common royalties 1-25%" required />
                            </Form.Group>
                        </div>
                        <div className="col-lg-4">
                            <Form.Group className="mb-3" controlId="file">
                                <Form.Label>Your File</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                        </div>
                        <div className="col-lg-8">
                            <button type="submit" id="form-submit" className="purple">Submit Your Applying</button>
                        </div>

                    </Row>
                </form>
            </div>
        </div >
    );
}

export default FormCreateCopy;
