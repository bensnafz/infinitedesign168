import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import WorkHeader from "../../components/Work-header";
import initIsotope from "../../common/initIsotope";

const Modernclassicluxury = ({ vis }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <>
      <MainLayout>
        <section className="works section-padding">
          <div className="container">
            <div className="row header-container-work">
              <div className="header-work">
                <h5 className="main-color-font">บางกอกบูเลอวาร์ด</h5><span>เพชรเกษม-ปิ่นเกล้า</span>
              </div>
            </div>
            <div className="row gallery">
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/01.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/02.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/03.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/04.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/05.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/06.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/07.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/08.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/09.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/10.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img
                      src="/assets/img/works/modernclassicluxury/11.png"
                      alt=""
                    />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                    <span>บางกอกบูเลอวาร์ด</span>
                    <h5>เพชรเกษม-ปิ่นเกล้า</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Modernclassicluxury;
