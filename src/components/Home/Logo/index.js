import { useEffect, useRef } from 'react';
import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import gsap from 'gsap';

const Logo = () => {
    // Create references to target elements
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
     const outerRing = useRef();
    const path2Ref = useRef();
    const innerRingPreCirc1 = useRef();
    const circ2OuterPath = useRef();
    const circle1Ref = useRef();
    const circle2Ref = useRef();
    
    gsap.config({trialWarn: false});
    useEffect(() => {
        

        console.log("hey betch", circle2Ref.current.getBoundingClientRect());

        
    if (circle1Ref.current && circle2Ref.current) {
        const anchorRect = circle2Ref.current.getBoundingClientRect();
        console.log("Anchor Rect:", anchorRect);
    } else {
        console.error("Refs are not ready yet.");
    }

            gsap.set(circle1Ref.current, {
    transformOrigin: `712.54px 599.76px`,
});
        
            // Register the GSAP plugin
            gsap.registerPlugin(DrawSVGPlugin);

            // Fade-in background
            gsap.to(bgRef.current, {
                duration: 1,
                opacity: 1,
            });

            // Animate all elements simultaneously
            gsap.fromTo(
                outlineLogoRef.current,
                { drawSVG: "0%" },
                { drawSVG: "100%", duration: 5 }
            );

            gsap.fromTo(
                outerRing.current,
                { drawSVG: "0%" },
                { drawSVG: "100%", duration: 5 }
            );

            gsap.fromTo(
                path2Ref.current,
                { drawSVG: "0%" },
                { drawSVG: "100%", duration: 5 }
            );

            gsap.fromTo(
                circle1Ref.current,
                { drawSVG: "0%" },
                {
                    drawSVG: "100%", duration: 4,
                    rotate: 360,
                    ease: "elastic.inOut(0.4, 0.5)",
                    yoyo: true,


                }
            );

            gsap.fromTo(
                innerRingPreCirc1.current,
                { drawSVG: "0%" },
                { drawSVG: "100%", duration: 5 }
            );

            gsap.fromTo(
                circ2OuterPath.current,
                { drawSVG: "0%" },
                { drawSVG: "100%", duration: 5 }
            );

            gsap.fromTo(
                circle2Ref.current,
                { drawSVG: "0%" },
                { drawSVG: "100%", duration: 5 }
            )
        }
, []); // Run only once after initial render
    return (
        <div className='logo-container' ref={bgRef}>
            <img
                ref={solidLogoRef}
                className='solid-logo'
                src={LogoS} alt="S"
            />
            
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 537.17 535.31">                         
                
                <g>
                        
                    {/* <path
                        ref={outlineLogoRef}
                        d="M268.58,189.32a78.34,78.34,0,1,0,78.34,78.33A78.33,78.33,0,0,0,268.58,189.32Zm0,155.4a77.07,77.07,0,1,1,77.07-77.07A77.07,77.07,0,0,1,268.58,344.72Z"
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                    /> */}
                    <path
                        ref={outerRing}
                        d="M268.58,28.87c-132.79,0-240.44,107.27-240.44,239.61S135.79,508.09,268.58,508.09,509,400.81,509,268.48,401.38,28.87,268.58,28.87Zm0,477.31c-131.74,0-238.53-106.42-238.53-237.7S136.84,30.77,268.58,30.77,507.12,137.19,507.12,268.48,400.32,506.18,268.58,506.18Z"
                        stroke="black"
                        strokeWidth="9"
                        fill="none"
                    />
                    <path
                        ref={path2Ref}
                        d="M268.58,71C160,71,71.93,159.05,71.93,267.65s88,196.66,196.65,196.66,196.65-88.05,196.65-196.66S377.19,71,268.58,71Zm0,390.16c-106.87,0-193.51-86.63-193.51-193.51S161.71,74.14,268.58,74.14s193.51,86.64,193.51,193.51S375.46,461.16,268.58,461.16Z"
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                    />
                    <path
                        ref={innerRingPreCirc1}
                        d="M268.58,71C160,71,71.93,159.05,71.93,267.65s88,196.66,196.65,196.66,196.65-88.05,196.65-196.66S377.19,71,268.58,71Zm0,390.16c-106.87,0-193.51-86.63-193.51-193.51S161.71,74.14,268.58,74.14s193.51,86.64,193.51,193.51S375.46,461.16,268.58,461.16Z"
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                    />
                    
                <path
                        ref={circle1Ref}
                        d="
                                M 206.41,146.26
                                A 16.16,16.16 0 1,0 174.09,146.26
                                A 16.16,16.16 0 1,0 206.41,146.26
                            "
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                    />
                <path
                        ref={circ2OuterPath}
                        d="M268.58,189.32a78.34,78.34,0,1,0,78.34,78.33A78.33,78.33,0,0,0,268.58,189.32Zm0,155.4a77.07,77.07,0,1,1,77.07-77.07A77.07,77.07,0,0,1,268.58,344.72Z"
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                    />
                <path
                        ref={circle2Ref}
                        d="
                            M 329.72,268.48
                            A 61.14,61.14 0 1,0 207.44,268.48
                            A 61.14,61.14 0 1,0 329.72,268.48
                        "
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                    />
                </g>
            </svg>

        </div>
    );
};

export default Logo;
