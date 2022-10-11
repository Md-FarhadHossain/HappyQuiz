import React from 'react'
import './BlogContent.css'

const BlogContent = ({title,description}) => {
  return (
    <div className='blog__content'>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default BlogContent