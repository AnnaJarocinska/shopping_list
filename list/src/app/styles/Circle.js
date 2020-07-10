import styled from 'styled-components';
import { motion } from "framer-motion";

const Circle = styled(motion.div)`
position: relative;
width: 140px;
height: 140px;
border: transparent;
border-radius: 50%;
transform: rotate(0deg);
transition: transform 0.7s linear;
margin: 0 auto;
`
export default Circle;

