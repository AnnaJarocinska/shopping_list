import React from 'react';
import { motion } from 'framer-motion';
import bananas from '../images/bananas_S.png';
import salad from '../images/salad_S.png';
import cherry from '../images/cherry_S.png';
import basket from '../images/basket_S.png';
import AnimationContainer from './StartAnimation.css';
import ImgContainer from './ImgContainer.css';

const StartAnimation = () => {
    return (
        <AnimationContainer>
            <ImgContainer>
                <motion.img
                src={bananas}
                animate={{ y: [ -30, 0,] }}
                transition={{
                    delay: 1.5,
                    ease: "linear", 
                    duration:1.5,
                    yoyo: Infinity
                }}/>
            </ImgContainer>
            <ImgContainer>
              <motion.img
                src={salad}
                animate={{ y: [ -30, 0,] }}
                transition={{
                    delay: 1,
                    ease: "linear", 
                    duration: 1.5,
                    yoyo: Infinity
                }}/>
            </ImgContainer>
            <ImgContainer>
                <motion.img
                src={cherry}
                animate={{ y: [ -30, 0,] }}
                transition={{
                    delay: 0.5,
                    ease: "linear", 
                    duration:1.5,
                    yoyo: Infinity
                }}/>  
            </ImgContainer>
            <ImgContainer>
                <motion.img
                src={basket}
                animate={{ y: [ -30, 0,] }}
                transition={{
                    ease: "linear", 
                    duration:1.5,
                    yoyo: Infinity
                }}/>    
            </ImgContainer>    
        </AnimationContainer>
    );
}

export default StartAnimation;