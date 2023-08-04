import React from 'react';

const CreateNft: React.FC = () => {
    return (
        <div className="create-nft">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-heading">
                            <div className="line-dec"></div>
                            <h2>ME PROMPT &amp; TECHNOLOGY</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* <div className="main-button">
                            <a href="create">Create Your NFT Now</a>
                        </div> */}
                    </div>
                    <div className="col-lg-4">
                        <div className="item first-item">
                            <div className="number">
                                {/* <h6>1</h6> */}
                            </div>
                            <div className="icon">
                                <img src="/images/icon-02.png" alt="" />
                            </div>
                            <h4>เกี่ยวกับเรา</h4>
                            <p>รับทำเว็บไซต์และการตลาดออนไลน์ครบวงจร ไม่ว่าธุรกิจของคุณ จะมีขนาดเล็กหรือใหญ่ 
                                เราช่วยให้ธุรกิจของคุณเติบโตในโลกออนไลน์ ขยายขีดจำกัดการทำเว็บไซต์ พร้อมฟีเจอร์ธุรกิจออนไลน์</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item second-item">
                            <div className="number">
                                {/* <h6>2</h6> */}
                            </div>
                            <div className="icon">
                                <img src="/images/icon-04.png" alt="" />
                            </div>
                            <h4>ติดต่อเรา</h4>
                            <p>46/3 Ratchanikun Rd, Mueang Nakhon Ratchasima District, Nakhon Ratchasima 30000
                            meeprompt.teach@gmail.com
                            มือถือ 091 813 6426
</p>
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <div className="item">
                            <div className="icon">
                                <img src="/images/icon-06.png" alt="" />
                            </div>
                            <h4>Sell Your NFT &amp; Make Profit</h4>
                            <p>If you would like to support our TemplateMo website, please visit <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">our contact page</a> to make a PayPal contribution. Thank you.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default CreateNft;
