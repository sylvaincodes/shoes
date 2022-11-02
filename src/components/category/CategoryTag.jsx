import React from 'react'
import './style.css'

function CategoryTag() {
  return (
    <div className="category-tag">
        <div className="container">
            <ul className="category-tag-list">
                <li className='category-tag-item'>
                    <a href="#">
                        FEMMES
                    </a>
                </li><li className='category-tag-item'>
                    <a href="#">
                        HOMMES
                    </a>
                </li><li className='category-tag-item'>
                    <a href="#">
                        ENFANTS
                    </a>
                </li><li className='category-tag-item'>
                    <a href="#">
                        NOUVELLES
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CategoryTag