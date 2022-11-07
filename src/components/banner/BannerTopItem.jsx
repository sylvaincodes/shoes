import React from 'react'
import { Link } from 'react-router-dom'

export const BannerTopItem = ({ data }) => {
  return (
    <>
      <p className='banner-content white'>{data.title}
        <strong>
          <Link className='text-link white' to={data.link}> {data.title_link} </Link>
        </strong>
      </p>
    </>
  )
}
