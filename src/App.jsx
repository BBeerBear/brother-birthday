import { Html, Loader, OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Confetti from 'react-confetti';
import ReactPlayer from 'react-player/youtube';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import labicake from './assets/labicake.png';
import Fireworks from '@fireworks-js/react';

function App() {
  // fireworks.start();
  const Model = () => {
    const gltf = useLoader(GLTFLoader, '/3d_cake/scene.gltf');
    return (
      <primitive
        object={gltf.scene}
        position={[0, 3, 0]}
        rotation={[0, Math.PI / 0.9, 0]}
      />
    );
  };

  const Model2 = () => {
    const gltf = useLoader(GLTFLoader, '/3d_candle_cake/scene.gltf');
    return (
      <primitive
        object={gltf.scene}
        position={[0, -21, 0]}
        scale={0.3}
        // rotation={[0, Math.PI / 0.9, 0]}
      />
    );
  };

  const BearModel = () => {
    const gltf = useLoader(GLTFLoader, '/3d_bear/scene.gltf');
    return (
      <primitive
        object={gltf.scene}
        position={[5, -2, 0]}
        rotation={[0, Math.PI / 0.9, 0]}
        scale={0.8}
      />
    );
  };
  const GiftModel = () => {
    const gltf = useLoader(GLTFLoader, '/3d_gift/scene.gltf');
    return (
      <primitive
        object={gltf.scene}
        // position={[5, -2, 0]}
        rotation={[0, Math.PI / 0.8, 0]}
        scale={2}
      />
    );
  };

  return (
    <div className='relative bg-white/25 w-screen h-screen p-2 flex flex-col items-center justify-center gap-5 overflow-hidden'>
      <div className='absolute -bottom-10 w-full'>
        <Fireworks />;
      </div>
      <div className='absolute top-0 left-0'>
        <div className='w-52 h-52'>
          <Canvas camera={{ position: [-1, 2, -4], fov: 45 }}>
            <ambientLight />
            <Suspense
              fallback={
                <Html>
                  <Loader />
                </Html>
              }
            >
              <BearModel />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <div className='w-52 h-52'>
          <Canvas camera={{ position: [-1, 1, 0], fov: 45 }}>
            <ambientLight />
            <Suspense
              fallback={
                <Html>
                  <Loader />
                </Html>
              }
            >
              <GiftModel />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      <div className='font-dancing text-6xl tracking-wider text-pink-400 hover:text-7xl duration-1000 z-50 w-fit '>
        Happy Birthday!
      </div>
      <div className='font-zcool text-6xl tracking-wider text-sky-400 hover:text-7xl duration-1000 z-50 w-fit'>
        🎉祝熊玉琛生日快樂！🎁
      </div>
      <div className='flex justify-center align-center gap-10'>
        <div className='w-80 h-80'>
          <Canvas camera={{ position: [0, 3, -4], fov: 45 }}>
            <ambientLight />
            <Suspense
              fallback={
                <Html>
                  <Loader />
                </Html>
              }
            >
              <Model />
            </Suspense>
            <OrbitControls />
          </Canvas>
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
        <div className='w-80 h-80 '>
          <Canvas camera={{ position: [0, 10, 100], fov: 45 }}>
            <ambientLight />
            <Suspense
              fallback={
                <Html>
                  <Loader />
                </Html>
              }
            >
              <Model2 />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      <div className='absolute bottom-2 w-screen animate-move'>
        <img src={labicake} className='brightness-100 w-60' />
      </div>
      <div className='-z-50'>
        <Confetti />
      </div>
    </div>
  );
}

export default App;
