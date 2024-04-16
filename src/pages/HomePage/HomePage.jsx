import Cards from '../../components/Cards';
import '../../App.css';

const HomePage = () => {
  return (
    <>
      <div id='carouselExample' className='carousel slide'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src='src/assets/CarsoulImage1.jpeg' className='d-block w-100 h-50' alt='Pic' />
            <div className='carousel-caption top-0 mt-4'>
              <p className='mt-5 fs-3 text-uppercase'>
                Looking for ways to help in your community?
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src='' className='d-block w-100 h-50' alt='pic' />
            <div className='carousel-caption top-0 mt-4'>
              <p className='mt-5 fs-3 text-uppercase'>
                Looking for ways to help in your community?
              </p>
            </div>
          </div>
          <div className='carousel-item'>
            <img src='' className='d-block w-100 h-50' alt='pic' />
            <div className='carousel-caption top-0 mt-4'>
              <p className='mt-5 fs-3 text-uppercase'>
                Looking for ways to help in your community?
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExample'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
      <div>
        <Cards />
        HomePage
      </div>
    </>
  );
};

export default HomePage;
