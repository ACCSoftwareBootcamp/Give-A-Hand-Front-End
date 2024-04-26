import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <nav className='navbar bg-primary navbar-expand' data-bs-theme='dark'>
      <div className='container sticky-top'>
        <span className='navbar-brand fw-bold' href='#'>
          GiveAHand
        </span>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/tasks'>
                Tasks
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/create-task'>
                Create Task
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/user-tasks'>
                Assignments
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about-us'>
                About Us
              </NavLink>
            </li>
          </ul>
          <div className='authorization'>
            <SignedOut>
              <SignInButton className='btn btn-outline-light' mode='modal' />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
