/* eslint-disable @next/next/no-img-element */
import React from "react";

 const AboutUs8 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 exp">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">About Us</h6>
              <h3 className="fw-400 text-u ls4">Our Comapny</h3>
            </div>
            <div className="box">
              <h2 className="fz-40 fw-600 ls1 mb-20">
              บริษัท อินฟินิท 168 ดีไซน์ แอนด์ คอนสตรัคชั่น
              </h2>
              <p className="font-thai">
              เป็นบริษัทรับออกแบบตกแต่งภายใน บ้าน คอนโด ร้านค้า สำนักงาน บริการครบวงจร(turn key) โดยทีม อินทีเรียดีไซน์เนอร์ 
              ที่สามารถสร้างความโดดเด่น และสร้างเอกลักษณ์ของงานให้สอดคล้องกับ ผู้อยู่อาศัย ประกอบกับการสร้างานจากทีมช่างมืออาชีพ ประสบการณ์การทำงานมากกว่า 10 ปี
              </p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/img/maincontent/c1400-844.png" alt="" />

            <div className="feat mt-30">
              <div className="item">
                <div>
                  <h5>01</h5>
                  <h6>Architecture</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>02</h5>
                  <h6>Interior Design</h6>
                </div>
              </div>
              <div className="item">
                <div>
                  <h5>03</h5>
                  <h6>3D Modeling</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs8;