import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';

export interface UpdateProbeData {
  id: string;
  field: string;
  value: string;
}

export interface ProbeContextInterface {
  probeData: Probe[];
  handleSetProbes: (probes: Probe[]) => void;
  handleAddProbe: () => void;
  handleRemoveProbe: (id: string) => void;
  handleUpdateProbeData: (data: UpdateProbeData) => void;
  handleAddProbeRequest: (id: string) => void;
  handleRemoveProbeRequest: (id: string, index: number) => void;
}
