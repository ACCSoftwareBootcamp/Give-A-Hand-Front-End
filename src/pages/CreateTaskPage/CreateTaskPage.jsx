import { SignedIn, useUser } from '@clerk/clerk-react';
import { useState } from 'react';

function CreateTaskPage() {
  const [taskType, setTaskType] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const { user } = useUser();
  // console.log(user);

  // handleSubmit function for handling the form submission
  const handleSubmit = (event) => {
    // Preventing the default form submission behavior
    event.preventDefault();
    const userRequest = { taskType, author, description, userId: user.id };

    fetch('http://localhost:3000/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userRequest)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Success', data);
        setTaskType('');
        setAuthor('');
        setDescription('');
      })
      .catch((error) => {
        console.log('Error Creating new Request: ', error);
      });
  };

  return (
    <>
      <SignedIn>
        <div className='container'>
          <h1 className='text-center my-4'>Make A New Request</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='requestType' className='form-label'>
                Type of Request:
              </label>
              <input
                type='text'
                className='form-control'
                id='requestType'
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                placeholder='Lawn Care, Ride Share, Handyman...'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='author' className='form-label'>
                Name:
              </label>
              <input
                type='text'
                className='form-control'
                id='subject'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
