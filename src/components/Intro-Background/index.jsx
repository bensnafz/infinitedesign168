import React from "react";
import Image from "next/image";
import Link from "next/link";

function index() {
  return (
    <>
      <div className="image-container">
        <div className="row">
          <img
            src="assets/img/contentIndex/index01.png"
            className="img-bg"
            alt=""
          />
          <div className="container-background">
            {/* <div className="caption">
                            <div className="custom">
                                <h5 className="thin-txt">Welcome</h5>
                                <h1 className="thin-body-txt">INFINITE168DESIGN</h1>
                            </div>
                            <p className="mt-10">
                                รับออกแบบตกแต่งภายใน
                                สร้างสรรค์หลากหลายสไตล์เพื่อแสดงถึงความเป็นตัวคุณ
                            </p>
                            <Link href="/work/" passHref>
                                <a
                                    className="btn-curve btn-color mt-30 btn-content-index"
                                >
                                    <span>ดูรายละเอียด</span>
                                </a>
                            </Link>
                        </div> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10">
                  <div className="caption hmone mt-100">
                    <h5 className="thin">Welcome</h5>
                    <h1 data-splitting className="words chars splitting main-color-font">
                      INFINITE168DESIGN
                    </h1>
                    <p className="mt-10">
                      รับออกแบบตกแต่งภายใน
                      สร้างสรรค์หลากหลายสไตล์เพื่อแสดงถึงความเป็นตัวคุณ
                    </p>
                    <Link href="/about">
                      <a className="btn-curve btn-bord btn-lit mt-30">
                        <span>อ่านต่อ</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
