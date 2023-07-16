import SmallCard from '../components/SmallCard';
import Header from '../components/header/header';

import { projectIcons } from '../components/Icons';
import { projects } from '../utils/projectsData';

const Home = () => (
  <div className="home">
  <Header />
    <h1>What Can I Deploy to Static Apps?</h1>
    <div className="card-grid">
      {projects.map((project) => {
        const Icon = projectIcons[project.id];
        return (
          <SmallCard
            key={project.id}
            Icon={Icon}
            title={project.name}
            slug={project.slug}
          />
        );
      })}
    </div>
  </div>
);

export default Home;
