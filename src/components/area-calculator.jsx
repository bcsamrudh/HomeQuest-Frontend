'use client'
import 'src/app/globals.css';
import { motion } from "framer-motion";
import { useState } from 'react';

const DAMPING = 25;
const RESTDELTA = 0.5;
const RESTSPEED = 10;
const STIFFNESS = 500;

function AreaCalculator() {
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    const [pDisplay, setParaDisplay] = useState("");

    const maxSize = 400; //140
    const svgHeight = 150; //226
    const svgWidth = 500;   //252
    
    const area = width * height;

    const handleClick = (event) => { 
        event.preventDefault();
        setParaDisplay(area.toFixed(2));
    }

    return (
        <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
        <label className='text-2xl font-bold'>Property Area Calculator</label>
        <div className="pb-4">
            <div className='area-calculator'>
            <div className='area-form'>
                <form>
                    <label>Height: </label>
                    <input 
                        type="number" 
                        id="height" 
                        required
                        value={height}
                        onChange={(event) => setHeight(event.target.value)}
                    />

                    <label>Width: </label>
                    <input 
                        type="number" 
                        id="width" 
                        required
                        value={width}
                        onChange={(event) => setWidth(event.target.value)}
                    />
                    
                    <button onClick={ handleClick }>Show area</button>
                </form>
                <div className='area-display'>
                    <p>Area:</p>
                    <p id='area-value'>{ pDisplay }</p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Area
                    centreX={svgWidth / 2}
                    centreY={svgHeight / 2}
                    maxSize={maxSize}
                    //offset={offset}
                    height={height}
                    width={width}
                />
            </div>
            </div>
            </div>
        </div> 
        </div>
    )
}

function Area({ centreX, centreY, height, maxSize, width }) {
    const ratio = width / height;
    const actualHeight = ratio > 1 ? (1 / ratio) * maxSize : maxSize;
    const actualWidth = ratio < 1 ? ratio * maxSize : maxSize;
    
    return (
        <div>
            <svg>
                <motion.rect
                    id="area-fill"
                    stroke="none"
                    initial={false}
                    animate={{
                        x: centreX - actualWidth/2,
                        y: centreY - actualHeight/2,
                        width: actualWidth,
                        height: actualHeight,
                        transition: {
                            type: "spring",
                            stiffness: STIFFNESS,
                            damping: DAMPING,
                            restDelta: RESTDELTA,
                            restSpeed: RESTSPEED
                        }
                    }}
                    style={{
                        width: actualWidth,
                        height: actualHeight
                    }}
                ></motion.rect>
            </svg>
        </div>
    )
        
}

export default AreaCalculator;


/*
installs:
npm i framer-motion
*/