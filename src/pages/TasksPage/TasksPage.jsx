import { useState, useEffect } from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import TaskCard from '../../components/TaskCard';

const TasksPage = () => {
  const [taskType, setTaskType] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/task/:taskType')
      .then((res) => res.json())
      .then((data) => {
        console.log('Success', data);
        setTasks(data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch('http://localhost:3000/task')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.results);
      })
      .catch((error) => {
        console.log('Error searching for Request: ', error);
      });
  };
  return (
    <>
      <SignedOut>
        <h1>Please Sign-In To See Tasks</h1>
      </SignedOut>
      <SignedIn>
        <div className='container'>
          <h1 className='text-center my-4'>Search For A Request</h1>
          <form onSubmit={handleSubmit} className='d-flex' role='search'>
            <input
              id='searchBar'
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
            />
            <button className='btn' type='submit'>
              Search
            </button>
          </form>
          <div className='col-md-12'>
            {!tasks ? (
              <p>Loading...</p>
            ) : (
              tasks.map((task) => {
                return (
                  <div className='col-md-3 taskCard-display' key={task._id}>
                    <TaskCard
                      id={task._id}
                      name={task.name}
                      description={task.description}
                      taskType={task.taskType}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </SignedIn>
    </>
  );
};

export default TasksPage;
