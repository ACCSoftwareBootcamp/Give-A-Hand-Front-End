import { useAuth } from '@clerk/clerk-react';
import { useState } from 'react';
import './CreateTaskPage.scss';

function CreateTaskPage() {
  const [taskType, setTaskType] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageData, setImageData] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const { userId } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userTask = { taskType, name, description, authorId: userId };
    // Fetch Task Data
    fetch('http://localhost:3000/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userTask)
    })
      .then((res) => res.json())
      .then((data) => {
        postImage(data.sentTask._id);
        console.log('Success', data);
      })
      .catch((error) => {
        console.log('Error Creating new Task: ', error);
      });

    // Fetch Image Task
    const postImage = (taskId) => {
      fetch(`http://localhost:3000/task-image/${taskId}`, {
        method: 'POST',
        body: imageData
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Success', data);
          setTaskType('');
          setName('');
          setDescription('');
          setImageData('');
          // Reset input value
          document.getElementById('image-upload').value = '';
        })
        .catch((error) => {
          console.log('Error Creating new Task: ', error);
        });
    };
  };

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    const imageData = new FormData();
    imageData.append('image', image);
    setImageData(imageData);
    setImageUrl(imageUrl);
  };

  return (
    <>
      <div className='container mb-5'>
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
          <div className='mb-3 d-flex flex-column align-items-start'>
            <label className='mb-3' htmlFor='image-upload'>
              Upload Image
            </label>
            <input
              id='image-upload'
              type='file'
              accept='image/*'
              required
              onChange={(event) => handleImageUpload(event)}
            />
            {imageData && <img className='image-upload' src={imageUrl} alt='uploaded image' />}
          </div>
          <button type='submit' className='btn btn-primary mt-3'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateTaskPage;
