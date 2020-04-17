import React, { useState } from 'react'

const XPTracker = () => {

    const [ xp, setxp ] = useState(50000)

    const [ gainedXP, setGainedXP ] = useState(0)


    const xpInputHandler = (e) => {
        setGainedXP(e.target.value)
    }

    const xpMathHandler = () => {
        setxp(parseInt(xp) + parseInt(gainedXP))
        setGainedXP(0)
    }


    console.log('xp', xp)

    return (

        <div className='xpTracker'>

            <input 
                type="number"
                placeholder='XP Gained'
                onChange={(e)=>{xpInputHandler(e)}}
                value={gainedXP}
            />
            <button
                onClick={xpMathHandler}
            >
                Add XP
            </button>
            {xp}
        </div>

    )
    
}

export default XPTracker