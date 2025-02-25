import { Footer, Form } from '../../components';
import './Home.scss';

const Home = () => {
  return (
    <section className="home">
      <Form isHome={true} />
      <Footer />
    </section>
  );
};

export default Home;
