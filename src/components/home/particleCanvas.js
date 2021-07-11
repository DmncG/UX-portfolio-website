import React from 'react'
import Particles from 'react-tsparticles'
// import JSONData from '../../../content/particle-config.json'

const ParticleCanvas = () => {
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
        "background":{
        "color":{
        "value":"#f4f1de"
        },
        "position":"50% 50%",
        "repeat":"no-repeat",
        "size":"cover"
        },
        "fullScreen":{
        "enable":true,
        "zIndex":-1
        },
        "interactivity":{
        "events":{
        "onClick":{
        "enable":false,
        "mode":"push"
        },
        "onHover":{
        "mode":"repulse",
        "parallax":{
        "force":60
        }
        }
        },
        "modes":{
        "bubble":{
        "distance":400,
        "duration":2,
        "opacity":0.8,
        "size":40
        },
        "grab":{
        "distance":400
        }
        }
        },
        "particles":{
        "collisions":{
        "enable":true
        },
        "color":{
        "value":"#e07a5f"
        },
        "links":{
        "color":{
        "value":"#ffffff"
        },
        "distance":150,
        "opacity":0.4
        },
        "move":{
        "attract":{
        "rotate":{
        "x":600,
        "y":1200
        }
        },
        "enable":true,
        "path":{
        },
        "outModes":{
        "default":"bounce",
        "bottom":"bounce",
        "left":"bounce",
        "right":"bounce",
        "top":"bounce"
        },
        "speed":1
        },
        "number":{
        "density":{
        "enable":true
        },
        "value":10
        },
        "opacity":{
        "value":0.5,
        "animation":{
        "speed":1,
        "minimumValue":0.1
        }
        },
        "size":{
        "random":{
        "enable":true,
        "minimumValue":10
        },
        "value":{
        "min":10,
        "max":15
        },
        "animation":{
        "speed":40,
        "minimumValue":0.1
        }
        }
        }
        }
    }
    />
  )
}

export default ParticleCanvas;