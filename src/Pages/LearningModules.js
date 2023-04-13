import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer';
import image1 from '../Images/image13.jpg';
import image2 from '../Images/image14.jpg';
import image3 from '../Images/image15.jpg';
import image4 from '../Images/image16.jpg';
import image5 from '../Images/image17.jpg';
import image6 from '../Images/image18.jpg';

const LearningModules = () => {
  return (
    <div>
        <NavBar bgColor={"black"} padding={5}/>
        <div className="h-72 bg-gray-950 text-center flex justify-center flex-col text-white">
        <p className="text-6xl">Online Learning Modules</p>
        <p className="mt-5 text-2xl">Learn about our flagship courses</p>
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex flex-row justify-around">
          <div className="border" style={{width: "400px"}}>
            <img src={image1} style={{width: "400px",height: "300px"}}/>
            <div className="p-5 mt-5">
              <p className="text-2xl">Business Consulting - The Full</p>
              <p className="text-2xl">Course</p>
              <div className="border-b mt-10 mb-6"/>
              <p>Free</p>
              <button type="button" className="my-5 w-40 h-11 bg-violet-500 text-white hover:bg-transparent hover:text-black transition delay-0 duration-300 ease-out hover:border-2">Join</button>
            </div>
          </div>
          <div className="border" style={{width: "400px"}}>
            <img src={image2} style={{width: "400px",height: "300px"}}/>
            <div className="p-5 mt-5">
              <p className="text-2xl">Business Consulting for</p>
              <p className="text-2xl">Professionals</p>
              <div className="border-b mt-10 mb-6"/>
              <p>Free</p>
              <button type="button" className="my-5 w-40 h-11 bg-violet-500 text-white hover:bg-transparent hover:text-black transition delay-0 duration-300 ease-out hover:border-2">Join</button>
            </div>
          </div>
          <div className="border" style={{width: "400px"}}>
            <img src={image3} style={{width: "400px",height: "300px"}}/>
            <div className="p-5 mt-5">
              <p className="text-2xl">Business Strategy and</p>
              <p className="text-2xl">Consulting</p>
              <div className="border-b mt-10 mb-6"/>
              <p>Free</p>
              <button type="button" className="my-5 w-40 h-11 bg-violet-500 text-white hover:bg-transparent hover:text-black transition delay-0 duration-300 ease-out hover:border-2">Join</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around my-5">
          <div className="border" style={{width: "400px"}}>
            <img src={image4} style={{width: "400px",height: "300px"}}/>
            <div className="p-5 mt-5">
              <p className="text-2xl">Business Analysis</p>
              <div className="border-b mt-10 mb-6"/>
              <p>Free</p>
              <button type="button" className="my-5 w-40 h-11 bg-violet-500 text-white hover:bg-transparent hover:text-black transition delay-0 duration-300 ease-out hover:border-2">Join</button>
            </div>
          </div>
          <div className="border" style={{width: "400px"}}>
            <img src={image5} style={{width: "400px",height: "300px"}}/>
            <div className="p-5 mt-5">
              <p className="text-2xl">Principles of Finance</p>
              <div className="border-b mt-10 mb-6"/>
              <p>Free</p>
              <button type="button" className="my-5 w-40 h-11 bg-violet-500 text-white hover:bg-transparent hover:text-black transition delay-0 duration-300 ease-out hover:border-2">Join</button>
            </div>
          </div>
          <div className="border" style={{width: "400px"}}>
            <img src={image1} style={{width: "400px",height: "300px"}}/>
            <div className="p-5 mt-5">
              <p className="text-2xl">Consulting Methods</p>
              <div className="border-b mt-10 mb-6"/>
              <p>Free</p>
              <button type="button" className="my-5 w-40 h-11 bg-violet-500 text-white hover:bg-transparent hover:text-black transition delay-0 duration-300 ease-out hover:border-2">Join</button>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}

export default LearningModules