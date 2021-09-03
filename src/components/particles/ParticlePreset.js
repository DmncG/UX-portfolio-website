import React from 'react'
import Particles from 'react-tsparticles'
// import JSONData from '../../../content/particle-config.json'

const ParticlePreset = () => {
  const particlesInit = (main) => {
  }

  const particlesLoaded = (container) => {
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "background": {
          "color": {
            "value": "#3D405B"
          },
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover",
        },
        "fullScreen": {
          "enable": true,
          "zIndex": 1,
        },
        "particles": {
          "links": {
            "distance": 150,
            "enable": true
          },
          "move": {
            "enable": true
          },
          "size": {
            "value": 1
          },
          "number": {
            "value": 75,
          },
        }
      }
    }
    />
  )
}

export default ParticlePreset;