import { useAuth } from '@clerk/clerk-react';
import { useState } from 'react';

function CreateTaskPage() {
  const [taskType, setTaskType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

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
    </>
  );
}

export default CreateTaskPage;
