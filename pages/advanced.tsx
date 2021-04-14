import React, { useContext, useState } from 'react';

import { Button, Layout, Sidebar, Modal } from '../components';
import NotifCard from '../components/notif-card';
import { NotificationContext } from '../contexts/notification-context';

export default function Advanced(): JSX.Element {
  const { notificationData, handleAddNotification } = useContext(
    NotificationContext
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

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
      <div className="mb-5 flex justify-end">
        <Button onClick={() => setIsModalVisible(true)}>
          Generate Config File
        </Button>
        <Modal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </div>
      <Sidebar>
        {({ activeMenu }) =>
          activeMenu === 'probe' ? renderProbe() : renderNotification()
        }
      </Sidebar>
    </Layout>
  );
}
