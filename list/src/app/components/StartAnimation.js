import React from 'react';
import { motion } from 'framer-motion';
import bananas from '../images/bananas_S.png';
import salad from '../images/salad_S.png';
import cherry from '../images/cherry_S.png';
import basket from '../images/basket_S.png';
import Container from '../styles/Container';

const StartAnimation = () => {
    return (
        <Container animation>
            <Container img>
                <motion.img
                src={bananas}
                animate={{ y: [ -30, 0,] }}
                transition={{
                    delay: 1.5,
                    ease: "linear", 
                    duration:1.5,
                    yoyo: Infinity
                }}/>
            </Container>
            <Container img>
              <motion.img
                src={salad}
                animate={{ y: [ -30, 0,] }}
                transition={{
                    delay: 1,
                    ease: "linear", 
                    duration: 1.5,
                    yoyo: Infinity
                }}/>
            </Container>
            <Container img>
                <motion.img
                src={cherry}
                animate={{ y: [ -30, 0,] }}
                transition={{
                    delay: 0.5,
                    ease: "linear", 
                    duration:1.5,
                    yoyo: Infinity
                }}/>  
            </Container>
            <Container img>
                <motion.img
                src={basket}
                animate={{ y: [ -30, 0,] }}
                transition={{
                    ease: "linear", 
                    duration:1.5,
                    yoyo: Infinity
                }}/>    
            </Container>    
        </Container>
    );
}

export default StartAnimation;