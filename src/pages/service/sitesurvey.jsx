import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import ProjectIntro from '../../components/Project-Intro'
function sitesurvey() {
  return (
    <>
    <MainLayout>
        <PageHeader 
            title="Site Survey"
            fullPath={[
                { id: 1, name: "home", url: "/"},
                { id: 2, name: "service", url: "/service/"},
                { id: 3, name: "sitesurvey", url: "/service/sitesurvey"}
            ]}
            // image="/public/assets/img/service/sitesurvey/"
        />
        <ProjectIntro />
    </MainLayout>
    </>
  )
}

export default sitesurvey