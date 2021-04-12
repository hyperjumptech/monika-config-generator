import { useContext } from 'react';

import { Layout, Sidebar } from '../components';
import NotifCard from '../components/notifcard';
import { NotificationContext } from '../contexts/NotificationContext';

export default function Advanced(): JSX.Element {
  const { notificationData, handleAddNotification } = useContext(
    NotificationContext
  );

  const renderProbe = () => {
    return <div>Hello Probe</div>;
  };

  const renderNotification = () => {
    return (
      <div>
        {notificationData.map((notif) => (
          <NotifCard key={notif.id} id={notif.id} type={notif.type} />
        ))}
        <button
          onClick={handleAddNotification}
          className="w-full border-4 border-dashed rounded-md p-4">
          <p>Add another notification</p>
        </button>
      </div>
    );
  };

  return (
    <Layout>
      <Sidebar>
        {({ activeMenu }) =>
          activeMenu === 'probe' ? renderProbe() : renderNotification()
        }
      </Sidebar>
    </Layout>
  );
}
