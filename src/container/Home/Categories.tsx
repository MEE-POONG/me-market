import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { SiTypescript } from "react-icons/si";
import { Container } from 'react-bootstrap';

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`next-arrow two ${className}`}
            // style={{ ...style, display: 'flex', background: 'red' }}
            onClick={onClick}
        >
            <FaAngleRight />
        </div>
    );
}

const PrevArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`prev-arrow two ${className}`}
            // style={{ ...style, display: 'flex', background: 'green' }}
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}

const Categories: React.FC = () => {
    const settingsLanguages = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (

        <div className="categories-collections">
            <div className="container">

                <div className="categories">
                    <div className="section-heading mb-0">
                        <div className="line-dec"></div>
                        <h2 >Website development in <em>multiple</em> languages.</h2>
                    </div>
                    <div className='dev-languages'>
                        <Slider {...settingsLanguages}>
                            <div className="px-2 py-5">
                                <div className="item px-2">
                                    <div className="icon">
                                        <img className="d-inline" src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/89a103ef-d0af-4fad-9970-a3c278f9ec00/170" alt="" />
                                    </div>
                                    <h4 className='truncate-1'>Html5</h4>
                                    <div className="icon-button">
                                        <a href="https://www.designil.com/html5-tips-tricks-techniques-1/"><FaAngleRight /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-5">
                                <div className="item px-2">
                                    <div className="icon">
                                        <img className="d-inline" src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/e311df22-7550-4e6a-3dd7-367e504b2900/170" alt="" />
                                    </div>
                                    <h4 className='truncate-1'>Css</h4>
                                    <div className="icon-button">
                                        <a href="http://www.kontentblue.com/site/article/article.php?id=css-introduction"><FaAngleRight /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-5">
                                <div className="item px-2">
                                    <div className="icon">
                                        <img className="d-inline" src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/abf7786a-c158-4a38-aab6-dec67822af00/170" alt="" />
                                    </div>
                                    <h4 className='truncate-1'>Es6</h4>
                                    <div className="icon-button">
                                        <a href="https://microbenz.in.th/%E0%B8%99%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B5-2017-%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B8%A1%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-es6-%E0%B8%81%E0%B8%B1%E0%B8%99-9dede81e30da"><FaAngleRight /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-5">
                                <div className="item px-2">
                                    <div className="icon">
                                        <img className="d-inline" src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/557b6253-75ac-4c99-4e8c-3cecee80db00/170" alt="" />
                                    </div>
                                    <h4 className='truncate-1'>Flutter</h4>
                                    <div className="icon-button">
                                        <a href="https://www.thaiprogrammer.org/2019/11/flutter-framework/"><FaAngleRight /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-5">
                                <div className="item px-2">
                                    <div className="icon">
                                        <img className="d-inline" src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/52a4fe9d-abf5-4e53-9d10-e0d5877cbc00/170" alt="" />
                                    </div>
                                    <h4 className='truncate-1'>Sass</h4>
                                    <div className="icon-button">
                                        <a href="https://www.borntodev.com/2020/07/15/sass-scss-101/"><FaAngleRight /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 py-5">
                                <div className="item px-2">
                                    <div className="icon">
                                        <img className="d-inline" src="/images/icon-06.png" alt="" />
                                    </div>
                                    <h4 className='truncate-1'>Framework</h4>
                                    <div className="icon-button">
                                        <a href="https://devahoy.com/getting-started-with-nextjs/"><FaAngleRight /></a>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="collections">
                <div className="section-heading">
                    <div className="line-dec"></div>
                    <h2>Explore Some Hot <em>Portfolio</em> By MePrompt.</h2>
                </div>
                <div className='meprompt-portfolio'>
                    <Slider {...settings}>
                        <div className="item px-2">
                            <img src="/images/customers/changpong.png" alt="" />
                            <div className="down-content">
                                <h4 className='truncate-1'>ช่างพองอิฐประสาน</h4>
                                <div className='d-flex justify-content-between'>
                                    <span className="collection">Viewer :<br /><strong>310</strong></span>
                                    <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                </div>
                                <div className="main-button">
                                    <a href="https://www.xn--72cah0a9bls7bydzab3brky72a.com/" target='_blank'>Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="item px-2">
                            <img src="/images/customers/homeagain.png" alt="" />
                            <div className="down-content">
                                <h4 className='truncate-1'>มูลนิธิบ้านหลังใหม่</h4>
                                <div className='d-flex justify-content-between'>
                                    <span className="collection">Viewer :<br /><strong>324</strong></span>
                                    <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                </div>
                                <div className="main-button">
                                    <a href="https://home-again.netlify.app/" target='_blank'>Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="item px-2">
                            <img src="/images/customers/robot.png" alt="" />
                            <div className="down-content">
                                <h4 className='truncate-1'>Robot รถตัดหญ้าบังคับวิทยุ</h4>
                                <div className='d-flex justify-content-between'>
                                    <span className="collection">Viewer :<br /><strong>380</strong></span>
                                    <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                </div>
                                <div className="main-button">
                                    <a href="https://www.i2arobot.com" target='_blank'>Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="item px-2">
                            <img src="/images/customers/fairy.png" alt="" />
                            <div className="down-content">
                                <h4 className='truncate-1'>Fairy Stone - หินนำโชค</h4>
                                <div className='d-flex justify-content-between'>
                                    <span className="collection">Viewer :<br /><strong>426</strong></span>
                                    <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                </div>
                                <div className="main-button">
                                    <a href="https://fairygemstone.com/" target='_blank'>Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="item px-2">
                            <img src="/images/customers/fairy.png" alt="" />
                            <div className="down-content">
                                <h4 className='truncate-1'>Fairy Stone - หินนำโชค</h4>
                                <div className='d-flex justify-content-between'>
                                    <span className="collection">Viewer :<br /><strong>426</strong></span>
                                    <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                </div>
                                <div className="main-button">
                                    <a href="https://fairygemstone.com/" target='_blank'>Explore</a>
                                </div>
                            </div>
                        </div>
                        <div className="item px-2">
                            <img src="/images/customers/fairy.png" alt="" />
                            <div className="down-content">
                                <h4 className='truncate-1'>Fairy Stone - หินนำโชค</h4>
                                <div className='d-flex justify-content-between'>
                                    <span className="collection">Viewer :<br /><strong>426</strong></span>
                                    <span className="category">Category:<br /><strong>เว็บบริษัท/องค์กร</strong></span>
                                </div>
                                <div className="main-button">
                                    <a href="https://fairygemstone.com/" target='_blank'>Explore</a>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>

    );
}

export default Categories;
