import './Cards.scss';
import { useEffect, useState } from 'react';

function Cards() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks?limit=3&page=1`)
      .then((res) => res.json())
      .then((data) => {
        const { docs } = data;
        console.log(docs);
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
                <h5 className='card-title'>{tasks.name}</h5>
                <p className='card-text'>{task.description}</p>
                <a href='#' className='btn btn-primary'>
                  Start Task
                </a>
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
