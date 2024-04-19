const Cards = () => {
  return (
    <div className='cardContainer'>
      <div className='card-body'>
        <img src='src/assets/landscaper.png' className='card-img-top' alt='PIC' />
        <h5 className='card-title'>Help with Lawn Care</h5>
        <p className='card-text'>Can&apos;t manage your lawn? Need some help?</p>
        <a href='#' className='btn'>
          Help Out
        </a>
      </div>
      <div className='card-body'>
        <img src='src/assets/rideshare.png' className='card-img-top' alt='PIC' />
        <h5 className='card-title'>Ride to Store</h5>
        <p className='card-text'>No car? Can&apos;t drive yourself?</p>
        <a href='#' className='btn'>
          Help Out
        </a>
      </div>
      <div className='card-body'>
        <img src='src/assets/handyman.png' className='card-img-top' alt='PIC' />
        <h5 className='card-title'>Just need a Handyman</h5>
        <p className='card-text'>Got a new TV to hang up? Sink is clogged?</p>
        <a href='#' className='btn'>
          Help Out
        </a>
      </div>
    </div>
  );
};

export default Cards;
