import './Goal.scss';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { NavLink } from 'react-router-dom';
import particlesOptions from './particlesOptions.js';

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

  const options = useMemo(() => particlesOptions, []);

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
            <NavLink className='card-link text-primary' to='/about-us'>
              Learn more
            </NavLink>
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
            <NavLink className='card-link text-primary' to='/about-us'>
              Learn more
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goal;
