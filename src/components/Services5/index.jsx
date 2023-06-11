import React from "react";
import Link from "next/link";

const Services5 = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>การบริการ</h3>
          <div className="tex-bg">Services</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-home"></span>
            <h5 className="mb-10">Site Survey</h5>
            <h6 className="mb-10">สำรวจพื้นที่หน้างาน</h6>
            <Link href="/project-details">
              <a className="more mt-30">ดูรายละเอียด</a>
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-interior-design"></span>
            <h5 className="mb-10">Furniture Layout Plan</h5>
            <h6 className="mb-10">จัดวางฟังก์ชันเฟอร์นิเจอร์</h6>
            <Link href="/about">
              <a className="more mt-30">ดูรายละเอียด</a>
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon">
              <img src="../assets/img/icons/color-scheme.png" className="icon-color" alt="" />
            </span>
            <h5 className="mb-10">Mood&Tone</h5>
            <h6 className="mb-10">ภาพบรรยกาศตัวอย่าง</h6>
            <Link href="/about">
              <a className="more mt-30">ดูรายละเอียด</a>
            </Link>
          </div>

        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-computer"></span>
            <h5 className="mb-10">3D Render</h5>
            <h6 className="mb-10">อกกแบบภาพ 3 มิติ</h6>
            <Link href="/about">
              <a className="more mt-30">ดูรายละเอียด</a>
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-sketch"></span>
            <h5 className="mb-10">Shop Drawing</h5>
            <h6 className="mb-10">เขียนแบบก่อสร้าง</h6>
            <Link href="/about">
              <a className="more mt-30">ดูรายละเอียด</a>
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-renovation"></span>
            <h5 className="mb-10">BOQ Furniture</h5>
            <h6 className="mb-10">ประเมินราคา</h6>
            <Link href="/about">
              <a className="more mt-30">ดูรายละเอียด</a>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services5;
