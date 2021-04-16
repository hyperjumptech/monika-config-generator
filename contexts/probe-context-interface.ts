import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';

export interface UpdateProbeData {
  id: string;
  field: string;
  value: string;
}

export interface UpdateProbeRequestData extends UpdateProbeData {
  index: number;
}

export interface ProbeContextInterface {
  probeData: Probe[];
  handleSetProbes: (probes: Probe[]) => void;
  handleAddProbe: () => void;
  handleRemoveProbe: (id: string) => void;
  handleUpdateProbeData: (data: UpdateProbeData) => void;
  handleAddProbeRequest: (id: string) => void;
  handleRemoveProbeRequest: (id: string, index: number) => void;
  handleUpdateProbeRequestData: (data: UpdateProbeRequestData) => void;
  handleAddProbeRequestHeader: (probeId: string, requestIndex: number) => void;
  handleUpdateProbeRequestEnableBody: (
    probeId: string,
    requestIndex: number,
    value: string
  ) => void;
  handleUpdateProbeRequestHeaderKey: (
    probeId: string,
    requestIndex: number,
    headerIndex: number,
    key: string
  ) => void;
  handleUpdateProbeRequestHeaderValue: (
    probeId: string,
    requestIndex: number,
    headerIndex: number,
    value: string
  ) => void;
  handleRemoveProbeRequestHeader: (
    probeId: string,
    headerIndex: number
  ) => void;
  handleUpdateProbeResponseTimeAlert: (
    probeID: string,
    value: number,
    checked: boolean
  ) => void;
  handleUpdateProbeRequestPosition: (
    probeId: string,
    prevValue: number,
    nextValue: number
  ) => void;
  handleUpdateProbeRequestBody: (data: UpdateProbeRequestData) => void;
  handleUpdateProbeAlert: (
    probeId: string,
    alert: string,
    value: boolean
  ) => void;
}
