import React from 'react'
import {FiFigma} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaCodepen} from 'react-icons/fa'
const Social = () => {
  return (
    <div className='social'>
    <a href="https://www.linkedin.com/in/arijit-patra-a96025211/" target="_blank"  rel="noreferrer"><BsLinkedin/></a>
    <a href="https://github.com/ArijitPatra2906" target="_blank"  rel="noreferrer"><FaGithub/></a>
    <a href="https://www.figma.com/files/user/1076730249055402817?fuid=1076730249055402817" target="_blank"  rel="noreferrer"><FiFigma/></a>
    <a href="https://codepen.io/arijitpatracp" target="_blank"  rel="noreferrer"><FaCodepen/></a>

    </div>
  )
}

export default Social