import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';

export interface UpdateProbeData {
  id: string;
  field: string;
  value: string;
}

export interface ProbeContextInterface {
  probeData: Probe[];
  handleSetProbes: (probes: Probe[]) => void;
  handleAddProbe: (probe: Probe) => void;
  handleRemoveProbe: (id: string) => void;
  handleUpdateProbeData: (data: UpdateProbeData) => void;
}
