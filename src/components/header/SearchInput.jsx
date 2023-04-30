import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchInput = props => {
  return (
    <div className='search-box'>
            <div className='search-container'>
                <input className='input-search' type="text" name="" placeholder="Rechercher ici" />
                <button  >
                <AiOutlineSearch/>
                </button>
            </div>
    </div>
  )
}

SearchInput.propTypes = {}

export default SearchInput