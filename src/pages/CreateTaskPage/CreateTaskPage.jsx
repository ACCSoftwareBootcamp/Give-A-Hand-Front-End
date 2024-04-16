import { SignedIn, useUser, SignedOut } from '@clerk/clerk-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../App.css';

function CreateTaskPage() {
  const [taskType, setTaskType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { user } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userTask = { taskType, name, description, userId: user.id };
    fetch('http://localhost:3000/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userTask)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success', data);
        navigate('/profile');
        setTaskType('');
        setName('');
        setDescription('');
      })
      .catch((error) => {
        console.log('Error Creating new Task: ', error);
      });
  };

  return (
    <>
      <SignedOut>
        <div id='carouselExample' className='carousel slide'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src='' className='d-block w-100' alt='Pic' />
              <div className='carousel-caption top-0 mt-4'>
                <p className='mt-5 fs-3 text-uppercase'>
                  Looking for ways to help in your community
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src='' className='d-block w-100' alt='pic' />
            </div>
            <div className='carousel-item'>
              <img src='' className='d-block w-100' alt='pic' />
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
      </SignedOut>
      <SignedIn>
        <div className='container'>
          <h1 className='text-center my-4'>Having Trouble? Send out a Task</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='taskType' className='form-label'>
                Type of Request:
              </label>
              <input
                type='text'
                className='form-control'
                id='taskType'
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                placeholder='Lawn Care, Ride Share, Handyman...'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>
                Name:
              </label>
              <input
                type='text'
                className='form-control'
                id='subject'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Full Name'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='description' className='form-label'>
                Request:
              </label>
              <textarea
                rows='3'
                className='form-control'
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Limit: 3-300 Characters'
                required
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </SignedIn>
    </>
  );
}

export default CreateTaskPage;
