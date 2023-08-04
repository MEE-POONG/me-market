import Link from 'next/link';
import React from 'react';

const Author: React.FC = () => {
    return (
        <div className="author-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="author">
                            <img
                                src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/907bdcd3-565b-4ae1-045b-c4d966eaa600/350"
                                alt=""
                                style={{ borderRadius: "20%", maxHeight: 140, objectFit: "contain" }}
                            />
                            <h4 className='truncate-1'>
                                Me Prompt Technology <br />
                                <Link href="#">@Mepoong</Link>
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-info">
                            <div className="row">
                                <div className="col-4">
                                    <div className="info-item">
                                        <i className="fa fa-hand" />
                                        <h6>
                                            1238 <em>View</em>
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="info-item">
                                        <i className="fa fa-dollar" />
                                        <h6>
                                            1238 <em>Likes</em>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <h5>559 Followers</h5>
                                </div>
                                <div className="col-7">
                                    <div className="main-button">
                                        <a href="#">Follow @meprompt</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec" />
                            <h2>
                                Our <em>Clients</em>.
                            </h2>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img
                                        src="/images/customers/changpong.png"
                                        alt=""
                                        style={{ borderRadius: 20, minHeight: 185 }}
                                    />
                                    <h4 className='truncate-1'>ช่างพองอิฐประสาน</h4>
                                    <p className='truncate-4'>อีคอมเมอร์การขายส่ง อิฐแต่งสวนแต่งบาน ช่องลม</p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="main-button">
                                        <a href="https://www.xn--72cah0a9bls7bydzab3brky72a.com/">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img
                                        src="/images/customers/homeagain.png"
                                        alt=""
                                        style={{ borderRadius: 20, minHeight: 185 }}
                                    />
                                    <h4 className='truncate-1'>มูลนิธิบ้านหลังใหม่</h4>
                                    <p className='truncate-4'>เว็บมูลนิธิช่วยหาบ้านให้สุนัขในไทย</p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="main-button">
                                        <a href="https://home-again.netlify.app/">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img
                                        src="/images/customers/robot.png"
                                        alt=""
                                        style={{ borderRadius: 20, minHeight: 185 }}
                                    />
                                    <h4 className='truncate-1'>Robot รถตัดหญ้าบังคับวิทยุ</h4>
                                    <p className='truncate-4'>รถตัดหญ้าบังคับมืองานง่ายๆสบายๆเกิดขึ้นได้</p>
                                    <div className="main-button">
                                        <a href="https://www.i2arobot.com/?fbclid=IwAR08wbCSwIpaks_wYcnRfYTgGNKlMa-dv9pim3V9bJnVKMUc-q7rgJW_ILw">View</a>
                                    </div>
                                </div>
                                <div className="col-lg-12">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img
                                        src="/images/customers/fairy.png"
                                        alt=""
                                        style={{ borderRadius: 20, minHeight: 185 }}
                                    />
                                    <h4 className='truncate-1'>Fairy Stone - หินนำโชค</h4>
                                    <p className='truncate-4'>หินนำโชค์ขายอีคอมเมอร์</p>
                                    <div className="main-button">
                                        <a href="https://fairygemstone.com/">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Author;
