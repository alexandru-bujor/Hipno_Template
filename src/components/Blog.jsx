import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/assets'

const Blog = () => {
  const blogPosts = [
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_723363653.jpeg'),
      title: 'Construirea rezilienței: strategii de adaptare pentru provocările vieții',
      link: '/blog-single'
    },
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_1013238345.jpeg'),
      title: 'Explorarea conexiunii între sănătatea mentală și fizică',
      link: '/blog-single'
    },
    {
      image: getAssetPath('assets/images/hero-images/AdobeStock_1649580010.jpeg'),
      title: 'Îmbunătățirea stimei de sine și încrederii prin ritualuri',
      link: '/blog-single'
    }
  ]

  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title */}
            <div className="section-title">
              <h3 className="wow fadeInUp">ultimele articole</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Ghidare și perspective pentru călătoria ta către bunăstare
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            {/* Section Button */}
            <div className="section-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link to="/blog" className="btn-default">
                Vezi toate articolele
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                className="post-item wow fadeInUp"
                data-wow-delay={`${index * 0.2}s`}
              >
                {/* Post Featured Image */}
                <div className="post-featured-image">
                  <figure>
                    <Link to={post.link} className="image-anime" data-cursor-text="View">
                      <img src={post.image} alt={post.title} />
                    </Link>
                  </figure>
                </div>

                {/* Post Item Body */}
                <div className="post-item-body">
                  {/* Post Item Content */}
                  <div className="post-item-content">
                    <h3>
                      <Link to={post.link}>{post.title}</Link>
                    </h3>
                  </div>

                  {/* Post Item Readmore Button */}
                  <div className="post-item-btn">
                    <Link to={post.link} className="readmore-btn">
                      Citește mai mult
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog

