import React from 'react'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/shreyash-tripathi-1569a2274/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Shreyash-Tripathii" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/shreyashtripathi49" target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials