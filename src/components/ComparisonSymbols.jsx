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

// UI Animation Imports
import './ui/reused-animations/fade.css';
import './ui/reused-animations/scale.css';
import './ui/reused-animations/glow.css';

const ComparisonSymbols = () => {
        // State Variables
        const [isAnimating, setIsAnimating] = useState(false);
        
        // Introduction -> Step 1 States
        const [removeIntroduction, setRemoveIntroduction] = useState(false);
        const [showIntroduction, setShowIntroduction] = useState(true);
        const [showComparisonSymbols, setShowComparisonSymbols] = useState(false);
        const [showStep1Flexi, setShowStep1Flexi] = useState(false);
        const [showStep1Button, setShowStep1Button] = useState(false);

        // Step 1 -> Step 2 States
        const [removeStep1UI, setRemoveStep1UI] = useState(true);
        const [removeStep1Button, setRemoveStep1Button] = useState(false);
        const [obscureLessThanSymbol, setObscureLessThanSymbol] = useState(false);
        const [showGreaterThanNumbers, setShowGreaterThanNumbers] = useState(false);
        const [showStep2Flexi, setShowStep2Flexi] = useState(false);
        const [showStep2Button, setShowStep2Button] = useState(false);

        // Step 2 -> Step 3 States
        const [removeStep2Flexi, setRemoveStep2Flexi] = useState(false);
        const [removeStep2Button, setRemoveStep2Button] = useState(false);
        const [obscureGreaterThanSymbol, setObscureGreaterThanSymbol] = useState(false);
        const [showLessThanNumbers, setShowLessThanNumbers] = useState(false);
        const [showStep3Flexi, setShowStep3Flexi] = useState(false);
        const [showStep3Button, setShowStep3Button] = useState(false);


        // tbd
        const [removeComparisonSymbols, setRemoveComparisonSymbols] = useState(true);

        // Functions
        // Reset Button
        const handleResetButtonClick = () => {
                console.log('Reset button clicked');
        }

        // Practice Button
        const handlePracticeButtonClick = () => {
                console.log('Practice button clicked');
        }

        // Begin Lesson Button
        const handleBeginLessonButtonClick = () => {
                setShowIntroduction(false);
                setTimeout(() => {
                        setRemoveIntroduction(true);
                        setRemoveComparisonSymbols(false);
                        setShowComparisonSymbols(true);
                        setTimeout(() => {
                                setRemoveStep1UI(false);
                                setShowStep1Flexi(true);
                                setTimeout(() => {
                                        setShowStep1Button(true);
                                }, 500);
                        }, 800);
                }, 500);
        }

        return (
                <Container text="Comparison Symbols" showResetButton={true} onReset={handleResetButtonClick} disableResetButton={isAnimating}>
                        {/* Introduction Step */}
                        {!removeIntroduction && (
                                <>
                                        <FlexiText className={`${showIntroduction ? '' : 'fade-out-up-animation'}`}>Welcome to the Comparison Symbols lesson! Click one of the buttons below to begin the lesson or practice solving comparison problems.</FlexiText>
                                        <MultiGlowButton
                                                buttons={[
                                                        { text: 'Begin Lesson', onClick: handleBeginLessonButtonClick },
                                                        { text: 'Practice', onClick: handlePracticeButtonClick },
                                                ]}
                                        />
                                </>
                        )}

                        {/* Comparison Symbols */}
                        {!removeComparisonSymbols && (
                                <div className={`${showComparisonSymbols ? 'fade-in-in-place-animation' : 'fade-out-up-animation'} w-[100%] h-[70%] flex flex-col items-center justify-center gap-10`}>
                                        <div className={`text-5xl font-bold text-[#5750E3]`}>
                                                {'<'}
                                        </div>
                                        <div className={`text-5xl font-bold text-[#5750E3]`}>
                                                {'>'}
                                        </div>
                                </div>
                        )}

                        {/* Step 1 Flexi */}
                        {!removeStep1UI && (
                                <>
                                        <FlexiText
                                                image={FlexiTeacher}
                                                className={`${showStep1Flexi ? 'fade-in-in-place-animation' : 'fade-out-up-animation'}`}
                                        >
                                                These are comparison symbols. They can be used to compare any two numbers.
                                        </FlexiText>
                                        <GlowButton
                                                onClick={null}
                                                className={`${showStep1Button ? 'grow-in-animation' : 'no-show-animation'}`}
                                        >
                                                Continue
                                        </GlowButton>
                                </>
                        )}

                </Container>
        )
};


export default ComparisonSymbols;