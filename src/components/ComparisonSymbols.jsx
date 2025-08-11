import React, { useState } from 'react';

// Assets Imports
import FlexiTeacher from '../assets/All Flexi Poses/PNG/Flexi_Teacher.png';
import FlexiPoint from '../assets/All Flexi Poses/PNG/Flexi_Point.png';
import FlexiThumbsUp from '../assets/All Flexi Poses/PNG/Flexi_ThumbsUp.png';
import FlexiStars from '../assets/All Flexi Poses/PNG/Flexi_Stars.png';
import FlexiExcited from '../assets/All Flexi Poses/PNG/Flexi_Excited.png';
import FlexiTelescope from '../assets/All Flexi Poses/PNG/Flexi_Telescope.png';

// UI Components Imports
import { Container } from './ui/reused-ui/Container.jsx'
import { FlexiText } from './ui/reused-ui/FlexiText.jsx'
import { GlowButton } from './ui/reused-ui/GlowButton.jsx'
import { MultiGlowButton } from './ui/reused-ui/MultiGlowButton.jsx'
import Alligator from './Alligator.jsx';

// UI Animation Imports
import './ui/reused-animations/fade.css';
import './ui/reused-animations/scale.css';
import './ui/reused-animations/glow.css';
import './Alligator.css';

const ComparisonSymbols = () => {
        const [animate, setAnimate] = useState(false);
        const [sadigator, setSadigator] = useState(true);
        
        return (
                <Container 
                        text="Comparison Symbol Practice" 
                        showResetButton={false}
                        borderColor="#FF7B00"
                >
                        <div className='text-center text-sm text-gray-500 p-5'>
                                Comparison Alligator is hungry! Click the side with more apples to feed him. If you click the side with less apples, he will be sad.
                        </div>

                        {/* Alligator */}
                        <Alligator animate={animate} sadigator={sadigator} />
                        
                </Container>
        )
};


export default ComparisonSymbols;