import './Footer.scss';

function Footer() {
  return (
    <footer className='footer bg-primary'>
      <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Features
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            Pricing
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            FAQs
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-link'>
            About
          </a>
        </li>
      </ul>
      <p className='text-center'>© 2024 Company, Inc</p>
    </footer>
  );
}

export default Footer;
