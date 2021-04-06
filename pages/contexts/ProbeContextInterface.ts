export interface ProbeContextInterface {
  probeData: Probe[];
  handleAddProbe: (probe: Probe) => void;
  handleRemoveProbe: (probe: Probe) => void;
}

export interface Probe {
  id: string;
  name: string;
  description: string;
  requests: ProbeRequest[];
  threshold?: number;
  interval?: number;
  timeout?: number;
  alerts?: string[];
}

export interface ProbeRequest {
  url: string;
  method: RequestMethod;
  headers: RequestHeader[];
  body: any;
}

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestHeader {
  key: string;
  value: string;
}
