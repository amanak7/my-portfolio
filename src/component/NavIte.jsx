import React, { useState, useEffect } from 'react';

function NavItem({ onClick, icon, name, path }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if(scrollTop > 650&& scrollTop<2100){
      setIsScrolled('#about'); 
      }
      else if(scrollTop<=650){
        setIsScrolled('#');
      }
      else if(scrollTop>=2100&&scrollTop<2400){
        setIsScrolled('#Portfolio');
      }
      else{
        setIsScrolled('#Contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href={path} className={isScrolled===path?'nav__link scrolled' : 'nav__link'} onClick={onClick}>
      {icon}
      <h3 className='nav__name'>{name}</h3>
    </a>
  );
}

export default NavItem;
