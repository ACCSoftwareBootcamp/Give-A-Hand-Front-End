import { useAuth } from '@clerk/clerk-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../App.css';

function CreateTaskPage() {
  const [taskType, setTaskType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { user } = useUser();
  const navigate = useNavigate();
  const { userId } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userTask = { taskType, name, description, userId };
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
        <div>
          <h1>Please Sign-In to send a Task</h1>
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
              <select
                id='taskType'
                className='form-control'
                name='taskType'
                value={taskType}
                onChange={(event) => setTaskType(event.target.value)}
                size='1'
                required
              >
                <option value='LawnCare'>Lawn Care</option>
                <option value='Handyman'>Handyman</option>
                <option value='RideShare'>Ride Share</option>
                <option value='Other'>Other..</option>
              </select>
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
