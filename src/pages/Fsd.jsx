import React from 'react'
import images4 from './images/FSD1.png';
import images5 from './images/FSD2.png';
import images6 from './images/FSD3.jpg';
function Fsd() {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={images4} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Web componenet: A deep Dive into Reusable and Custom Elements </h5>
                            <p class="card-text">As a full-stack developer, have your ever got bored of using the same HTML,CSS,</p>
                            <button className='btn btn-success'>READ MORE ..</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={images5} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Top Ways to  Assess Soft Skills in Full Stack Developer in 2024</h5>
                                <p class="card-text">When you're hiring a full-stack developer,what are the most important things you look for?</p>
                                <button className='btn btn-success'>READ MORE ..</button>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={images6} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Top Differences:Full Stack Developer vs Software Engineer</h5>
                                <p class="card-text">A Full Stack Developer is a tech all-rounder They work on both the front and.</p>
                                <button className='btn btn-success'>READ MORE ..</button>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Fsd