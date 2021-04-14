import { useContext } from 'react';

import { Layout, Sidebar } from '../components';
import NotifCard from '../components/notifcard';
import ProbeCard from '../components/probecard';
import { NotificationContext } from '../contexts/NotificationContext';
import { ProbeContext } from '../contexts/ProbeContext';

export default function Advanced(): JSX.Element {
  const { notificationData, handleAddNotification } = useContext(
    NotificationContext
  );
  const { probeData, handleAddProbe } = useContext(ProbeContext);

  const renderProbe = () => {
    return (
      <div>
        {probeData.map((probe) => (
          <ProbeCard key={probe.id} id={probe.id} />
        ))}
        <button
          onClick={handleAddProbe}
          className="w-full border-4 border-dashed rounded-md p-4">
          <p>Add another probe</p>
        </button>
      </div>
    );
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
