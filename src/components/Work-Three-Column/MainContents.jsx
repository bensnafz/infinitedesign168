import React from 'react'
import ContentsModernLuxury from './ContentsModernLuxury'
import ContentsModernClassic from './ContentsModernClassic'
import ContentsModernLoft from './ContentsModernLoft'
import ContentsModernMinimal from './ContentsModernMinimal'

function MainContents() {
  return (
    <>
    <div className="row gallery">
        <ContentsModernLuxury/>
        <ContentsModernClassic/>
        <ContentsModernLoft/>
        <ContentsModernMinimal/>
    </div>
    </>
  )
}

export default MainContents