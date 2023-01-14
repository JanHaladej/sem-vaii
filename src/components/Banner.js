import React, { useState, useEffect } from 'react';

import img1 from "../images/BannerImgs/left.png"
import img2 from "../images/BannerImgs/right.png"

import imgbanner1 from "../images/BannerImgs/banner1.jpg"
import imgbanner2 from "../images/BannerImgs/banner2.jpg"
import imgbanner3 from "../images/BannerImgs/banner3.jpg"
import imgbanner4 from "../images/BannerImgs/banner4.jpg"
import imgbanner5 from "../images/BannerImgs/banner5.jpg"

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} alt="not showing" />
      <div className="actions">
        <button onClick={prev}> <img src={img1} alt="" className="left--banner--arrow" /> </button>
        <button onClick={next}> <img src={img2} alt="" className="right--banner--arrow" /></button>
      </div>
    </div>
  )
}

export default function Banner() {
  
    return (
         <div className="Banner">
      <Slideshow
        imgs={[
          {imgbanner1},
          {imgbanner2},
          {imgbanner3},
          {imgbanner4},
          {imgbanner5}
        ]}
      />
    </div>
    )
}