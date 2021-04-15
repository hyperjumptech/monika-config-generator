import React, { useContext, useState } from 'react';

import { Layout, Sidebar } from '../components';
import ProbeCard from '../components/probe-card';
import { ProbeContext } from '../contexts/probe-context';
import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';
import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';
import { Button, GenerateConfigModal } from '../components';
import NotifCard from '../components/notif-card';
import { NotificationContext } from '../contexts/notification-context';

export default function Advanced(): JSX.Element {
  const { notificationData, handleAddNotification } = useContext(
    NotificationContext
  );
  const { probeData, handleAddProbe } = useContext(ProbeContext);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const renderProbe = () => {
    return (
      <div>
        {probeData.map((probe: Probe) => (
          <ProbeCard probe={probe} key={probe.id} id={probe.id} />
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
        {notificationData.map((notif: Notification) => (
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
        <GenerateConfigModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </div>
      <Sidebar>
        {({ activeMenu }) =>
          activeMenu === 'Probe' ? renderProbe() : renderNotification()
        }
      </Sidebar>
    </Layout>
  );
}
