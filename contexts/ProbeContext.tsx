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
  handleAddProbeRequest: () => undefined,
  handleRemoveProbeRequest: () => undefined,
});

const ProbeProvider: FunctionComponent = ({ children }) => {
  const [probes, setProbes] = useState<Probe[]>([
    {
      id: uuid().split('-')[0],
      name: '',
      description: '',
      interval: 10,
      requests: [
        {
          url: '',
          body: {} as JSON,
          timeout: 0,
          headers: {},
        },
      ],
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
      interval: 10,
      requests: [
        {
          url: '',
          body: {} as JSON,
          timeout: 0,
          headers: {},
        },
      ],
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

    const probeData = probes.map((probe) => {
      return probe.id === data.id
        ? {
            ...probe,
            ...selectedProbeData,
          }
        : probe;
    });

    setProbes(probeData);
  };

  const handleAddProbeRequest = (id: string) => {
    const foundProbe = probes.find((data) => data.id === id);
    const probeRequestData = (foundProbe as Probe).requests.concat({
      url: '',
      body: {} as JSON,
      timeout: 0,
      headers: {},
    });

    const newProbeData = probes.map((probe) => {
      return probe.id === id
        ? {
            ...probe,
            requests: [...probeRequestData],
          }
        : probe;
    });

    setProbes(newProbeData);
  };

  const handleRemoveProbeRequest = (id: string, index: number) => {
    const foundProbe = probes.find((data) => data.id === id);
    const filteredProbeRequest = (foundProbe as Probe).requests.filter(
      (_, idx) => index !== idx
    );

    const newProbeData = probes.map((probe) => {
      return probe.id === id
        ? {
            ...probe,
            requests: [...filteredProbeRequest],
          }
        : probe;
    });

    setProbes(newProbeData);
  };

  return (
    <ProbeContext.Provider
      value={{
        probeData: probes,
        handleSetProbes,
        handleAddProbe,
        handleRemoveProbe,
        handleUpdateProbeData,
        handleAddProbeRequest,
        handleRemoveProbeRequest,
      }}>
      {children}
    </ProbeContext.Provider>
  );
};

export { ProbeProvider, ProbeContext };
