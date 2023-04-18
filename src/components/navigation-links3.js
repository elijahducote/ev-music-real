import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links3.css'

const NavigationLinks3 = (props) => {
  return (
    <nav className={`navigation-links3-nav ${props.rootClassName} `}>
      <span className="navigation-links3-text">{props.text5}</span>
      <div
        data-thq="thq-dropdown"
        className="navigation-links3-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links3-dropdown-toggle"
        >
          <span className="navigation-links3-text1">Albums</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links3-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links3-icon">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="navigation-links3-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle1"
            >
              <span className="navigation-links3-text2">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle2"
            >
              <span className="navigation-links3-text3">Sub-menu Item</span>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle3"
            >
              <span className="navigation-links3-text4">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <span font-size="1rem" className="navigation-links3-text5">
        {props.text21}
      </span>
      <span font-size="1rem" className="navigation-links3-text6">
        {props.text31}
      </span>
      <span font-size="1rem" className="navigation-links3-text7">
        {props.text41}
      </span>
    </nav>
  )
}

NavigationLinks3.defaultProps = {
  text2: 'Pricing',
  text21: 'DJ Ev',
  text41: 'Listen',
  rootClassName: '',
  text31: 'Merch',
  text: 'About',
  text1: 'Features',
  text3: 'Team',
  text4: 'Blog',
  text5: 'Home',
}

NavigationLinks3.propTypes = {
  text2: PropTypes.string,
  text21: PropTypes.string,
  text41: PropTypes.string,
  rootClassName: PropTypes.string,
  text31: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
}

export default NavigationLinks3
