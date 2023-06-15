import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import initIsotope from "../../common/initIsotope";

const Sitesurvey = ({ vis }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <MainLayout>
        <PageHeader
          title="Site Survey"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "service", url: "/service/" },
            { id: 3, name: "sitesurvey", url: "/service/sitesurvey" }
          ]}
          image="/assets/img/service/sitesurvey/bg.png"
        />
        <section className="works section-padding">
          <div className="container">
            <div className="row gallery">
              <div className="col-md-6 items mt-0">
                <div className="main-header mb-0">
                  <h5>By Infinite168design.</h5 >
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/service/sitesurvey/01.jpg" alt="" />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/service/sitesurvey/03.jpg" alt="" />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/service/sitesurvey/04.jpg" alt="" />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                  </div>
                </div>
              </div>
              <div className="col-md-6 items">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/service/sitesurvey/05.jpg" alt="" />
                  </div>
                  <div className={`cont ${vis ? "vis" : ""}`}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}

export default Sitesurvey