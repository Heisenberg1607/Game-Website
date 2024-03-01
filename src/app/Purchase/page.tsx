import React from 'react'
import Navbar from "../Navbar/page"
import "./page.css"
const page = () => {
  return (
      <>
          <div className="purchase-page">
          <div className="overlay"></div>
              
              <Navbar></Navbar>
              <div className="content">
              <div className="purchase-title">
              <h1 className="purchase-title-text">Game Market</h1>
              </div>
                  <div className="game-inputs">
                      <select className="select-info-purchase" name="" id="">
                      <option className="option-purchase" value="">Riders Republic</option>
                      <option className="option-purchase" value="">Valorant</option>
                      <option className="option-purchase" value="">Assasins Creed</option>
                      </select>
                      <select className="select-info-purchase" name="" id="">
                      <option className="option-purchase" value="">Riders Republic</option>
                      <option className="option-purchase" value="">Valorant</option>
                      <option className="option-purchase" value="">Assasins Creed</option>
                      </select>
                      <select className="select-info-purchase" name="" id="">
                      <option className="option-purchase" value="">Riders Republic</option>
                      <option className="option-purchase" value="">Valorant</option>
                      <option className="option-purchase" value="">Assasins Creed</option>
                      </select>
                      <button className="purchase-button">Purchase</button>
                  </div>
                  <div className="video-container">
            
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/rqOJ0xpGl68?autoplay=1" 
              title="YouTube video player" 
            //   frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 

              >
            </iframe>
          </div>
              </div>
          </div>
        
    </>
  )
}

export default page