import React from 'react'
import "./About.css"
import Header from "./../components/Layout/Header";
import Footer from "./../components/Layout/Footer";

function About() {
  return (
    <>
    <Header></Header>
      <section class="banner">
    <div class="container">
      <h1>About us</h1>
      <p>Consectetur adipisicing elituscipit quidem facere itaque molestias vitae.</p>
    </div>     
  </section> 
  <section class="first">
    <div class="container">
      <p>Adipisicing ipsum dolor sit amet consectetur elit. Consectetur beatae eius, labore quasi ab neque asperiores repellendus praesentium in! Necessitatibus excepturi, accusantium esse eosnulla odit dicta deserunt iusto soluta.</p>
      <p>Labore quasi <strong>abneque asperiores repellendus</strong> praesentium in! Necessitatibus excepturi, accusantium esse eos nulla odit dicta deserunt iusto. Tuasi ablabore neque <u>asperiores repellendus praesentium</u> in! Necessitatibus excepturi, accusantium esse eos nulla odit dicta deserunt iusto soluta. Labore quasi ab neque asperiores repellendus praesentium.</p>
      <a class="cta" href="index.html">Discover more ⟩</a>
    </div>
  </section>
  <section class="second">
    <div class="container">
      <div class="left-img">
        <img src="./img/photo-1.jpg" alt="Person"/>
      </div>
      <div class="right-content">
        <h2>Perspiciatis cupiditate deserunt</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum in cumque, id quisquam praesentium unde dolor fugiat mollitia perspiciatis cupiditate deserunt, odit quo non officiis optio illum eum ad expedita? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit enim dolorum, adipisci explicabo, officia reprehenderit velit quasi voluptatibus consectetur et accusantium quam quaerat voluptates vel sapiente consequuntur doloribus illum dolores!</p>
        <a class="cta" href="index.html">Learn more »</a>
      </div>
    </div>
  </section>
  <section class="third">
    <div class="container">
      <div class="left-content">
        <h2>Mollitia consequatur</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consequuntur velit repudiandae nobis sunt quisquam odio nesciunt! Saepe aspernatur in ad itaque quasi vel voluptatem recusandae nemo rem uidem facilis.</p>
        <p>Aliquidorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo porro laborum non praesentium delectus ipsum, ullam necessitatibus assumenda voluptatem repellendus quis cumque nobis unde aliquam mollitia asperiores consequatur.</p>
        <a class="cta" href="index.html">Contact us »</a>
      </div>
      <div class="right-img">
        <img href="#" alt="photo"/>
      </div>
    </div>   
  </section> 
  <section class="four">
    <div class="container">
      <div class="member">
        <img src="./img/photo-3.jpg" alt="photo" />
        <h3>Margaret Hilda</h3>
        <p>Sitamet ipsum dolor consectetur adipisicing elit. Similique numquam aperiam commodi! Id, ipsam pariatur! Ex cupiditate officiis iste laboriosam quibusdam esse illo praesentium, nemo necessitatibus tempore.</p>
        <div class="social">
          <a title="LinkedIn" href="index.html"><img src="./img/linkedin.png" alt="linkedin"/></a>
          <a title="Facebook" href="index.html"><img src="./img/facebook.png" alt="facebook"/></a>
          <a title="Instagram" href="index.html"><img src="./img/instagram.png" alt="instagram"/></a>
        </div>
      </div>  
      <div class="member">
        <img src="./img/photo-4.jpg" alt="photo"/>
        <h3>Justin Trudeau</h3>
        <p>Lpsum dolor sit amet consectetur adipisicing elit. Similique numquam aperiam commodi! Id, ipsam pariatur! Ex cupiditate officiis iste laboriosam quibusdam esse illo praesentium.</p>
        <div class="social">
          <a title="LinkedIn" href="index.html"><img src="./img/linkedin.png" alt="linkedin"/></a>
          <a title="Instagram" href="index.html"><img src="./img/instagram.png" alt="instagram"/></a>
          <a title="Medium" href="index.html"><img src="./img/medium.png" alt="medium"/></a>
        </div> 
      </div>  
      <div class="member">
        <img src="./img/photo-5.jpg" alt="photo"/>
        <h3>Yoweri Museveni</h3>
        <p>Consectetur upsum dolor sit amet adipisicing elit. Similique numquam aperiam commodi! Id ipsam pariatur! Ex cupiditate officiis iste laboriosam quibusdam esse illo praesentium, nemo necessitatibus tempore. Cupiditate officiis iste laboriosam.</p>
        <div class="social">
          <a title="LinkedIn" href="index.html"><img src="./img/linkedin.png" alt="linkedin"/></a>
          <a title="Facebook" href="index.html"><img src="./img/facebook.png" alt="facebook"/></a>
          <a title="Medium" href="index.html"><img src="./img/medium.png" alt="medium"/></a>
        </div> 
      </div> 
    </div>    
  </section>  
  <section class="five">
    <div class="container">
      <div class="video-wrapper">
        <video width="560" height="315" controls>
          <source src="./img/video.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>      
    </div>    
  </section>  
  <section class="six">
    <div class="container">
      <h4>Taborum modi fugiat rem aliquid quod</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laboriosam laborum modi fugiat rem aliquid quod? Non, laudantium, aperiam deserunt sequi harum mollitia sapiente magnam rem expedita voluptas necessitatibus quam!</p>
      <img src="./img/photo-6.jpg" alt="let's get started"/>
      <p><i>Magnam reprehenderit sequi provident minima! Molestiae eum repudiandae dolorem sapiente, expedita debitis corrupti quia! Suscipit, officia. Tenetur perspiciatis totam debitis maxime nam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</i></p>
      <a class="cta" href="index.html">Contact us »</a>
    </div>
  </section>

      <Footer></Footer>
        </>
  )
}

export default About