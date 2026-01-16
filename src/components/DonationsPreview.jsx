import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const DonationsPreview = () => {
    const { t } = useLanguage()

    return (
        <div
            id="donations"
            className="cta-section"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cta-box cta-box-no-image">
                            <div className="cta-box-content">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                                        {t('donations.heading')}
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s">
                                        {t('donations.description')}
                                    </p>
                                </div>
                                <div className="cta-box-btn wow fadeInUp" data-wow-delay="0.4s" style={{ visibility: 'visible', display: 'block' }}>
                                    <Link
                                        to="/donations"
                                        className="btn-default"
                                        style={{
                                            backgroundColor: '#ffffff',
                                            color: '#2c3e50',
                                            padding: '18px 40px',
                                            borderRadius: '50px',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            textDecoration: 'none',
                                            display: 'inline-block',
                                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                                            transition: 'all 0.3s ease',
                                            border: 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#2c3e50';
                                            e.target.style.color = '#ffffff';
                                            e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                                            e.target.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = '#ffffff';
                                            e.target.style.color = '#2c3e50';
                                            e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                                            e.target.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {t('donations.donateButton')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonationsPreview