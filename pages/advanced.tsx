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

  type Menu = 'Probe' | 'Notification';
  const [activeMenu, setActiveMenu] = useState<Menu>('Probe');
  const handleSetActiveMenu = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    menu: Menu
  ) => {
    event.preventDefault();

    setActiveMenu(menu);
  };

  const render = () => {
    if (activeMenu === 'Notification') {
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
    }

    if (activeMenu === 'Probe') {
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
    }

    return <>Nothing to render</>;
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
      <div className="flex flex-col md:flex-row space-x-0 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-3/12">
          <Sidebar
            activeMenu={activeMenu}
            onMenuChange={(event, menu) => handleSetActiveMenu(event, menu)}
          />
        </div>
        <div className="w-full md:w-9/12">{render()}</div>
      </div>
    </Layout>
  );
}
