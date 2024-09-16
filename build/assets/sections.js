const sections = [
    {
        title: "header",
        html: `<section id="header">
      <div class="header">
        <a href="./index.html" class="logo-brand-name">
          <img src="./assets/images/logo-without-name.svg" alt="logo" />
          <span>Logo</span>
        </a>
        <nav>
          <ul class="nav-ul">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./index.html#our-program">Our Program</a></li>
            <li><a href="./index.html#partners">Our Partners</a></li>
            <li><a href="./index.html#testimonials">Testimonials</a></li>
            <li><a href="./index.html#faq-container">FAQ</a></li>
          </ul>

        </nav>
        <div class="mobile-toggle">
          <img
            class="icon-menu"
            src="./assets/images/icon-menu.svg"
            alt="menu-toggle-icon"
          />
          <img
            class="icon-close-menu"
            src="./assets/images/icon-close-menu.svg"
            alt="menu-toggle-icon"
          />
        </div>
      </div>
    </section>`,
        image: "./assets/sections-screenshots/header.png",
    },
    
    {
        title: "hero",
        html: `<section id="hero">
      <div class="hero">
        <div id="hero-top" class="hero-top">
          <div id="hero-top-left" class="hero-top-left">
            <h1 id="hero-main-phrase" class="hero-main-phrase"></h1>
            <h2 id="hero-sub-phrase" class="hero-sub-phrase"></h2>
            <ul>
              <li id="get-started" class="get-started">
                <a href="./index.html#program-right">Get Started</a>
              </li>
              <li id="watch-guides" class="watch-guides">
                <a href="./error404.html">
                  <img
                    src="./assets/images/play-video-icon.svg"
                    alt="play-video-icon"
                  />
                  <span>Watch Guidelines</span>
                </a>
              </li>
            </ul>
          </div>
          <div id="hero-top-right" class="hero-top-right">
            <img id="hero-main-image" class="hero-main-image" src="" alt="" />
            <div id="students-stats" class="students-stats">
              <img src="./assets/images/people-vector.svg" alt="people-icon" />
              <p>
                <span id="statsNum" class="statsNum"></span>
                <br />
                <span id="statsTxt" class="statsTxt">Alumni Students</span>
              </p>
            </div>
            <div id="countries-to-study" class="countries-to-study">
              <img src="./assets/images/globe-vector.svg" alt="globe-icon" />
              <p>
                <span id="statsNum" class="statsNum"></span>
                <br />
                <span id="statsTxt" class="statsTxt"
                  >Countries To Study At</span
                >
              </p>
            </div>
            <div id="congratulations-stats" class="congratulations-stats">
              <img src="./assets/images/email-vector.svg" alt="email-icon" />
              <p>
                <span>Congratulations</span>
                <br />
                <span>Admission Letter</span>
              </p>
            </div>
          </div>
        </div>

        <div id="hero-bottom" class="hero-bottom"></div>
      </div>
    </section>`,
        image: "./assets/sections-screenshots/hero.png",
    },
    
    {
        title: "programs",
        html: `<section id="our-program">
      <div class="our-program">
        <div id="program-left" class="program-left">
          <div><h2>Our Programs</h2></div>
          <img src="" alt="" />
        </div>
        <div id="program-right" class="program-right">
          <div class="program-right-div-child"><p></p></div>
          <a href="./error404.html"></a>
        </div>
      </div>
    </section>`,
        image: "./assets/sections-screenshots/programs.png",
    },
    
    {
        title: "partners",
        html: `    <section id="partners">
      <div class="partners">
        <span id="partners-header-txt" class="partners-header-txt">
          <h2>Partner Universities</h2>
        </span>
      </div>
    </section>`,
        image: "./assets/sections-screenshots/partners.png",
    },
    
    {
        title: "testimonials",
        html: `    <section id="testimonials">
      <div class="testimonials">
        <h2>TESTIMONIALS</h2>
        <div class="testimonials-track">

        </div>
      </div>
      
      <div class="testimonials-indicators-div">
        <div class="t-indicators" id="t-indicators">
          
        </div>
      </div>

    </section>`,
        image: "./assets/sections-screenshots/testimonials.png",
    },
    
    {
        title: "faq",
        html: `<section id="faq-container">
      <div class="faq-container">
        <h2>FAQs</h2>
      </div>
    </section>`,
        image: "./assets/sections-screenshots/faq.png",
    },
    
    {
        title: "footer",
        html: `<section id="footer">
      <footer class="footer">
        <div class="newsletter-container">
          <div class="newsletter">
            <h2>Newsletter</h2>
            <form class="newsletter-form" method="">
              <input id="email" type="email" name="email" placeholder="Your email" required/>
              <span class="error-message" id="error-message">Please enter a valid email address.</span>
              <button type="submit"><img src="./assets/images/customised-send-btn-icon.svg" alt="action-icon"></button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <ul>
            <li>
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./index.html#our-program">Our Programs</a>
            </li>
            <li>
              <a href="./index.html#partners">Our Partners</a>
            </li>
            <li>
              <a href="./index.html#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="./index.html#faq-container">FAQ</a>
            </li>
          </ul>

          <div class="social-footer">
            <a class="fb-footer" href="./error404.html"><img src="./assets/images/facebook-icon.svg" alt="social-media-icon"></a>
            <a class="x-footer" href="./error404.html"><img src="./assets/images/twitter-icon.svg" alt="social-media-icon"></a>
            <a class="utube-footer" href="./error404.html"><img src="./assets/images/youtube-icon.svg" alt="social-media-icon"></a>
          </div>

          <p class="copyright-footer">© Copyright 2024 - Wivali</p>

        </div>
      </footer>
    </section>`,
        image: "./assets/sections-screenshots/footer.png",
    },
]