import { createContext, FunctionComponent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { ProbeContextInterface } from './probe-context-interface';
import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';

const ProbeContext = createContext<ProbeContextInterface>({
  probeData: [],
  handleSetProbes: () => undefined,
  handleAddProbe: () => undefined,
  handleRemoveProbe: () => undefined,
});

const ProbeProvider: FunctionComponent = ({ children }) => {
  const [probes, setProbes] = useState<Probe[]>([]);

  const handleSetProbes = (probes: Probe[]) => {
    setProbes(probes);
  };

  const handleAddProbe = (probe: Probe) => {
    const probeData = probes.concat({
      ...probe,
      id: uuid(),
    });

    setProbes(probeData);
  };

  const handleRemoveProbe = (probe: Probe) => {
    const probeData = probes.filter((data) => data.id !== probe.id);

    setProbes(probeData);
  };

  return (
    <ProbeContext.Provider
      value={{
        probeData: probes,
        handleSetProbes,
        handleAddProbe,
        handleRemoveProbe,
      }}>
      {children}
    </ProbeContext.Provider>
  );
};

export { ProbeProvider, ProbeContext };
