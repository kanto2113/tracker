import React, { useState } from 'react'

const XPTracker = () => {

    const [ xp, setxp ] = useState(50000)

    const [ gainedXP, setGainedXP ] = useState(0)


    const xpInputHandler = (e) => {
        setGainedXP(e.target.value)
    }
    console.log(gainedXP)

    return (

        <div>
            <input 
                type="number"
                placeholder='XP Gained'
                onChange={(e)=>{xpInputHandler(e)}}
                value={gainedXP}
            />
            <button>
                
            </button>
        </div>

    )
    
}

export default XPTracker