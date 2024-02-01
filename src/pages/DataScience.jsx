import React from 'react'
import images7 from './images/DS1.jpg';
import images8 from './images/DS2.jpg';
import images9 from './images/DS3.jpg';


function DataScience() {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                            <div class="card-body">
                            <img src={images7} class="card-img-top" alt="..."/>
                                <h5 class="card-title">Top 10 High Paying Non-Coding Jobs in Data Science in 2024</h5>
                                <p class="card-text">Are you someone who's not interested in coding, but want to get placed in tech..</p>
                                <button className='btn btn-success'>READ MORE ..</button>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={images8} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Impact of Certification Programs on Hiring Data Scientists</h5>
                                <p class="card-text">Data scientists are the creators behind transforming the raw data into edible data...</p>
                                <button className='btn btn-success'>READ MORE ..</button>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={images9} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Top Product-Based Companies for Data Science Freshers</h5>
                                <p class="card-text">in today's data-driven world, datascience has emerged as crucial field...</p>
                                <button className='btn btn-success'>READ MORE ..</button>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DataScience