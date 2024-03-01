import React from 'react'
import Navbar from "../Navbar/page"
import "./page.css"

const page = () => {
  return (
    <>
      <div className="about-us-page">
        <div className="overlay"></div>
        <Navbar />
        <div className="container">
          <div className='about-us-hero'>
            <h3 className="header">Raven Sports</h3>
              <h1 className="page-title">About Us</h1>
              <div className="trailer-game">
                  <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/rqOJ0xpGl68?autoplay=1" 
                  title="YouTube video player" 
                  // frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
        </div>
          </div>
              
          
          <div className="about-us-content">
            <div className="container-div">
              <div className="game-info">
              <h2>About Raven Sports</h2>
              <hr />
              <p>
                 Introducing Skater Republic, the thrilling upcoming arcade game that puts you right in the heart of a dynamic skateboarding adventure! Explore expansive skateparks, bustling cityscapes, and renowned real-life locations for an immersive experience like no other. Featuring intuitive controls, a sophisticated trick system, and a compelling progression framework, players will find themselves immersed in a world where every achievement feels truly gratifying. Keep an eye out as we work diligently to bring this extraordinary gaming experience to life. 
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti necessitatibus libero voluptatem error, soluta repudiandae aspernatur nostrum deserunt impedit architecto voluptate placeat officia, dolorum officiis. Ducimus iusto porro quaerat accusantium ut enim quidem amet fugiat magni earum explicabo pariatur voluptatibus, repellat maiores sequi eaque optio inventore. Sunt, consequatur consectetur? Est rerum vero laborum perferendis dolore sed quisquam distinctio saepe, quas porro, beatae atque fuga libero magni et tenetur facilis voluptatibus similique minima! Corrupti consequatur dolorum, autem asperiores a distinctio impedit quibusdam possimus, doloribus error rem. Excepturi repellat vero libero tempora possimus totam nesciunt, officia voluptatum aspernatur ut quasi veritatis.
              </p>
            
          </div>
          <div className='game-image'>
            
         
          </div>
            </div>
            
        </div>
          </div>
      </div>
          
      </>
  )
}

export default page