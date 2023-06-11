import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import ProjectIntro from '../../components/Project-Intro'

function furniturelayoutplan() {
  return (
    <>
    <MainLayout>
        <PageHeader 
            title="Furniture Layout Plan"
            fullPath={[
                { id: 1, name: "home", url: "/"},
                { id: 2, name: "service", url: "/service/"},
                { id: 3, name: "furniturelayoutplan", url: "/service/furniturelayoutplan"}
            ]}
            // image="/public/assets/img/service/sitesurvey/"
        />
        <ProjectIntro />
    </MainLayout>
    </>
  )
}

export default furniturelayoutplan