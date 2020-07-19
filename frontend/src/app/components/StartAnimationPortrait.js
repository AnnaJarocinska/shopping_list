import React from 'react';
import bananas from '../images/bananas_S.png';
import salad from '../images/salad_S.png';
import cherry from '../images/cherry_S.png';
import basket from '../images/basket_S.png';
import Container from '../styles/Container';
import Circle from '../styles/Circle';
import AniamationImg from '../styles/AnimationImg';

const StartAnimationPortrait = () => {
    return (
        <Container animation>
            <Circle
            animate={{ rotate: 760}}
            transition={{
                duration:50,
                yoyo: Infinity,
            }}>
                <AniamationImg bananas
                src={bananas}
                animate={{ rotate: -760}}
                transition={{
                    duration:50,
                    yoyo: Infinity,
                }}/>
                <AniamationImg salad
                src={salad}
                animate={{ rotate: -760}}
                transition={{
                    duration:50,
                    yoyo: Infinity,
                }}/>
                  <AniamationImg cherry
                src={cherry}
                animate={{ rotate: -720}}
                transition={{
                    duration:50,
                    yoyo: Infinity,
                }}/>
                  <AniamationImg basket
                src={basket}
                animate={{ rotate: -720}}
                transition={{
                    duration:50,
                    yoyo: Infinity,
                }}/>
            </Circle>
        </Container>
    );
}

export default StartAnimationPortrait;