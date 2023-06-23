import './Loading.scss';
import spinner from '../../assets/images/spinner.png';

function Loading() {
  const loading = spinner;
  return (
    <div className="Loading">
      <div className="Loading-spinner">
        <img src={loading} alt="spinner" />
      </div>
      <h1>Chargement en cours...</h1>
    </div>
  );
}

export default Loading;
