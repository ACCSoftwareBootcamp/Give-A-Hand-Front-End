import PropTypes from 'prop-types';
import { useAuth } from '@clerk/clerk-react';
import { useState } from 'react';

const RequestCard = ({ id, name, taskType, description, userTasksPage }) => {
  const { getToken, userId } = useAuth();
  const [added, setAdded] = useState(false);

  const handleAddClick = async () => {
    const token = await getToken();
    console.log({ token, userId });

    try {
      const request = await fetch(`http://localhost:3000/task/${id}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await request.json();
      console.log(data);
      if (data?.message == 'Success') {
        setAdded(true);
      }
    } catch (error) {
      console.log('Error searching for Request: ', error);
    }
  };

  return (
    <div className='card'>
      <img src='placeholder.png' className='card-img-top' alt='task image' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <h5 className='card-subtitle'>Type: {taskType}</h5>
        <p className='card-text'>{description}</p>
        {added || userTasksPage ? (
          <div className='text-success'>
            <span>Added</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-check-lg'
              viewBox='0 0 16 16'
            >
              <path d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z' />
            </svg>
          </div>
        ) : (
          <button href='#' className='btn btn-primary' onClick={handleAddClick}>
            Add Task
          </button>
        )}
      </div>
    </div>
  );
};

RequestCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  taskType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userTasksPage: PropTypes.bool
};

export default RequestCard;
