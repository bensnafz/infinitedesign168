/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function ContentsModernLoft() {
  return (
    <>
      <div className="col-lg-4 col-md-6 items modernLoft">
        <div className="item">
          <div className="img">
            <img src="/assets/img/works/col/3.jpg" alt="" />
          </div>
          <div className="cont">
            <h5>
              <Link href="/project-details">Modern Townhouse</Link>
            </h5>
            <span>Architecture</span>
            <span>Modern</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentsModernLoft;
