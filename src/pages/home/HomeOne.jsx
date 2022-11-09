import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { LayoutOne } from '../../layouts/LayoutOne'

export const HomeOne = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Page d'acceuil - {process.env.REACT_APP_SITENAME }</title>
        <meta name="description" content="Acceuil"/>
      </Helmet>
      <LayoutOne>
            {/* Notre main ici */}
      </LayoutOne>
    </Fragment>
  )
}
