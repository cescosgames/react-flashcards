import React from 'react'

const ProgressBar = ({ progress, maxFlashCards, currentFlashCard }) => {
  return (
    <div className="w-full rounded-md h-8 relative border-2 border-gray-400 pr-1">
        <div 
            className="bg-gray-400 h-6 rounded-md transition-all ease-in-out m-0.5" 
            style={{ width: `${progress}%`}}>

            {/* the percent progress */}
            <div className="absolute text-xs h-full flex justify-center items-center text-center pb-1 transition-all" 
              style={{left: `calc(${progress}% - 0px)`, 
              transform: progress <= 79 ? 'translateX(25%)' : 'translateX(-225%)',
              whiteSpace: 'nowrap'
            }}>
              <span className=''>{`${progress}%`}</span>
            </div> 
            
            {/* the flashcard progress */}
            <div className="absolute text-xs h-full right-2 flex justify-center items-center text-center pb-1">
                <span>{`${currentFlashCard}/${maxFlashCards}`}</span>
            </div>
        </div>
    </div>
  )
}

export default ProgressBar