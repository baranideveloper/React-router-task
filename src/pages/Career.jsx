import React from 'react'
import images13 from './images/CR1.png';
import images14 from './images/UI1.png';
import images15 from './images/CR3.jpg';

function Career() {
  return (
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={images13} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Top Technologies to Learn in 2024:Jumpstart a Successful Tech career</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='btn btn-success'>READ MORE ..</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={images14} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">UI/UX Designer job Description and Roles & Responsibilities</h5>
        <p class="card-text">UI UX is the abbreviated word that's been rocking the trend over the years,especially in user..</p>
        <button className='btn btn-success'>READ MORE ..</button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={images15} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Top 5 IT jobs for Economics Students</h5>
        <p class="card-text">In today's digital age, the intersection of economics and technology after exciting career.</p>
        <button className='btn btn-success'>READ MORE ..</button>
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default Career