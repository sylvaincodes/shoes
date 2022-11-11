import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { LayoutOne } from '../../layouts/LayoutOne'
import HeroSliderOne from '../../wrappers/hero-slider/HeroSliderOne'
import { multilanguage } from 'redux-multilanguage'

const HomeOne = ({strings}) => {
  return (
    <Fragment>
      <Helmet>
        <title> {strings['home']} - {process.env.REACT_APP_SITENAME }</title>
        <meta name="description" content={strings['home']}/>
      </Helmet>
      <LayoutOne>

            {/* Notre main ici */}
            <HeroSliderOne/>


      </LayoutOne>
    </Fragment>
  )
}


export default multilanguage(HomeOne)