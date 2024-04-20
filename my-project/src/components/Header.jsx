import { useLocation } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { brainwave } from '../assets';
import { navigation } from '../constantss';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';
import { HamburgerMenu } from './design/Header';
import { useState } from 'react';

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if(openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    }
    else{
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const Handleclick = () => {
    if(!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  }
  
  return (
    <div className={`fixed w-full top-0 left-0 z-50 border-b border-n-6 lg:bg-n8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className='block w-[12rem] xl:mr-8' href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>
  
        <nav className={`${openNavigation ? 'flex' : 'hidden'}  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
              {navigation.map((item) => (<a className={`block relative font-code text-ss uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden': ''} px-6 py-6 md:py-4 lg:mg-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-12`} href={item.url} onClick={Handleclick} key={item.id}>{item.title}</a>))}
  
          </div>
          <HamburgerMenu />
        </nav>
        <a href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
          new account
        </a>
        <Button className="hidden lg:flex" href="#signin">sigin in</Button>
        <Button onClick={toggleNavigation} className='ml-auto lg:hidden font-xs px-3'><MenuSvg openNavigation={openNavigation}/></Button>
      </div>
    </div>
  );
};

export default Header