import React from 'react'
import AnnonceItem from './AnnonceItem'

function AnnonceBig() {
  return (
    <div className="annonce-big">
        <div className="container">
            <AnnonceItem img="../images/favorites/a1.jpg" title="Les chaussures durables peuvent elles aider la planete ?"  text="Nous pensons que c'est un bon départ. Explore notre démarche pour soutenir les chaussures durables" button="nos pratiques durables"/>
        </div>
    </div>
  )
}

export default AnnonceBig