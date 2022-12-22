import React, { useContext, useState } from 'react';
import kebabCase from 'lodash.kebabcase';

import { HeadPage, Layout, Sidebar } from '../components';
import ProbeCard from '../components/probe-card';
import { ProbeContext } from '../contexts/probe-context';
import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';
import { Notification } from '@hyperjumptech/monika/lib/interfaces/notification';
import { Button, GenerateConfigModal } from '../components';
import NotifCard from '../components/notif-card';
import { NotificationContext } from '../contexts/notification-context';

type ProbeFormProps = {
  probeData: Probe[];
  onAddProbe: () => void;
  hidden: boolean;
};

type NotificationFormProps = {
  notifications: Notification[];
  onAddNotification: () => void;
  hidden: boolean;
};

export default function Advanced(): JSX.Element {
  const { probeData, handleAddProbe } = useContext(ProbeContext);
  const { notificationData, handleAddNotification } =
    useContext(NotificationContext);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState('probe');
  const showProbeContent = activeMenu === 'probe';
  const showNotificationContent = activeMenu === 'notification';
  const menu = [
    {
      key: 'probe',
      label: 'Probe',
      onClick: setActiveMenu,
      subMenu: probeData.map((probe) => ({
        key: probe.id,
        label: probe?.name || probe.id?.split('-')[0],
        onClick: (menuKey: string) => {
          const probeCardElement = document.querySelector(
            `#probe-${kebabCase(menuKey)}`
          );

          setActiveMenu('probe');

          // needs to set timeout because if the content is hidden javascript cannot find the probeCardElement
          setTimeout(
            () => {
              probeCardElement?.scrollIntoView({ behavior: 'smooth' });
            },
            showProbeContent ? 0 : 200
          );
        },
      })),
    },
    {
      key: 'notification',
      label: 'Notification',
      onClick: setActiveMenu,
      subMenu: notificationData.map((notification) => ({
        key: notification.id,
        label: notification.id?.split('-')[0],

        onClick: (menuKey: string) => {
          const notificationElement = document.querySelector(
            `#notification-${kebabCase(menuKey)}`
          );

          setActiveMenu('notification');
          // needs to set timeout because if the content is hidden javascript cannot find the notificationElement
          setTimeout(
            () => {
              notificationElement?.scrollIntoView({ behavior: 'smooth' });
            },
            showNotificationContent ? 0 : 200
          );
        },
      })),
    },
  ];

  return (
    <Layout>
      <HeadPage subtitle="Advanced" />
      <div className="mb-5 flex justify-end">
        <Button onClick={() => setIsModalVisible(true)}>
          Generate Config File
        </Button>
        <GenerateConfigModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      </div>
      <section className="flex flex-col md:flex-row space-x-0 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-3/12">
          <Sidebar menu={menu} activeMenu={activeMenu} />
        </div>
        <div className="w-full md:w-9/12">
          <ProbeForm
            probeData={probeData}
            onAddProbe={handleAddProbe}
            hidden={!showProbeContent}
          />
          <NotificationForm
            notifications={notificationData}
            onAddNotification={handleAddNotification}
            hidden={!showNotificationContent}
          />
        </div>
      </section>
    </Layout>
  );
}

function ProbeForm({ probeData, onAddProbe, hidden }: ProbeFormProps) {
  return (
    <div style={{ display: hidden ? 'none' : 'block' }}>
      {probeData.map((probe: Probe) => (
        <ProbeCard probe={probe} key={probe.id} id={probe.id} />
      ))}
      <button
        onClick={onAddProbe}
        className="w-full border-4 border-dashed rounded-md p-4"
      >
        <p>Add another probe</p>
      </button>
    </div>
  );
}

function NotificationForm({
  notifications,
  onAddNotification,
  hidden,
}: NotificationFormProps) {
  return (
    <div style={{ display: hidden ? 'none' : 'block' }}>
      {notifications.map((notification: Notification) => (
        <NotifCard
          key={notification.id}
          id={notification.id}
          type={notification.type}
        />
      ))}
      <button
        onClick={onAddNotification}
        className="w-full border-4 border-dashed rounded-md p-4"
      >
        <p>Add another notification</p>
      </button>
    </div>
  );
}
