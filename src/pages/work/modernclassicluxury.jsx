import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import initIsotope from "../../common/initIsotope";
import Image from 'next/image'

const Modernclassicluxury = ({ vis }) => {
    React.useEffect(() => {
        setTimeout(() => {
            if (window.Isotope) initIsotope();
        }, 1000);
    }, []);
  return (
    <>
            <MainLayout>
                <PageHeader
                    title="Modern Classic Luxury"
                    fullPath={[
                        { id: 1, name: "home", url: "/" },
                        { id: 2, name: "work", url: "/work/" },
                        { id: 3, name: "modernclassicluxury", url: "/work/modernclassicluxury" }
                    ]}
                    image="/assets/img/works/modernclassicluxury/bg.png"
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
                                        <Image src="/assets/img/works/modernclassicluxury/01.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/02.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/03.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/04.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/05.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/06.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/07.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/08.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/09.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/10.png" />
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
                                    <Image src="/assets/img/works/modernclassicluxury/11.png" />
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
  )
}

export default Modernclassicluxury