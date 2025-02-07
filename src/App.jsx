import { useState } from 'react';
import './index.css';
import ProgressBar from './components/ProgressBar';
import FlashCard from './components/FlashCard';
import flashcardDB from '../flashcards.json'
import Description from './components/Description';

function App() {
  // get our max num of flashcards from our json file
  const maxFlashCards = flashcardDB.flashcards.length;
  // get a use state for our current index
  const [currentIndex, setCurrentIndex] = useState(0);
  // get a use state for our current progress %
  const [progress, setProgress] = useState(Math.round(((currentIndex+1)/maxFlashCards)*100));

  // just checking that the json is hooked up correctly
  // console.log(flashcardDB.flashcards[1].question)

  // our functions using callback functions from our flashcard component to increase/decrease index
  const increaseIndex = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex >= (maxFlashCards-1) ? prevIndex : prevIndex + 1;
      updateProgressBar(newIndex);
      return newIndex;
    });
  };

  const decreaseIndex = () => {
    console.log('clicked decrease');
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex > 0 ? prevIndex - 1 : prevIndex);
      updateProgressBar(newIndex);
      return newIndex;
    });
    updateProgressBar();
  }

  const updateProgressBar = (newIndex) => {
    setProgress(Math.round(((newIndex + 1) / maxFlashCards) * 100));
  };

  return (
    <>
      {/* the wrap, was planning to move to it's own component but honestly not necessary */}
      <section className='max-w-sm mx-auto mt-1'>
        {/* the container that holds the progress bar and flash card together */}
        <div className='flex flex-col relative mt-5'>
          {/* the title */}
          <h1 className='font-bold mb-2'>Flash Cards, Made With React</h1>
          {/* the progress bar */}
          <ProgressBar progress={progress} maxFlashCards={maxFlashCards} currentFlashCard={(currentIndex+1)}/>
          {/* the flashcard */}
          <FlashCard 
            question={flashcardDB.flashcards[currentIndex].question} answer={flashcardDB.flashcards[currentIndex].answer}
            onNext={increaseIndex}
            onPrevious={decreaseIndex}
          />
          <Description />
        </div>

      </section>
    </>
  )
}

export default App
