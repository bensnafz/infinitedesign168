import React from "react";
import Team3 from "../../components/Team3";
import MainLayout from "../../layouts/main";
import Video from "../../components/Video";
import Intro3 from "../../components/Intro3";
import Blogs3 from "../../components/Blogs3";
import AboutUs8 from "../../components/About-Us8";
import Services5 from "../../components/Services5";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import WorkWithoutFilter from "../../components/Work-Without-Filter";
import IntroWithVertical2 from "../../components/Intro-with-vertical2";

const Home7 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  });
  return (
    <MainLayout>
      <IntroWithVertical2 />
      <AboutUs8 />
      <Services5 />
      <Portfolio2 />
      {/* <WorkWithoutFilter /> */}
      <div
            class="filtering text-center col-12 wow fadeInUp full-bg"
            data-wow-delay=".3s"
            // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
          >
            <div
              class="filter bg-img bg-repeat"
              style={{ backgroundImage: `url(/assets/img/line-pattern1.png)` }}
            >
            <br /><br /><br />
            </div>
          </div>
      <Video />
      {/* <Team3 /> */}
      {/* <Testimonials1 bigTitle /> */}
      {/* <Blogs3 smallTitle /> */}
    </MainLayout>
  );
};

export default Home7;
