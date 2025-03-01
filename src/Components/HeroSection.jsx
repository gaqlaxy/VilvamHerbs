import React from 'react'

export default function HeroSection() {
  return (
    <>
    
<svg className="svg-defs" aria-hidden="true">
    <defs>
      <clipPath id="shapeVelyVely" clipPathUnits="userSpaceOnUse">
        <path d="M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z">
          <animate repeatCount="indefinite" attributeName="d" dur="5s" values="M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z;M452,360s31.156-141.666,162-214C733.647,79.855,810.23,42.3,872,38c137.68-9.583,190.04,91.324,252,220,0,0,74.98,148.733-17,274,0,0-66.6,95.241-196,130,0,0-94.546,15.779-250-60C504.522,540.92,426.292,455.009,452,360Z;M452,368S422.355,227.135,558,130c87.347-62.55,192.915-92.165,255-99,185.288-20.4,315.81,93.474,339,261,0,0,7.47,122.988-44,216,0,0-70.39,104.463-192,150,0,0-156.255,42.559-269-17C542.732,582.125,458.242,428.913,452,368Z;"></animate>
        </path>
      </clipPath>
     </defs>
</svg>

<div className="container">
    <div className="pos-relative">
        <div className="pos-absolute">
            <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMin meet"className='svga' >
                <text dx="-40%" x="50%" y="50%" fill="#000" className="text is-left">Experience</text>
                <text dx="10%" x="50%" y="66%" fill="#000" className="text is-right">True Purity</text>
            </svg>
        </div>
        <div className='posabs' >
            <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMin meet" className='svga'>
                <image xlinkHref="//cdn.shopify.com/s/files/1/0028/7254/1229/files/main_1e0d7e35-77ff-4490-8a6f-c87a85802933_1600x.jpg?v=1561968642" style={{maxWidth: "100%", width: "100%", clipPath: "url('#shapeVelyVely')"}} ></image>
                <text dx="-40%" x="50%" y="50%" fill="#fff" className="text is-left" style={{clipPath: "url('#shapeVelyVely')"}}>Experience</text>
                <text dx="10%" x="50%" y="66%" fill="#fff" className="text is-right" style={{clipPath: "url('#shapeVelyVely')"}} >True Purity</text>
            </svg>
        </div>
    </div>
</div>
  
    </>
  )
}
