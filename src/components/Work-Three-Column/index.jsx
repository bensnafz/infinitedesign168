/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";
import MainContents from './MainContents'

const WorkThreeColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".modernLuxury">Modern Luxury</span>
              <span data-filter=".modernClassic">Modern Classic Luxury</span>
              <span data-filter=".modernLoft">Modern Loft</span>
              <span data-filter=".modernMinimal">Modern Minimal</span>
            </div>
          </div>
          <MainContents/>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;
