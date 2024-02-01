import React from 'react'
import images1 from './images/ALL1.jpg';
import images2 from './images/ALL2.jpg';
import images3 from './images/ALL3.png';

function All() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src={images1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Cross-Platform Consistency in UX: Achieving a Seamless User Experience.</h5>
                <p class="card-text">In today's digital landscape, users interact with products and services aross a multitude of devices.</p>
                <button className='btn btn-success'>READ MORE ..</button>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={images2} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Top 8 Selenium Alternatives for Test Automation</h5>
                <p class="card-text">Test automation plays a crucial role in the development and deployment of software applications.Selenium,</p>
                <button className='btn btn-success'>READ MORE ..</button>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={images3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">List of Top 30 AWS Services</h5>
                <p class="card-text">Companies (like Netflix,Pinterest,Instagram,Walmart,Microsoft,Orcale,etc.)have been shifting to AWS Services..</p>
                <button className='btn btn-success'>READ MORE ..</button>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default All