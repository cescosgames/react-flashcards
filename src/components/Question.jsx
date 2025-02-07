import React, { useState } from 'react'

// DEFUNCT
// THIS WAS A BAD IDEA, BECAUSE THE USE STATE WOULD BE MODIFIED BY THE PARENT
// KEEPING THIS ONLY FOR POSTERITY, AND TO SERVE AS A LESSON

const Question = ({ question }) => {

    const [showQuestion, setShowQuestion] = useState(false);

    // let question = json source

    return (
        <div>{question}</div>
    )
}

export default Question