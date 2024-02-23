import React, { useState } from 'react'
import Close from '../assets/close.svg';
import { FaLink } from 'react-icons/fa';
const Portfolioitems = ({img,title,details}) => {
  
    const [modal,setmodal]=useState(false);

    const toggleModal=()=>{
        setmodal(!modal);
    }
  
    return (
    <div className='portfolio__item'>
      <img src={img} alt='' className='port__img' />

      <div className='portfolio__hover' onClick={toggleModal}>
        <h3 className='portfolio__title'>{title}</h3>
      </div>
      {modal && ( <div className='portfolio__modal'>
     <div className='modal-content' >
     <img src={Close} alt='none' className='img__close' onClick={toggleModal} />

         <h3 className='modal__title'>{title}</h3>

         <ul className='modal__list grid' >

            {details.map(({icon,title,desc},index)=>{
                
              if(index!==3) {
                if(title==='WebLink : '){
                   return( <li className='modal__item' key={index}>
                        <span className='item__icon'>{icon}</span>
                        <div>
                            <span className='item__title'>{title}</span>
                            <span className='item__details' ><a href={desc} target='_blank' rel='noreferrer noopener' className='website'>React-Quiz</a></span>
                        </div>
                    </li>
                   )
                }
                else{
                return(
                    <li className='modal__item' key={index}>
                        <span className='item__icon'>{icon}</span>
                        <div>
                            <span className='item__title'>{title}</span>
                            <span className='item__details' >{desc}</span>
                        </div>
                    </li>
                )
                }
            }
            else{
                return(
                    <li className='modal__item' key={index}>
                        <span className='item__icon'>{icon}</span>
                        <div>
                            <span className='item__title'>{title}</span>
                            <span className='item__details' ><a href={desc} target='_blank' rel='noreferrer noopener' className='website'><FaLink /></a></span>
                        </div>
                    </li>
                )
            }
            })

            }
         </ul>
         <img src={img} alt='' className='modal__img' />
     </div>
    
      </div>)}
    </div>
  )
}

export default Portfolioitems
