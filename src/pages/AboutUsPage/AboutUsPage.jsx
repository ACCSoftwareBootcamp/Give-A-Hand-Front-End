import './AboutUsPage.scss';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';
import particlesOptions from './particlesOptions.js';
function AboutUsPage() {
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
    <div className='about-section'>
      <h2 className='about-title text-center mt-5 mb-5 text-light'>About Us</h2>
      <Particles id='particles-top' options={options} />

      <div className='about-content'>
        <div className='text-section'>
          <h3>Our Vision:</h3>
          <p>
            At &quot;Give a Hand&quot; we envision a world where acts of kindness are celebrated,
            and every individual feels empowered to contribute positively to their community. We
            believe in the transformative power of collective goodwill, where small gestures of
            compassion create lasting change and foster stronger, more connected societies.
          </p>
        </div>
        <div className='text-section'>
          <h3>Our Mission:</h3>
          <p>
            Our mission at &quot;Give a Hand&quot; is to inspire and empower individuals to
            volunteer and extend a helping hand to those in need. Through our mobile app, we provide
            a platform that encourages users to engage in meaningful acts of service, from assisting
            senior citizens with daily tasks to providing crucial support during emergencies. By
            incentivizing and rewarding these acts of kindness, we aim to cultivate a culture of
            compassion and altruism, where every contribution, no matter how small, makes a
            meaningful difference in the lives of others.
          </p>
        </div>
        <div className='text-section'>
          <h3>How It Works:</h3>
          <p>
            &quot;Give a Hand&quot; offers users a diverse range of opportunities to get involved
            and make a positive impact in their communities. Whether it&apos;s mowing a lawn for a
            senior citizen, purchasing groceries for someone in need, or offering technical advice,
            our app features a growing list of deeds that users can choose from based on their
            skills and interests. As users accumulate points and level up, they unlock access to a
            variety of perks, including discounts at local stores, increased visibility and
            reputation within the community, and exclusive meetups where they can connect with
            like-minded individuals. Additionally, users have the chance to participate in raffles
            for exciting prizes, funded by our community-driven crowdfunding initiatives. Join us on
            our journey to create a world where kindness knows no bounds. Together, let&apos;s
            harness the power of compassion to build stronger, more resilient communities, and make
            a lasting impact on the world around us.
          </p>
        </div>
      </div>
      <Particles id='particles-bottom' options={options} />
    </div>
  );
}

export default AboutUsPage;
