import Cards from './Cards/Cards.jsx';
import '../../App.scss';
import Banner from './Banner/Banner.jsx';
import Goal from './Goal/Goal.jsx';
import CallToAction from './CallToAction/CallToAction.jsx';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Cards />
      <Goal />
      <CallToAction />
    </div>
  );
};

export default HomePage;
