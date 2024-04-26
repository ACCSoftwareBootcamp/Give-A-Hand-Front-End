import './Footer.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer bg-primary'>
      <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
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
      <p className='text-center'>© 2024 Company, Inc</p>
    </footer>
  );
}

export default Footer;
