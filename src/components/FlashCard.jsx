import React, { useState } from 'react';

const FlashCard = ({ question, answer, onNext, onPrevious}) => {

    const [showQuestion, setShowQuestion] = useState(false);

    return (
    <div className='border-2 border-gray-400 w-full mt-3 rounded-md p-2'>
        <div className="bg-gray-300 flex items-center justify-center p-1 rounded-md h-50">
            <h1 className='flex text-2xl w-full h-full p-1 justify-center items-center text-center'>
                { !showQuestion ? `${question}` : `${answer}` }
            </h1>
        </div>
        <div className="bg-gray-300 flex rounded-md mt-1 py-2 px-1 justify-between items-center">
            {/* our previous click button */}
            <button 
            className='text-sm cursor-pointer flex gap-1 items-center text-center transition-all hover:text-gray-500'
            onClick={() => {
                onPrevious();
                { showQuestion ? setShowQuestion((prevState) => !prevState) : ''};
                }
            }
            > 
                <p className='rotate-270'>&#9650;</p>
                Previous 
            </button>

            <button onClick={() => setShowQuestion((prevState) => !prevState)} 
            className='cursor-pointer absolute left-1/2 -translate-x-1/2 transition-all hover:text-gray-500'>
                { showQuestion ? 'Show Question' : 'Show Answer' }
            </button>

            {/* our next click button */}
            <button 
            className='text-sm cursor-pointer flex gap-1 items-center text-center transition-all hover:text-gray-500'
            onClick={() => {
                onNext();
                { showQuestion ? setShowQuestion((prevState) => !prevState) : ''};
                }
            }
            > 
                Next 
                <p className='rotate-90'>&#9650;</p> 
            </button>
        </div>
    </div>
    )
}

export default FlashCard