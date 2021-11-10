// eslint-disable-next-line
import react from 'react';
import './Notifications.css';
import close from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  return (
    <div className="Notifications">
      <div>
        <p>Here is the list of notifications</p>

        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="default">New resume available</li>
          <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
        </ul>
      </div>
      <button
        className="Close-buttton"
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
      >
        <img
          src={close}
          alt="close-icon"
          style={{ maxHeight: '10px', maxWidth: '10px' }}
        />
      </button>
    </div>
  );
}

export default Notifications;
