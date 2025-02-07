import React from 'react'

const Description = () => {
  return (
    <section className='mt-5 text-sm'>
        <p>
            This is a small flashcard component created in React, based on the Flash Cards project from roadmap.sh. It was built using 
            standard HTML, CSS, and JS alongside React, Vite, and TailwindCSS.
            <br />
            <br />
            <ul>
                <li>It features:</li>
                <li>1. Pre-defined flashcards with questions and answers</li>
                <li>2. Progress bar to show the user's progress</li>
                <li>3. Ability to view flashcards one at a time and flip to reveal the answer</li>
                <li>4. Simple navigation to cycle through the flashcards</li>
            </ul>
            <br />
            <br />
            The progress bar and flashcard are reusable components. The progress bar and questions are dynamically updated using useState(). The questions and answers
            are loaded from a local json file.
        </p>


    </section>
  )
}

export default Description