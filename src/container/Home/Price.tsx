
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/components/Language/LanguageContext';

import { priceHead, price } from '@/data/home';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight, FaCheck } from 'react-icons/fa';
interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
const NextArrow: React.FC<ArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`price-next-arrow ${className}`}
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
            className={`price-prev-arrow ${className}`}
            // style={{ ...style, display: 'flex', background: 'green' }}
            onClick={onClick}
        >
            <FaAngleLeft />
        </div>
    );
}
const Price: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
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
        <div className="price">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>
                                {currentLanguage === "TH" ? priceHead[0].title?.TH : priceHead[0].title?.EN}
                            </h2>
                            <h4>
                                {currentLanguage === "TH" ? priceHead[0].detail?.TH : priceHead[0].detail?.EN}
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='package bg-image-unset'>
                    <Slider {...settings}>
                        {price.map((item, index) => (
                            <div className="px-3" key={index}>
                                <div className="item">
                                    <h4 className='d-flex justify-content-center mt-0'>
                                        <div className="icon d-flex me-2 c-purple">
                                            <img src={`/images/icon-0${index + 2}.png`} alt="" className='m-auto' />
                                        </div>
                                        <div >
                                            <span >{item.title}</span>
                                            <br />
                                            ราคา <span className='c-purple'>{item.price.price}</span>
                                        </div>
                                    </h4>
                                    <h4 className='mt-0 mb-0'>
                                        แพ็คเกจ <span className='c-purple'>2</span> ปี ลด <span className='c-purple'>10%</span> ราคา <span className='c-purple'>{(item.price.price * 2) - ((item.price.price * 2) * 0.1)}</span>
                                        <br />
                                        แพ็คเกจ <span className='c-purple'>3</span> ปี ลด <span className='c-purple'>15%</span> ราคา <span className='c-purple'> {(item.price.price * 3) - ((item.price.price * 3) * 0.1)}</span>
                                        <br />
                                        {item.serve.editDesign}
                                    </h4>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <span className="bid">
                                                <div className="line-dec" />
                                                <em>
                                                    <span className='c-purple me-2'>
                                                        <FaCheck />
                                                    </span>
                                                    {item.serve.editDesign}
                                                </em>
                                                <br />
                                                <em>
                                                    <span className='c-purple me-2'>
                                                        <FaCheck />
                                                    </span>
                                                    {item.serve.siteArea}</em>
                                                <br />
                                                <em>
                                                    <span className='c-purple me-2'>
                                                        <FaCheck />
                                                    </span>
                                                    {item.serve.imageStorage}</em>
                                                <br />
                                                <em>
                                                    <span className='c-purple me-2'>
                                                        <FaCheck />
                                                    </span>
                                                    {item.serve.backup}</em>
                                                <br />
                                                <em>
                                                    <span className='c-purple me-2'>
                                                        <FaCheck />
                                                    </span>
                                                    {item.serve.Domain}</em>
                                                <br />
                                                <em>
                                                    <span className='c-purple me-2'>
                                                        <FaCheck />
                                                    </span>
                                                    {item.serve.consulting}</em>
                                                <br />
                                                {item.serve.logo ?
                                                    <>
                                                        <em>
                                                            <span className='c-purple me-2'>
                                                                <FaCheck />
                                                            </span>
                                                            ออกแบบ Logo ใหม่</em>
                                                        <br />
                                                    </>
                                                    : ""}
                                                {item.serve.Responsive ?
                                                    <em>
                                                        <span className='c-purple me-2'>
                                                            <FaCheck />
                                                        </span>
                                                        รองรับทุกขนาดหน้าจอ</em>
                                                    : ""}
                                                <br />
                                                <em>
                                                    <span className='c-purple me-2'>
                                                        <FaCheck />
                                                    </span>
                                                    {item.article.language}</em>
                                                <br />
                                                <em>
                                                    <span className='c-purple me-2'>
                                                        <FaCheck />
                                                    </span>
                                                    {item.article.blog}</em>

                                            </span>
                                            <div className="line-dec" />
                                            <div className="text-center">
                                                <button >
                                                    {currentLanguage === "TH" ? "ซื้อแพ็คเกจ" : "Buy Package"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div >
        </div >
    );
}

export default Price;
