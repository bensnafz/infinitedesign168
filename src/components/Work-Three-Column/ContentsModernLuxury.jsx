import React from "react";
import Link from "next/link";
import Image from "next/image";
function ContentsModernLuxury() {
  return (
    <>
      <div className="col-lg-4 col-md-6 items modernLuxury">
        <div className="item">
          <div className="img">
            <Image
              src="/assets/img/works/modernluxury/01.png"
              width={800}
              height={637}
              alt="บางกอกบูเลอวาร์ด ดอนเมือง แจ้งวัฒนะ"
            />
            {/* <img src="/assets/img/works/modernluxury/01.png" alt="" style="width: 800px; height: 637px;" /> */}
          </div>
          <div className="cont">
            <p>
              <span>บางกอกบูเลอวาร์ด</span>
            </p>
            <span className="text-white">
              ดอนเมือง แจ้งวัฒนะ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-outline-light">
                <Link href="/work2/modernluxury">ดูรายละเอียด</Link>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentsModernLuxury;
