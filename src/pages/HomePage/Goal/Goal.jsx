import './Goal.scss';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function Goal() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: 'rgb(133, 64, 245)'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push'
          },
          onHover: {
            enable: true,
            mode: 'grab'
          }
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 120
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }),
    []
  );

  if (!init) {
    return <span>Loading...</span>;
  }

  return (
    <div className='goal-section'>
      <Particles id='tsparticles' options={options} />
      <div className='container'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Our Vision</h5>
            <p className='card-text'>
              Empowering individuals to create positive change in their communities through acts of
              kindness, facilitated by the &quot;Give a Hand&quot; app&apos;s incentivization and
              motivation features.
            </p>
            <a href='#' className='card-link text-primary'>
              Learn more
            </a>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Our Mission</h5>
            <p className='card-text'>
              To foster a culture of volunteerism and altruism by providing a diverse range of
              opportunities for users to perform good deeds and earn rewards, ultimately
              strengthening community bonds and enriching lives.
            </p>
            <a href='#' className='card-link text-primary'>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
