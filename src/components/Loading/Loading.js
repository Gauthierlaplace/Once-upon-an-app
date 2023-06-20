import './Loading.scss';
import spinner from '../../assets/images/spinner.png';

function Loading() {
  const loading = spinner;
  return (
    <div className="Loading">
      Veuillez Patienter...
      <div className="Loading-spinner">
        <img src={loading} alt="spinner" />
      </div>
    </div>
  );
}

export default Loading;
