import React from 'react';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

const ItemDetails: React.FC = () => {
    return (
        <div className="item-details-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <div className="line-dec" />
                            <h2>
                                How about <em>MPT</em> Is?.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="left-image">
                            <img
                                src="/images/meprompt/logo.png"
                                alt=""
                                style={{ borderRadius: 20 }}
                            />
                            <p className='text-center mt-3'>Me Prompt Technonlogy Company</p>
                        </div>
                    </div>
                    <div className="col-lg-5 align-self-center">
                        <h4>Me Prompt Technonlogy Company</h4>
                        <span className="author">
                            <h6>
                                <a href="#">@meepoong</a>
                            </h6>
                        </span>
                        <p>
                            เรามีบริการทางด้านเทคโนโลยีที่ทันสมัยสำหรับองค์กร และผู้ใช้งานจริงเพื่อส่งเสริมระบบการทำงานปัจจุบันของคุณและก่อให้เกิดการพัฒนาและเปลี่ยนแปลงอย่างต่อเนื่องเพิ่มขีดความสามารถขององค์กรคุณให้พร้อมรับมือได้ทุกสถานการณ์เพราะเราเชื่อว่าการพัฒนากระบวนการทำงานด้วยเทคโนโลยีและนวัตกรรมเป็นสิ่งที่จำเป็นและสำคัญมากในอนาคต
                        </p>
                        <p>
                            เราตั้งใจที่จะสร้างความเปลี่ยนแปลงทางด้านดิจิทัลและเทคโนโลยีให้กับทุกองค์กร และเชื่อเป็นอย่างยิ่งว่าเราสามารถช่วยทุกองค์กร ในการเตรียมพร้อมต่อโลกที่เปลี่ยนแปลงได้อย่างเต็มรูปแบบ นอกจากนี้เรามุ่งหวังการส่งมอบแง่มุมทางธุรกิจ (Business) ผสมผสานกับการประยุกต์ใช้เทคโนโลยีในองค์กร (Technological Insight) เข้าด้วยกัน เพื่อต่อยอดและพัฒนาทุกองค์กรให้เป็น Data Driven Organization ได้อย่างมีประสิทธิภาพ
                        </p>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ItemDetails;
