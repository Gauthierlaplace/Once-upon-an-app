/* eslint-disable no-alert */
import './BackgroundContainer.scss';

function BackgroundContainer() {
  return (
    <div className="BackgroundContainer">

      <div className="BackgroundContainer-sky">
        <div className="BackgroundContainer-stars" />
        <div className="BackgroundContainer-clouds" />
      </div>

      <div className="BackgroundContainer-app-content" />

    </div>
  );
}

export default BackgroundContainer;
