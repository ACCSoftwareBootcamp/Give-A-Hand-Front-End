import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid sticky-top'>
        <a className='navbar-brand' href='#'>
          Give-A-Hand
        </a>
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
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled'>Disabled</a>
            </li>
          </ul>
          <div className='authorization'>
            <SignedOut>
              <SignInButton className='btn btn-outline-success' mode='modal' redirectUrl='/' />
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
