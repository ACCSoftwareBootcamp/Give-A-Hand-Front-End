import { useState } from 'react';
import RequestCard from '../../components/RequestCard';
import { useEffect } from 'react';
import './TasksPage.scss';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [fetchResponse, setFetchResponse] = useState({});
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchClick, setSearchClick] = useState(false);
  const limit = 3;
  // let page = 1;

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    fetch(`http://localhost:3000/tasks?searchTerm=${searchTerm}&limit=${limit}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        const { docs, ...fetchResponse } = data;
        setTasks(docs);
        setFetchResponse(fetchResponse);
      })
      .catch((error) => {
        console.log('Error searching for Request: ', error);
      });

    searchClick && setSearchClick(false);
  }, []);

  const handleSearchClick = () => {
    fetch(`http://localhost:3000/tasks?searchTerm=${searchTerm}&limit=${limit}&page=1`)
      .then((res) => res.json())
      .then((data) => {
        const { docs, ...fetchResponse } = data;
        setTasks(docs);
        setFetchResponse(fetchResponse);
      })
      .catch((error) => {
        console.log('Error searching for Request: ', error);
      });
    setPage(1);
  };

  const handlePageChange = () => {
    fetch(`http://localhost:3000/tasks?searchTerm=${searchTerm}&limit=${limit}&page=${page + 1}`)
      .then((res) => res.json())
      .then((data) => {
        const { docs, ...fetchResponse } = data;
        setTasks([...tasks, ...docs]);
        setFetchResponse(fetchResponse);
      })
      .catch((error) => {
        console.log('Error searching for Request: ', error);
      });
    setPage(page + 1);
  };

  return (
    <div className='tasks-section container'>
      <h2 className='tasks-title text-center'>Search For A Request</h2>
      <form onSubmit={handleSubmit} className='d-flex' role='search'>
        <input
          id='searchBar'
          className='form-control me-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='btn btn-outline-primary' type='submit' onClick={handleSearchClick}>
          Search
        </button>
      </form>
      {!tasks ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className='tasks-container'>
            {tasks.map((task) => (
              <RequestCard
                key={task._id}
                id={task._id}
                name={task.name}
                description={task.description}
                taskType={task.taskType}
              />
            ))}
          </div>
          {fetchResponse.hasNextPage && (
            <div className='text-center'>
              <button className='btn btn-outline-primary' onClick={handlePageChange}>
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TasksPage;
