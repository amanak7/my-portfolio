import React from 'react'
import { personalInfo } from '../../src/data'

const Items = () => {
  return (
    <ul className='about__list'>
       {personalInfo.map(({title,description},index)=>
               {
                return(
                    <li className='about__data'>
                     <span>{title}</span><span>{description}</span>
                    </li>
                )
               } )}
    </ul>
  )
}

export default Items
