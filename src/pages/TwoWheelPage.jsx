import React from 'react'
import TwoWheelProducts from '../components/TwoWheelProducts'

const TwoWheelPage = ({darkMode , t}) => {
  return (
    <div>
      <TwoWheelProducts darkMode={darkMode} t={t}/>
    </div>
  )
}

export default TwoWheelPage
