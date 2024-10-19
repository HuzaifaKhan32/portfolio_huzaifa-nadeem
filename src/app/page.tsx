
import React from "react"
// import Image from "next/image";
const Page = () => {
  return (
    <>

      <div className="content">
        <div className="left">
          <div className="About-me">Hi,
            <div>My name is <span className="text-[#F2E205]">Huzaifa</span></div>
            <div>I am a Frontend Developer</div>
            <p>I am a passionate front-end developer currently studying at GIAIC. My focus is on building responsive and user-friendly web interfaces using the latest technologies like HTML, CSS, and JavaScript. Alongside my studies, I am constantly learning and improving my skills in web development to stay up-to-date with industry trends. In the future, I aim to expand my knowledge by diving into machine learning, as I believe it will complement my development skills and open up new opportunities for innovation in my career.</p>
          </div>
          <div className="button">
            <button>Download CV</button>
            <button>Explore More</button>
          </div>
        </div>
        <div className="right">
          <div className="picture">

          </div>
        </div>
      </div>
      <div className="social-media">
        <div className="container">
          <div className="card1 card">
            <div className="Instagram"></div>
          </div>
          <div className="card2 card">

          </div>
          <div className="card3 card">

          </div>
        </div>


      </div>

      {/* <div className="">
        <div className="About-me">Hi,
          <div>My name is <span className="text-[#F2E205]">Huzaifa</span></div>
          <div>I am a Frontend Developer</div>
          <p>I am a passionate front-end developer currently studying at GIAIC. My focus is on building responsive and user-friendly web interfaces using the latest technologies like HTML, CSS, and JavaScript. Alongside my studies, I am constantly learning and improving my skills in web development to stay up-to-date with industry trends. In the future, I aim to expand my knowledge by diving into machine learning, as I believe it will complement my development skills and open up new opportunities for innovation in my career.</p>
          <div className="button">

            <button className="" >Download CV</button>
            <button className="">More About Me</button>
          </div>
        </div>
        <div className="picture-cont">
          <div className="picture"></div>
        </div>
      </div> */}
    </>
  )
}

export default Page;