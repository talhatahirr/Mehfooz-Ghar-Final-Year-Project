import React from 'react'
import { Link } from 'react-router-dom'
const CTAButton = (props) => {
  return (
    <div className="mehfoozghar__header-content__input fs-24 mt-3 mx-6rem">
                    <Link to={props.link}>
                      <button type="button" className="secondary-clr cta">
                        {props.btntext}
                      </button>
                    </Link>
                  </div>
  )
}

export default CTAButton
