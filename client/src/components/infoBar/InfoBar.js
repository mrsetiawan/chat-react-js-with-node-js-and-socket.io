import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'
import './infoBar.css'

function InfoBar({ _room }) {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img src={onlineIcon} className='onlineIcon' alt="on image"/>
        <h3>{_room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href="/">
          <img src={closeIcon} alt="of image"/>
        </a>
      </div>
    </div>
  )
}

export default InfoBar
