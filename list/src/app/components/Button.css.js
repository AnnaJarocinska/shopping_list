import styled from 'styled-components';

const Button = styled.button`
font-family: 'MuseoModerno', cursive;
text-transform: uppercase;
font-size:36px;  
border: none;
padding: 10px 44px;
font-size: 36px;
position: relative;
&::before {
    transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    content: '';
    width: 50%;
    height: 100%;
    background: ${props => props.theme.colors.blue.basket};
    position: absolute;
    top: 0;
    left: 0;
}

&:hover {
    &::before {
        background: ${props => props.theme.colors.blue.basket};
        width: 100%;
    }
}




`






// font-family: 'MuseoModerno', cursive;
// text-transform: uppercase;
// display:block;
// margin: 50px auto;

//     letter-spacing: .02rem;
//     cursor: pointer;
//     background: transparent;
//     border: .5rem solid #fff;
//     padding: 1rem 2rem;
//     font-size: 2.2rem;
//     color: #fff;
//     position: relative;
    
//     &:hover{
        
//     }
   
 
//   }


// display:block;
// margin: 10px auto;
// font-size: 1.5rem;
//   padding: 1rem 3rem;
//   background: transparent;
//   text-transform: uppercase;
//   color: rgb(255,255,255);
//   font-family: 'MuseoModerno', cursive;
// text-decoration: none;


// border: 1px solid rgb(146, 148, 248);
// position: relative;
// overflow: hidden;
// &:hover{
//      box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4)}
// &:before {
//         content: "";
//         position: absolute;
//         top: 0;
//         left: -100%;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(
//           120deg,
//           transparent,
//           rgba(146, 148, 248, 0.4),
//           transparent
//         );
//         transition: all 650ms;
//       }
// &:hover:before {
//         left: 100%;
//       }

export default Button;