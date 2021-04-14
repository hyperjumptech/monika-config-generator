import { createContext, FunctionComponent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  ProbeContextInterface,
  UpdateProbeData,
} from './ProbeContextInterface';
import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';

const ProbeContext = createContext<ProbeContextInterface>({
  probeData: [],
  handleSetProbes: () => undefined,
  handleAddProbe: () => undefined,
  handleRemoveProbe: () => undefined,
  handleUpdateProbeData: () => undefined,
});

const ProbeProvider: FunctionComponent = ({ children }) => {
  const [probes, setProbes] = useState<Probe[]>([
    {
      id: uuid().split('-')[0],
      name: '',
      description: '',
      interval: 0,
      requests: [],
      incidentThreshold: 5,
      recoveryThreshold: 5,
      alerts: [],
    },
  ]);

  const handleSetProbes = (probes: Probe[]) => {
    setProbes(probes);
  };

  const handleAddProbe = () => {
    const id = uuid().split('-')[0];

    const probeData = probes.concat({
      id,
      name: '',
      description: '',
      interval: 0,
      requests: [],
      incidentThreshold: 5,
      recoveryThreshold: 5,
      alerts: [],
    });

    setProbes(probeData);
  };

  const handleRemoveProbe = (id: string) => {
    const probeData = probes.filter((data) => data.id !== id);

    setProbes(probeData);
  };

  const handleUpdateProbeData = (data: UpdateProbeData) => {
    const selectedProbe = probes.find((probe) => probe.id === data.id);
    const selectedProbeData = (selectedProbe ?? {}) as any;
    selectedProbeData[data.field] = data.value;

    const notifData = probes.map((notif) => {
      return notif.id === data.id
        ? {
            ...notif,
            ...selectedProbeData,
          }
        : notif;
    });

    setProbes(notifData);
  };

  return (
    <ProbeContext.Provider
      value={{
        probeData: probes,
        handleSetProbes,
        handleAddProbe,
        handleRemoveProbe,
        handleUpdateProbeData,
      }}>
      {children}
    </ProbeContext.Provider>
  );
};

export { ProbeProvider, ProbeContext };
