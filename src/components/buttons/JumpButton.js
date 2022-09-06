import React, { useState } from 'react'
import { motion } from 'framer-motion'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// minX: '-100', maxX: `calc(${window.innerWidth}-100)`
function JumpButton() {
    const [x, setX] = useState(0)
    console.log({
        w: window.innerWidth,
        h: window.innerHeight
    })

    return (
        <div>
            <motion.button
            onClick={()=>{
                setX(getRandomInt(0,window.innerWidth-300))
            }}
            animate={{x, y: 0, transition: {type: 'spring'}}}
            className='border px-3 py-1 rounded-full'>Không</motion.button>
        </div>
    )
}

export default JumpButton