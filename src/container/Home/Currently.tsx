import React, { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/components/Language/LanguageContext';
import { Col, Row } from 'react-bootstrap';

const Currently: React.FC = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return (
    <div className="currently-market">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <div className="line-dec" />
              <h2>
                News<em> Update</em>
              </h2>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="filters">
              <ul>
                <li className="active">
                  <Link href="news" className='text-white'>
                    {currentLanguage === "TH" ? "ทั้งหมด" : "ALL"}
                  </Link>
                </li>
                <li data-filter=".msc">
                  <Link href="news" className='text-white'>
                    {currentLanguage === "TH" ? "ข่าว" : "News"}
                  </Link>
                </li>
                <li data-filter=".msc">
                  <Link href="news" className='text-white'>
                    {currentLanguage === "TH" ? "ประชาสัมพันธ์" : "ข่าว"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row grid">
              <div className="col-lg-6 currently-market-item all msc">
                <div className="item">
                  <Row>
                    <Col md="5" lg="4">
                      <div className="left-image">
                        <img
                          src="https://assets.beartai.com/uploads/2023/07/play-services.jpg"
                          alt=""
                          style={{ borderRadius: 20, objectFit: 'cover', width: '100%' }}
                        />
                      </div>
                    </Col>
                    <Col md="7" lg="8">
                      <div className="right-content">
                        <h4 className='truncate-2'>Android 14 จะแจ้งเตือนหากติดตั้ง/อัปเดตแอปนอก Play Store</h4>
                        <span className="author">
                          <img
                            src="/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="#">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Source By
                          <br />
                          <strong>Beartai</strong>
                          <br />
                          {/* <em>($8,240.50)</em> */}
                        </span>
                        <span className="ends">
                          Date
                          <br />
                          <strong>July 24th, 2022</strong>
                          <br />
                          {/* <em>(July 24th, 2022)</em> */}
                        </span>
                        <div className="text-button">
                          <a href="https://www.beartai.com/news/1280769">View Details{" >>>"}</a>
                        </div>
                      </div>
                    </Col>
                  </Row>

                </div>
              </div>
              <div className="col-lg-6 currently-market-item all msc">
                <div className="item">
                  <Row>
                    <Col md="5" lg="4">
                      <div className="left-image">
                        <img
                          src="https://assets.beartai.com/uploads/2023/07/play-services.jpg"
                          alt=""
                          style={{ borderRadius: 20, objectFit: 'cover', width: '100%' }}
                        />
                      </div>
                    </Col>
                    <Col md="7" lg="8">
                      <div className="right-content">
                        <h4 className='truncate-2'>Android 14 จะแจ้งเตือนหากติดตั้ง/อัปเดตแอปนอก Play Store</h4>
                        <span className="author">
                          <img
                            src="/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="#">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Source By
                          <br />
                          <strong>Beartai</strong>
                          <br />
                          {/* <em>($8,240.50)</em> */}
                        </span>
                        <span className="ends">
                          Date
                          <br />
                          <strong>July 24th, 2022</strong>
                          <br />
                          {/* <em>(July 24th, 2022)</em> */}
                        </span>
                        <div className="text-button">
                          <a href="https://www.beartai.com/news/1280769">View Details{" >>>"}</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="col-lg-6 currently-market-item all msc">
                <div className="item">
                  <Row>
                    <Col md="5" lg="4">
                      <div className="left-image">
                        <img
                          src="https://assets.beartai.com/uploads/2023/07/play-services.jpg"
                          alt=""
                          style={{ borderRadius: 20, objectFit: 'cover', width: '100%' }}
                        />
                      </div>
                    </Col>
                    <Col md="7" lg="8">
                      <div className="right-content">
                        <h4 className='truncate-2'>Android 14 จะแจ้งเตือนหากติดตั้ง/อัปเดตแอปนอก Play Store</h4>
                        <span className="author">
                          <img
                            src="/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="#">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Source By
                          <br />
                          <strong>Beartai</strong>
                          <br />
                          {/* <em>($8,240.50)</em> */}
                        </span>
                        <span className="ends">
                          Date
                          <br />
                          <strong>July 24th, 2022</strong>
                          <br />
                          {/* <em>(July 24th, 2022)</em> */}
                        </span>
                        <div className="text-button">
                          <a href="https://www.beartai.com/news/1280769">View Details{" >>>"}</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="col-lg-6 currently-market-item all msc">
                <div className="item">
                  <Row>
                    <Col md="5" lg="4">
                      <div className="left-image">
                        <img
                          src="https://assets.beartai.com/uploads/2023/07/play-services.jpg"
                          alt=""
                          style={{ borderRadius: 20, objectFit: 'cover', width: '100%' }}
                        />
                      </div>
                    </Col>
                    <Col md="7" lg="8">
                      <div className="right-content">
                        <h4 className='truncate-2'>Android 14 จะแจ้งเตือนหากติดตั้ง/อัปเดตแอปนอก Play Store</h4>
                        <span className="author">
                          <img
                            src="/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="#">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Source By
                          <br />
                          <strong>Beartai</strong>
                          <br />
                          {/* <em>($8,240.50)</em> */}
                        </span>
                        <span className="ends">
                          Date
                          <br />
                          <strong>July 24th, 2022</strong>
                          <br />
                          {/* <em>(July 24th, 2022)</em> */}
                        </span>
                        <div className="text-button">
                          <a href="https://www.beartai.com/news/1280769">View Details{" >>>"}</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="col-lg-6 currently-market-item all msc">
                <div className="item">
                  <Row>
                    <Col md="5" lg="4">
                      <div className="left-image">
                        <img
                          src="https://assets.beartai.com/uploads/2023/07/play-services.jpg"
                          alt=""
                          style={{ borderRadius: 20, objectFit: 'cover', width: '100%' }}
                        />
                      </div>
                    </Col>
                    <Col md="7" lg="8">
                      <div className="right-content">
                        <h4 className='truncate-2'>Android 14 จะแจ้งเตือนหากติดตั้ง/อัปเดตแอปนอก Play Store</h4>
                        <span className="author">
                          <img
                            src="/images/author.jpg"
                            alt=""
                            style={{ maxWidth: 50, borderRadius: "50%" }}
                          />
                          <h6>
                            Liberty Artist
                            <br />
                            <a href="#">@libertyart</a>
                          </h6>
                        </span>
                        <div className="line-dec" />
                        <span className="bid">
                          Source By
                          <br />
                          <strong>Beartai</strong>
                          <br />
                          {/* <em>($8,240.50)</em> */}
                        </span>
                        <span className="ends">
                          Date
                          <br />
                          <strong>July 24th, 2022</strong>
                          <br />
                          {/* <em>(July 24th, 2022)</em> */}
                        </span>
                        <div className="text-button">
                          <a href="https://www.beartai.com/news/1280769">View Details{" >>>"}</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Currently;
