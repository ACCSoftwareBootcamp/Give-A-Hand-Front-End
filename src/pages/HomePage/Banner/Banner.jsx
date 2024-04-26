import './Banner.scss';

function Banner() {
  return (
    <div className='banner'>
      <img className='banner-img' src='../../../../images/volunteers.avif' alt='banner' />
      <div className='container'>
        <h2 className='banner-title'>Give a helping hand to those who need it!</h2>
        <div className='d-flex justify-content-between'>
          <div className='banner-content '>
            <p className='banner-text'>
              It is time to put your superhero cape on and step into the world of kindness, goodwill
              and meaningful experiences. By creating an environment where the smallest actions
              matter, our app “Give a Hand” motivates you to help others in your community.
            </p>
            <p className='banner-text'>
              How you ask? Through simple yet impactful tasks like mowing your elderly neighbor‘s
              lawn, getting groceries for those unable to, or even rescuing someone with a busted
              tire on the side of a highway. You become the hero your city needs!
            </p>
            <button type='button' className='btn btn-outline-primary'>
              Learn More
            </button>
          </div>
          <div className='text-center'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/vk0dPIMcWAA?si=iBSrLNhrx6PkwYee'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
