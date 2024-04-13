import propTypes from 'props-types';

const RequestCard = (props) => {
  const { name, id, taskType, description } = props;
  return (
    <div className='searchCardcontainer'>
      <div className='border' key={id}>
        <h4>{name}</h4>
        <p>{taskType}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

RequestCard.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  taskType: propTypes.string.isRequired,
  description: propTypes.string.isRequired
};

export default RequestCard;
