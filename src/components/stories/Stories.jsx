import React from 'react'
import StoryItem from './StoryItem'

function Stories() {
  return (


        <div className="stories">
            <div className="container">

                <h5 className='title-head'>Stories</h5>
                <ul className='story-list'>

                 <StoryItem title="Adidas Collaboration"  img="../images/favorites/s1.jpg" 
                text="Nous avions fait équipe avec Adidans pour réinvinter ce que pourrait être une chaussure ultralégère avec un mélange de matériaux durables" />
                  
                 <StoryItem title="Nouvelles marques"  img="../images/favorites/s2.jpg" 
                text="Nous avions sorti une nouvelle marque de chaussure plus légère pour un confort inébranlable." />
                  
                </ul>
            </div>
        </div>
  )
}

export default Stories