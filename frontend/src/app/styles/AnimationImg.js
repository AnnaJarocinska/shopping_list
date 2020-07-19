import styled, {css} from 'styled-components';
import { motion } from "framer-motion";

const AniamationImg = styled(motion.img)`
position: absolute;
width: 80px;
height: 80px;
${({ bananas }) => bananas && css`
top: -40px;
left: 30px; 
`}
${({ salad }) => salad && css`
top: 40px;
left: -30px; 
`}
${({ cherry }) => cherry && css`
bottom: -40px;
right: 30px; 
`}
${({ basket }) => basket && css`
bottom: 40px;
right: -30px; 
`}
`
export default AniamationImg;
