import React from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'
import RevealImage from './RevealImage'
import { getAssetPath } from '../utils/assets'

const AboutUs = () => {
  const customerImages = [
    getAssetPath('assets/images/hero-images/AdobeStock_183593206.jpeg'),
    getAssetPath('assets/images/hero-images/AdobeStock_267533248.jpeg'),
    getAssetPath('assets/images/hero-images/AdobeStock_638399430.jpeg'),
    getAssetPath('assets/images/hero-images/AdobeStock_723363653.jpeg')
  ]

  return (
    <div className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Us Images */}
            <div className="about-us-images">
              {/* About Image 1 */}
              <div className="about-img-1">
                <figure className="image-anime">
                  <img
                    src={getAssetPath('assets/images/hero-images/AdobeStock_1013238345.jpeg')}
                    alt="About Us"
                  />
                </figure>
              </div>

              {/* About Image 2 */}
              <div className="about-img-2">
                <figure className="image-anime">
                  <img
                    src={getAssetPath('assets/images/hero-images/AdobeStock_1649580010.jpeg')}
                    alt="About Us"
                  />
                </figure>
              </div>

              {/* About Customer Box */}
              <div className="about-customer-box">
                <div className="about-customer-rating">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <div className="about-customer-content">
                  <p>
                    Customer Review <Counter value={30000} />
                  </p>
                </div>
                <div className="customer-images">
                  {customerImages.map((img, index) => (
                    <div key={index} className="customer-img">
                      <RevealImage>
                        <figure className="image-anime">
                          <img src={img} alt={`Customer ${index + 1}`} />
                        </figure>
                      </RevealImage>
                    </div>
                  ))}
                  <div className="customer-img add-more">
                    <p>
                      <Counter value={30} suffix="k" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            {/* About Us Content */}
            <div className="about-us-content">
              {/* Section Title */}
              <div className="section-title">
                <h3 className="wow fadeInUp">despre noi</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Ghidăm mințile, vindecăm inimile, găsim pacea
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  În centrul nostru de terapie și consultanță, suntem dedicați să ghidăm
                  persoanele pe o călătorie către pacea interioară și reziliență.
                </p>
              </div>

              {/* About Vision Mission */}
              <div className="about-vision-mission">
                {/* Vision Mission Content */}
                <div className="vision-mission-content wow fadeInUp" data-wow-delay="0.4s">
                  <h3>viziunea noastră</h3>
                  <p>
                    Viziunea noastră este să creăm o lume în care bunăstarea mentală este accesibilă,
                    fără stigmatizare și împuternicitoare, permițând persoanelor să ducă o viață plină de sens.
                  </p>
                </div>

                {/* Vision Mission Content */}
                <div className="vision-mission-content wow fadeInUp" data-wow-delay="0.4s">
                  <h3>misiunea noastră</h3>
                  <ul>
                    <li>Oferim Îngrijire Cu Compasiune</li>
                    <li>Promovăm Bunăstarea Mentală</li>
                    <li>Încurajăm Vindecarea Pe Viață</li>
                  </ul>
                </div>
              </div>

              {/* About Us Content Button */}
              <div className="about-us-content-btn wow fadeInUp" data-wow-delay="0.6s">
                <Link to="/consultatie" className="btn-default">
                  Află mai multe
                </Link>
                <Link to="/contacte" className="btn-default btn-highlighted">
                  Contactează-ne
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

