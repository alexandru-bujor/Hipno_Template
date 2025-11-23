import React from 'react'
import Counter from './Counter'

const WhatWeDo = () => {
  const counters = [
    { number: 200, suffix: 'k', label: 'satisfied clients' },
    { number: 97, suffix: '%', label: 'client satisfaction' },
    { number: 500, suffix: '+', label: 'certified therapists' },
    { number: 899, suffix: '+', label: 'treatment programs' }
  ]

  return (
    <div className="what-we-do">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">ce facem</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Împuternicirea schimbării prin sprijin terapeutic
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Section Title Content */}
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
              <p>
                Oferim o gamă de servicii terapeutice concepute pentru a împuternici persoanele în
                călătoria lor către bunăstare mentală. Prin consultanță personalizată și ritualuri tradiționale.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Intro Video Box */}
            <div className="intro-video-box">
              <div className="intro-bg-video">
                <video autoPlay muted loop id="myVideo">
                  <source
                    src="https://demo.awaikenthemes.com/assets/videos/intro-bg-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Video Play Button */}
              <div className="video-play-button">
                <a
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                >
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>

              {/* Intro Video Counter */}
              <div className="intro-video-counter">
                {counters.map((counter, index) => (
                  <div key={index} className="video-counter-item">
                    <h2>
                      <Counter value={counter.number} suffix={counter.suffix} />
                    </h2>
                    <p>{counter.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo

