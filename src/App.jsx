function App() {
  return (
    <div className='bg-black/25 w-screen h-screen p-10 flex flex-col gap-6 '>
      <div className='font-zcool text-6xl tracking-wider text-sky-400 hover:text-7xl transition-all duration-1000'>
        祝熊玉琛生日快樂！
      </div>
      <div className='font-dancing text-6xl tracking-wider text-pink-400 hover:text-7xl transition-all duration-1000'>
        Happy Birthday!
      </div>
      <div>
        {/* <ReactAudioPlayer src='./happy_birthday.mp3' autoPlay loop /> */}
      </div>
    </div>
  );
}

export default App;
