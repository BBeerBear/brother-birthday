import Confetti from 'react-confetti';
import ReactPlayer from 'react-player/youtube';
import labicake from './assets/labicake.png';

function App() {
  return (
    <div className='relative bg-white/25 w-screen h-screen p-2 flex flex-col items-center justify-center gap-5 overflow-hidden'>
      <div className='font-dancing text-6xl tracking-wider text-pink-400 hover:text-7xl duration-1000 z-50 w-fit '>
        Happy Birthday!
      </div>
      <div className='font-zcool text-6xl tracking-wider text-sky-400 hover:text-7xl duration-1000 z-50 w-fit'>
        🎉祝熊玉琛生日快樂！🎁
      </div>

      <div className='relative bg-mytv bg-cover h-80 w-96 shadow-lg hover:scale-105 duration-1000'>
        {/* // Only loads the YouTube player */}
        <div
          className='absolute inset-0' // Full width and height of parent
          style={{
            objectFit: 'cover', // Resize to fill parent
            objectPosition: 'center center', // Center the video
            // Adjust these values to fit the transparent area in the TV
            top: '10%', // Move down
            left: '10%', // Move right
            width: '80%', // Adjust width
            height: '70%', // Adjust height
          }}
        >
          <ReactPlayer
            url='https://www.youtube.com/watch?v=ZEyXRST5XdM'
            loop={true}
            width={250}
            height={190}
          />
        </div>
      </div>
      <div className='absolute bottom-2 w-screen animate-move'>
        <img src={labicake} className='brightness-100 w-60 ' />
      </div>
      <div className='-z-50'>
        <Confetti />
      </div>
    </div>
  );
}

export default App;
