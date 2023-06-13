import React from 'react'
import MainLayout from "../../layouts/main";
import WorkHeader from '../../components/Work-header';
import Portfolio2 from '../../components/Portfolio2';

function index() {
  return (
    <>
    <MainLayout>
        <WorkHeader
            title={{
            first: "Portfolio",
            //second: "By Infinfinite168design",
            }}
            // title = "text",
            //content="Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."
        />
        <Portfolio2 />
    </MainLayout>
    </>
  )
}

export default index