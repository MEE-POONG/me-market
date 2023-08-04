import Link from "next/link";
import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLine,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import {
  apperntice,
  appernticeGen2,
  appernticeGen3,
  appernticeGen4,
} from "@/data/about";

const Apprentice: React.FC = () => {
  return (
    <div className="container">
      <div className="current-bid">
        <Tab.Container id="left-tabs-example" defaultActiveKey="gen4">
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="">
                <Nav.Item bsPrefix="mini-heading">
                  <div className="title">Apprentice Co-op</div>
                </Nav.Item>
                <Nav.Item bsPrefix="mini-heading">
                  <Nav.Link bsPrefix="select" eventKey="gen1">
                    Gen 1
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item bsPrefix="mini-heading">
                  <Nav.Link bsPrefix="select" eventKey="gen2">
                    Gen 2
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item bsPrefix="mini-heading">
                  <Nav.Link bsPrefix="select" eventKey="gen3">
                    Gen 3
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item bsPrefix="mini-heading">
                  <Nav.Link bsPrefix="select last" eventKey="gen4">
                    Gen 4
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item bsPrefix="mini-heading">
                                    <Nav.Link bsPrefix='select last' eventKey="gen5" >Co-op 5</Nav.Link>
                                </Nav.Item> */}
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="gen1" className="c-purple">
                  <Row>
                    <div className="row">
                      {apperntice.map((appern) => (
                        <div
                          key={appern.generation}
                          className="col-lg-4 col-md-6"
                        >
                          <div className="item">
                            <div className="left-img">
                              <img
                                src={appern.picture}
                                alt={appern.firstName.EN}
                                style={{ maxHeight: 250, objectFit: "cover" }}
                              />
                            </div>
                            <div className="right-content">
                              <h4>{appern.firstName.TH}</h4>
                              <a href="#">{appern.nickName.TH}</a>
                              <div className="line-dec" />
                              <h6>
                                ตำแหน่ง: <em>{appern.position.TH}</em>
                              </h6>
                              <h6>
                                หน้าที่: <em>{appern.duty.TH}</em>
                              </h6>
                              <span className="date">
                                <a href={appern.facebook}>
                                  <FaFacebookF size={30} />
                                </a>
                                <a href={appern.instagram}>
                                  <FaInstagram size={30} />
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="gen2" className="c-purple">
                  <div className="row">
                    {appernticeGen2.map((appernticeGen2) => (
                      <div
                        key={appernticeGen2.id}
                        className="col-lg-4 col-md-6"
                      >
                        <div className="item">
                          <div className="left-img">
                            <img
                              src={appernticeGen2.picture}
                              alt={appernticeGen2.firstName.EN}
                              style={{ maxHeight: 250, objectFit: "cover" }}
                            />
                          </div>
                          <div className="right-content">
                            <h4>{appernticeGen2.firstName.TH}</h4>
                            <a href="#">{appernticeGen2.nickName.TH}</a>
                            <div className="line-dec" />
                            <h6>
                              ตำแหน่ง: <em>{appernticeGen2.position.TH}</em>
                            </h6>
                            <h6>
                              หน้าที่: <em>{appernticeGen2.duty.TH}</em>
                            </h6>
                            <span className="date">
                              <a href={appernticeGen2.facebook}>
                                <FaFacebookF size={30} />
                              </a>
                              <a href={appernticeGen2.instagram}>
                                <FaInstagram size={30} />
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="gen3" className="c-purple">
                  <div className="row">
                    {appernticeGen3.map((appernticeGen3) => (
                      <div
                        key={appernticeGen3.id}
                        className="col-lg-4 col-md-6"
                      >
                        <div className="item">
                          <div className="left-img">
                            <img
                              src={appernticeGen3.picture}
                              alt={appernticeGen3.firstName.EN}
                              style={{ maxHeight: 250, objectFit: "cover" }}
                            />
                          </div>
                          <div className="right-content">
                            <h4>{appernticeGen3.firstName.TH}</h4>
                            <a href="#">{appernticeGen3.nickName.TH}</a>
                            <div className="line-dec" />
                            <h6>
                              ตำแหน่ง: <em>{appernticeGen3.position.TH}</em>
                            </h6>
                            <h6>
                              หน้าที่: <em>{appernticeGen3.duty.TH}</em>
                            </h6>
                            <span className="date">
                              <a href={appernticeGen3.facebook}>
                                <FaFacebookF size={30} />
                              </a>
                              <a href={appernticeGen3.instagram}>
                                <FaInstagram size={30} />
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>

                {/* GEN4 */}
                <Tab.Pane eventKey="gen4" className="c-purple">
                  <div className="row">
                    {appernticeGen4.map((appernticeGen4) => (
                      <div
                        key={appernticeGen4.generation}
                        className="col-lg-4 col-md-6"
                      >
                        <div className="item">
                          <div className="left-img">
                            <img
                              src={appernticeGen4.picture}
                              alt={appernticeGen4.firstName.EN}
                              style={{ maxHeight: 250, objectFit: "cover" }}
                            />
                          </div>
                          <div className="right-content">
                            <h4>{appernticeGen4.firstName.TH}</h4>
                            <a href="#">{appernticeGen4.nickName.TH}</a>
                            <div className="line-dec" />
                            <h6>
                              ตำแหน่ง: <em>{appernticeGen4.position.TH}</em>
                            </h6>
                            <h6>
                              หน้าที่: <em>{appernticeGen4.duty.TH}</em>
                            </h6>
                            <span className="date">
                              <a href={appernticeGen4.facebook}>
                                <FaFacebookF size={30} />
                              </a>
                              <a href={appernticeGen4.instagram}>
                                <FaInstagram size={30} />
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Apprentice;
