import './CallToAction.scss';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';

function CallToAction() {
  return (
    <div className='container call-to-action-section text-center'>
      <div className='content mb-3'>
        <h2 className='title'>Ready Yet?</h2>
        <p className='text'>
          Let’s make this world a better place - One good deed at a time. Get started with us, ‘Give
          a Hand’, earn points, grow and let your goodness shine forth! Are you ready to evolve?
        </p>
      </div>

      <SignedOut>
        <SignInButton className='btn btn-outline-primary' mode='modal'>
          Get Started
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <button type='button' className='btn btn-outline-primary'>
          <NavLink className='nav-link' to='/tasks'>
            I&apos;m Ready
          </NavLink>
        </button>
      </SignedIn>
    </div>
  );
}

export default CallToAction;
