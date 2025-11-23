import React from 'react'
import PageHeader from '../components/PageHeader'
import Blog from '../components/Blog'

const BlogPage = () => {
  return (
    <>
      <PageHeader 
        title="Blog" 
        subtitle="Articole și resurse"
        backgroundImage="/assets/images/hero-images/AdobeStock_183593206.jpeg"
      />
      <Blog />
    </>
  )
}

export default BlogPage

