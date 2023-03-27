import React, { useEffect ,useState} from "react";
import IntroVideo from "./components/IntroVideo.jsx";
import Section from "./components/Section.jsx";
import Footer from "./components/Footer.jsx";
import Misc from "./components/Misc.jsx";

import './styles/intro.scss'
import './styles/section.scss'
import './styles/App.scss'
import './styles/footer.scss'
import "./styles/mediaQuery.scss";
import './styles/misc.scss'


import data from "./data/data.json"
import freshTopicImg from "./assets/academy.png";
import freshTopic2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";


const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";



function App() {
  const { 
    freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala 
  } = data;


  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };
    useEffect(() => {
      window.addEventListener("mousemove", dotCursor);
    
      return () => {
        window.removeEventListener("mousemove", dotCursor)
      };
    },[]);



    return (
      <div className="App">
       
        <IntroVideo />
        {/* freshtopic1 */}

        <Section
          h3={freshTopic.heading}
          text={freshTopic.text}
          btnText={freshTopic.btn}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={yellow}
          btnColor={pink}
          imgSrc={freshTopicImg} />

        {/* freshtopic2 */}

        <Section
          h3={freshTopic2.heading}
          text={freshTopic2.text}
          btnText={freshTopic2.btn}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={yellow}
          btnColor={pink}
          imgSrc={freshTopic2Img} />

        {/* tedTalks */}

        <Section
          h3={tedTalks.heading}
          text={tedTalks.text}
          btnText={tedTalks.btn}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={yellow}
          btnColor={pink}
          imgSrc={tedTalksImg} />


        {/* franchise */}

        <Section
          h3={franchise.heading}
          text={franchise.text}
          btnText={franchise.btn}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={brown}
          btnColor={yellow}
          imgSrc={franchiseImg} />

        {/* map */}

        <Section
          h3={map.heading}
          text={map.text}
          btnText={map.btn}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={brown}
          hasBtn={false}
          btnColor={yellow}
          imgSrc={mapImg} />


        {/* courses */}

        <Section
          h3={courses.heading}
          text={courses.text}
          btnText={courses.btn}
          imgSrc={coursesImg}
          imgSize={"30%"}
          backgroundColor={yellow}
          headingColor={pink}
          textColor={pink}
          btnBgColor={pink}
          btnColor={yellow}
        />

        {/* album */}

        <Section
          h3={album.heading}
          text={album.text}
          btnText={album.btn}
          backgroundColor={white}
          headingColor={pink}
          textColor={brown}
          btnBgColor={brown}
          btnColor={yellow}
          imgSrc={albumImg} />

        {/* barat */}

        <Section
          h3={barat.heading}
          text={barat.text}
          btnText={barat.btn}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={yellow}
          btnColor={pink}
          imgSrc={baratImg} />

        {/* chaiwala */}

        <Section
          h3={chaiwala.heading}
          text={chaiwala.text}
          btnText={chaiwala.btn}
          backgroundColor={white}
          headingColor={pink}
          textColor={brown}
          btnBgColor={brown}
          btnColor={yellow}
          imgSrc={chaiWalaImg} />

        <Footer />
        <Misc />

      </div>
    );
  };

  export default App;
