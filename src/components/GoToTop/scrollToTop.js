import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './scrollToTopStyles';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  if (typeof window !== "undefined") {
    window.addEventListener('scroll', toggleVisible);
  }
  
  
  return (
    <React.Fragment>
      {visible && (
        <Button>
       <FaArrowCircleUp onClick={scrollToTop} 
       style={{display: visible ? 'inline' : 'none'}} />
      </Button> 
      )}
    </React.Fragment>
  )
}
  
export default ScrollButton;