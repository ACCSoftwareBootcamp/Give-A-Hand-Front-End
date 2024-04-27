import './Cards.scss';
import { useEffect, useState } from 'react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { NavLink } from 'react-router-dom';

function Cards() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks?limit=3&page=1`)
      .then((res) => res.json())
      .then((data) => {
        const { docs } = data;
        setTasks(docs);
      })
      .catch((error) => {
        console.log('Error searching for Request: ', error);
      });
  }, []);

  return (
    <div className='container cards-section'>
      <h2 className='mb-5 text-center'>Help today</h2>
      <div className='cards-container'>
        {tasks ? (
          tasks.map((task) => (
            <div key={task._id} className='card'>
              <img src={task.imageUrl} className='card-img-top' alt='task image' />
              <div className='card-body'>
                <h5 className='card-title'>{task.name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>Type: {task.taskType}</h6>
                <p className='card-text'>{task.description}</p>

                <SignedOut>
                  <SignInButton className='btn btn-primary' mode='modal'>
                    Start Task
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <NavLink className='btn btn-primary' to='/tasks'>
                    Start Task
                  </NavLink>
                </SignedIn>
              </div>
            </div>
          ))
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}

export default Cards;
