import React from 'react'
import './portfolio.css';
import { portfolio } from '../../data';
import Portfolioitems from '../../component/portfolioitems';
const Portfolio = () => {
  return (
    <div id='Portfolio'>
       <h1 className='heading'>My </h1>
       <div className='projects'>

       {
        portfolio.map((item)=>{
          return <Portfolioitems key={item.id} {...item}/>
        })
       }
      
       </div> 
       </div>
  )
}

export default Portfolio
