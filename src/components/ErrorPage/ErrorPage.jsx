import React from 'react'
import ErrorImage from '../../assets/image/404_page.jpg'
import './ErrorPage.css'
const ErrorPage = () => {
  return (
    <div>
        <img className='error__img' src={ErrorImage} alt="Error" />
    </div>
  )
}

export default ErrorPage