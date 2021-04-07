import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';

export interface ProbeContextInterface {
  probeData: Probe[];
  handleAddProbe: (probe: Probe) => void;
  handleRemoveProbe: (probe: Probe) => void;
}
