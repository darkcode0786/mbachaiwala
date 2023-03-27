import React from 'react'
import { motion } from 'framer-motion'

const Section = ({ h3, text, hasBtn = "true",
  btnText,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {

  const headingOptions={
    initial:{
      y:"100%",
      opacity:0,
    }
    ,whileInView:{
      y:0,
      opacity:1,

    }
  };

  const textOptions={
    ...headingOptions,
  transition:{
    dealy:0.3,
  }
  };

  const buttonOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };

  const imgOptions = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };
  return (
    <section className="section" style={{
      backgroundColor: backgroundColor
    }}>
      <div>
        <motion.h3 {...headingOptions} data-cursorpointer={true} style={{
          color: headingColor
        }}>{h3}</motion.h3>
        <motion.p data-cursorpointer={true}  {...textOptions} style={{
          color: textColor
        }}>{text}</motion.p>

        {hasBtn && <motion.button  data-cursorpointer={true} {...buttonOptions} style={{
          color: btnColor,
          backgroundColor: btnBgColor
        }}>{btnText}</motion.button>}
        <motion.div {...imgOptions}>

          <img src={imgSrc} alt="imgsrc" style={{ width: imgSize }} />
        </motion.div>
      </div>


    </section>
  )
}

export default Section
