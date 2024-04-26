import './Cards.scss';
import { useEffect } from 'react';

function Cards() {
  useEffect(() => {
    // fetch()
    //   .then((data) => {})
    //   .catch(console.error);
  });

  return (
    <div className='container cards-section'>
      <h2 className='mb-5 text-center'>Help today</h2>
      <div className='cards-container'>
        {/* eslint-disable-next-line no-constant-condition */}
        {true ? (
          <div className='card-container'>
            <div className='card'>
              <img src='' className='card-img-top' alt='task image' />
              <div className='card-body'>
                <h5 className='card-title'>Deed name</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up the bulk of the
                  card content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>

            <div className='card'>
              <img src='' className='card-img-top' alt='' />
              <div className='card-body'>
                <h5 className='card-title'>Deed name</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up the bulk of the
                  card content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>

            <div className='card'>
              <img src='' className='card-img-top' alt='' />
              <div className='card-body'>
                <h5 className='card-title'>Deed name</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up the bulk of the
                  card content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}

export default Cards;
