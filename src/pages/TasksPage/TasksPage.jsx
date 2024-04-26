import { useState } from 'react';
import RequestCard from '../../components/RequestCard';
import { useEffect } from 'react';
import './TasksPage.scss';

const TasksPage = () => {
  // stores the response from the fetch request
  const [fetchResponse, setFetchResponse] = useState({ docs: [] });
  // stores the current page number
  const [page, setPage] = useState(1);
  // stores the search term
  const [searchTerm, setSearchTerm] = useState('');
  // stores whether the search button was clicked
  const [searchClick, setSearchClick] = useState(false);
  // stores the number of items to display per page
  const limit = 3;

  // dont allow form to submit if the user hits "Enter"
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // define what happens when page loads, search term is updated or page is updated
  const getData = () => {
    fetch(`http://localhost:3000/tasks?searchTerm=${searchTerm}&limit=${limit}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('page is : ', page);
        setFetchResponse({ ...data, docs: [...fetchResponse.docs, ...data.docs] });
      })
      .catch((error) => {
        console.log('Error searching for Request: ', error);
      });
  };

  // load data upon start or when page or searchClick are updated
  useEffect(getData, [page, searchClick]);

  // used to bump up the page counter and trigger a getData call
  const handlePageChange = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // used to trigger a getData call when the search button is clicked
  const handleSearchClick = () => {
    setPage(1);
    setFetchResponse({ docs: [] });
    setSearchClick((prevSearchClick) => !prevSearchClick);
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
      <div className='tasks-container'>
        {fetchResponse.docs &&
          fetchResponse.docs.map((task, i) => (
            <RequestCard
              key={i}
              id={task._id}
              name={task.name}
              description={task.description}
              taskType={task.taskType}
            />
          ))}
        {fetchResponse.hasNextPage && (
          <div className='text-center'>
            <button className='btn btn-outline-primary' onClick={handlePageChange}>
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksPage;
