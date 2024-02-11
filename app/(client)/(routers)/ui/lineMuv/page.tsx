'use client'

import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import React, { useCallback } from 'react'
const LineMuv = () => {
    
  const particlesInit = useCallback(async (engine:any) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => { }, [])

  return (
    <div className='w-full h-full ' >
    <Particles
    className='w-full h-full'
    id='tsparticles'
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fullScreen: { enable: false },
      background: {
        color: {
          value: '',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 100
          },
          repulse: {
            distance: 150,
            duration: 0.2,
          },
        },
      },
      particles: {
        color: {
          value: '#040D12',
        },
        links: {
          color: '#040D12',
          distance: 250,
          enable: true,
          opacity: 1,
          width: 2,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity:{
          value:0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }}
  />
  </div>
  )
}

export default LineMuv