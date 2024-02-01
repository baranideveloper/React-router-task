import React from 'react'
import images10 from './images/CS1.png';
import images11 from './images/CS2.jpg';
import images12 from './images/CS3.jpg';


function Cyber() {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={images10} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Non-coding Job in Cybersecurity:A Comprehensive Guide</h5>
                            <p class="card-text">In the rapidly evolving field of Cybersecurity there is a common misconception that coding skills.</p>
                            <button className='btn btn-success'>READ MORE ..</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={images11} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">What is Hacking? Types of Hacking & More</h5>
                            <p class="card-text">Have you ever wondered what hacking is all about? It's a big deal in today's...</p>
                            <button className='btn btn-success'>READ MORE ..</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={images12} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Cybersecurity Vs Ethical Hacking:Top 10 Differences</h5>
                            <p class="card-text">Cybersecurity & Ethical hacking and have been key in making sure that your data online...</p>
                            <button className='btn btn-success'>READ MORE ..</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cyber