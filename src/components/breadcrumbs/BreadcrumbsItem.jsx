import React from 'react'
import { Link } from 'react-router-dom'

const BreadcrumbsItem = (props) => {
  return (
    <div className="breadcrumb-item">
        <div className="container">
            <div className="wrapper">
                <h6> <Link  to={ props.link }>
                
                { props.title}
                 
                </Link> 
                </h6> 
                <span>/</span>
                <span> { props.subtitle}</span>
            </div>
        </div>
    </div>
  )
}

export default BreadcrumbsItem