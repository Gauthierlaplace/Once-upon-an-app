import './About.scss';
import '../MyAccount/MyAccount';
import '../../styles/index.scss';

function About() {
  return (
    <div className="About">
      {/* <div className="About-bar" /> */}
      <h1 className="About-title">A propos du projet</h1>
      <p>
        Cette application a été réalisée avec amour et dérision par :
      </p>
      <h2 className="About-subtitle">
        Team "Coloriage" (Front React) :
      </h2>
      <ul className="About-list">
        <li className="About-item">
          <p>Marine "MyLittlePony" Spaak</p>
          <img className="About-img" src="https://cdn.midjourney.com/d7ed9925-77a7-45f6-8a0e-695f742ad479/0_1.png" alt="avatar" />
        </li>
        <li className="About-item">
          <p>Gauthier "Rahkart" Laplace</p>
          <img className="About-img" src="https://cdn.midjourney.com/6c0897e2-d280-4f1e-9bd9-a4b0048c2f26/0_0.png" alt="avatar" />
        </li>
      </ul>
      <h2 className="About-subtitle">
        Team "Cave / Capuches" (Back Symfony) :
      </h2>
      <ul className="About-list">
        <li className="About-item">
          <p>Anthony "Maitre Zen" Boutherin</p>
          <img className="About-img" src="https://cdn.midjourney.com/f9fd4cb4-cd86-4b07-8609-2358052b36b7/0_1.png" alt="avatar" />
        </li>
        <li className="About-item">
          <p>Pierre "de la grotte carrelée" Salhab</p>
          <img className="About-img" src="https://cdn.midjourney.com/68822cc7-8a89-4fa1-ad34-d3b9e6c1f84a/0_1.png" alt="avatar" />
        </li>
      </ul>
    </div>
  );
}

export default About;
