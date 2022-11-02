import React from 'react'
import  './style.css'

function Newsletter() {
  return (
    <div className="newsletter">
        <div className="container">

              <h5 className='title'>Vouliez vous les votre ?</h5>

              <p className='text-content'>inscris toi au newsletter et soit la première personne à t'informer sur les offres , les prodiuts et beaucoup de nouveautés .</p>

             <div className="form-container">

                <form action="" method="POST">              
                    <input type="text" placeholder="Entrer votre adresse email" required  className="input"/>
                    <button type="submit" className="btn-black">
                        S'INSCRIRE
                    </button>
                </form>

             </div>

             <p className="privacy-terms"> 
              
               <a class="text-link" href="#">
               Voir notre politique de confidentialité
              </a>

              </p>
            
            </div>

    </div>
  )
}

export default Newsletter