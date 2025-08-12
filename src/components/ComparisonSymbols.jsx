import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

// Hover detection system
function watchForHover() {
  // lastTouchTime is used for ignoring emulated mousemove events
  let lastTouchTime = 0

  function enableHover() {
    if (new Date() - lastTouchTime < 500) return
    document.body.classList.add('hasHover')
  }

  function disableHover() {
    document.body.classList.remove('hasHover')
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date()
  }

  document.addEventListener('touchstart', updateLastTouchTime, true)
  document.addEventListener('touchstart', disableHover, true)
  document.addEventListener('mousemove', enableHover, true)

  enableHover()
}

// Initialize hover detection
watchForHover()

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
import Apples from './Apples.jsx';

// UI Animation Imports
import './ui/reused-animations/fade.css';
import './ui/reused-animations/scale.css';
import './ui/reused-animations/glow.css';
import './Alligator.css';

const ComparisonSymbols = () => {
        const [animate, setAnimate] = useState(false);
        const [sadigator, setSadigator] = useState(false);
        const [alligatorDirection, setAlligatorDirection] = useState('right'); // 'left' or 'right'
        const [leftAppleCount, setLeftAppleCount] = useState(5);
        const [rightAppleCount, setRightAppleCount] = useState(9);
        const [isAnimating, setIsAnimating] = useState(false);
        const [showTryAgain, setShowTryAgain] = useState(false);
        const [showGreatJob, setShowGreatJob] = useState(false);
        const [wasCorrectAnswer, setWasCorrectAnswer] = useState(false);
        const [alligatorMoveDirection, setAlligatorMoveDirection] = useState(null); // 'left', 'right', or null
        const [fadeApples, setFadeApples] = useState(false); // Controls apple fade-out animation
        const [currentSuccessMessage, setCurrentSuccessMessage] = useState(''); // Store the current success message
        const [selectedSide, setSelectedSide] = useState(null); // Track which side was selected ('left', 'right', or null)
        
        // Set of good response messages
        const successMessages = [
                "Great Job! You're a comparison symbol master!",
                "Excellent! You know your greater than and less than!",
                "Fantastic! You're getting really good at this!",
                "Amazing! You found the side with more apples!",
                "Outstanding! You made the alligator very happy!",
                "Brilliant! You're mastering comparison symbols!",
                "Super! You chose the correct side!",
                "Wonderful! You're learning so well!",
                "Terrific! You're becoming a comparison expert!"
        ];
        
        // Function to get a random success message
        const getRandomSuccessMessage = () => {
                const randomIndex = Math.floor(Math.random() * successMessages.length);
                return successMessages[randomIndex];
        };
        
        // Function to trigger confetti animation
        const triggerConfetti = () => {
                confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                });
        };
        
        // Generate random apple counts on component mount
        useEffect(() => {
                generateRandomCounts();
        }, []);
        
        const generateRandomCounts = () => {
                let left, right;
                do {
                        left = Math.floor(Math.random() * 10) + 1; // 1-10 apples
                        right = Math.floor(Math.random() * 10) + 1; // 1-10 apples
                } while (left === right); // Ensure counts are never equal
                
                setLeftAppleCount(left);
                setRightAppleCount(right);
        };
        
        const handleAppleHover = (side) => {
                // Only change direction on hover if not animating and no movement is happening
                if (!isAnimating && !alligatorMoveDirection) {
                        setAlligatorDirection(side);
                }
        };
        
        const handleLeftClick = () => {
                if (isAnimating) return; // Prevent clicks during animation
                
                setIsAnimating(true);
                setSelectedSide('left'); // Mark left side as selected
                const isCorrectAnswer = leftAppleCount > rightAppleCount;
                
                if (isCorrectAnswer) {
                        setAnimate(true);
                        setSadigator(false);
                        setShowTryAgain(false); // Correct answer
                        setShowGreatJob(true);
                        setWasCorrectAnswer(true);
                        setAlligatorDirection('left'); // Face left when moving left - set this first
                        setAlligatorMoveDirection('left'); // Move towards left apples
                        setCurrentSuccessMessage(getRandomSuccessMessage()); // Set random success message
                        
                        // Trigger confetti animation
                        triggerConfetti();
                        
                        // Start apple fade-out when alligator reaches them (after movement animation)
                        setTimeout(() => {
                                setFadeApples(true);
                        }, 1000); // 1 second to match alligator movement duration
                } else {
                        setSadigator(true);
                        setAnimate(false);
                        setShowTryAgain(true); // Incorrect answer
                        setShowGreatJob(false);
                        setWasCorrectAnswer(false);
                }
                
                // Reset animation state after animation completes
                setTimeout(() => {
                        setIsAnimating(false);
                        setAnimate(false);
                        setSadigator(false);
                        setShowTryAgain(false);
                        setShowGreatJob(false);
                        setAlligatorMoveDirection(null);
                        setFadeApples(false);
                        setSelectedSide(null); // Deselect after animation ends
                        
                        // Regenerate random counts if the correct answer was clicked
                        if (isCorrectAnswer) {
                                generateRandomCounts();
                        }
                        setWasCorrectAnswer(false);
                }, 3000); // 3 seconds for animation
        };
        
        const handleRightClick = () => {
                if (isAnimating) return; // Prevent clicks during animation
                
                setIsAnimating(true);
                setSelectedSide('right'); // Mark right side as selected
                const isCorrectAnswer = rightAppleCount > leftAppleCount;
                
                if (isCorrectAnswer) {
                        setAnimate(true);
                        setSadigator(false);
                        setShowTryAgain(false); // Correct answer
                        setShowGreatJob(true);
                        setWasCorrectAnswer(true);
                        setAlligatorDirection('right'); // Face right when moving right - set this first
                        setAlligatorMoveDirection('right'); // Move towards right apples
                        setCurrentSuccessMessage(getRandomSuccessMessage()); // Set random success message
                        
                        // Trigger confetti animation
                        triggerConfetti();
                        
                        // Start apple fade-out when alligator reaches them (after movement animation)
                        setTimeout(() => {
                                setFadeApples(true);
                        }, 1000); // 1 second to match alligator movement duration
                } else {
                        setSadigator(true);
                        setAnimate(false);
                        setShowTryAgain(true); // Incorrect answer
                        setShowGreatJob(false);
                        setWasCorrectAnswer(false);
                }
                
                // Reset animation state after animation completes
                setTimeout(() => {
                        setIsAnimating(false);
                        setAnimate(false);
                        setSadigator(false);
                        setShowTryAgain(false);
                        setShowGreatJob(false);
                        setAlligatorMoveDirection(null);
                        setFadeApples(false);
                        setSelectedSide(null); // Deselect after animation ends
                        
                        // Regenerate random counts if the correct answer was clicked
                        if (isCorrectAnswer) {
                                generateRandomCounts();
                        }
                        setWasCorrectAnswer(false);
                }, 3000); // 3 seconds for animation
        };
        
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
                        <Alligator 
                                animate={animate} 
                                sadigator={sadigator} 
                                direction={alligatorDirection}
                                moveDirection={alligatorMoveDirection}
                        />
                        
                        {/* Apples */}
                        <div className='flex justify-between items-center m-2 mt-0 w-[full] h-[51%]'>
                                <Apples 
                                        count={leftAppleCount} 
                                        onClick={handleLeftClick} 
                                        onHover={() => handleAppleHover('left')}
                                        side="left"
                                        isAnimating={isAnimating}
                                        fadeOut={fadeApples && alligatorMoveDirection === 'left'}
                                        isSelected={selectedSide === 'left'}
                                />
                                <Apples 
                                        count={rightAppleCount} 
                                        onClick={handleRightClick} 
                                        onHover={() => handleAppleHover('right')}
                                        side="right"
                                        isAnimating={isAnimating}
                                        fadeOut={fadeApples && alligatorMoveDirection === 'right'}
                                        isSelected={selectedSide === 'right'}
                                />
                        </div>

                        <div className={`${showTryAgain || showGreatJob ? 'fade-in-up-animation' : 'fade-out-down-animation'} transition-opacity duration-200 w-full flex justify-center`}>
                                <div className='w-[75%] text-center text-sm p-5'>
                                        {showTryAgain && (
                                                <div className='bg-yellow-100 text-yellow-800 border-2 border-yellow-400 rounded-lg font-bold p-2 m-30'>
                                                        Try Again! Are you sure that side has more apples?
                                                </div>
                                        )}
                                        {showGreatJob && (
                                                <div className='bg-green-100 text-green-800 border-2 border-green-400 rounded-lg font-bold p-2 m-30'>
                                                        {currentSuccessMessage}
                                                </div>
                                        )}
                                </div>
                        </div>
                </Container>
        )
};


export default ComparisonSymbols;