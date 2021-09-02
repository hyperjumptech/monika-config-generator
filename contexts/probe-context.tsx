import { Probe, ProbeAlert } from '@hyperjumptech/monika/lib/interfaces/probe';
import { createContext, FunctionComponent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import {
  ProbeContextInterface,
  UpdateProbeData,
  UpdateProbeRequestData,
} from './probe-context-interface';

export const statusNot2xxAlert = () => ({
  query: 'response.status < 200 or response.status > 299',
  subject: 'Target is not OK',
  message: 'Target is not healthy. It has not been returning status code 2xx.',
});

export const responseTimeGreaterThanXAlert = (ms: number) => ({
  query: `response.time > ${ms}`,
  subject: 'Target took too long to respond',
  message: `Target is not healthy. The response time has been greater than ${ms} ms.`,
});

const defaultAlerts = [
  statusNot2xxAlert(),
  responseTimeGreaterThanXAlert(2000),
];

const ProbeContext = createContext<ProbeContextInterface>({
  probeData: [],
  handleSetProbes: () => undefined,
  handleAddProbe: () => undefined,
  handleAddProbeRequest: () => undefined,
  handleAddProbeRequestHeader: () => undefined,
  handleUpdateProbeData: () => undefined,
  handleUpdateProbeRequestPosition: () => undefined,
  handleUpdateProbeRequestEnableBody: () => undefined,
  handleUpdateProbeRequestData: () => undefined,
  handleUpdateProbeRequestBody: () => undefined,
  handleUpdateProbeRequestHeaderKey: () => undefined,
  handleUpdateProbeRequestHeaderValue: () => undefined,
  handleRemoveProbeRequest: () => undefined,
  handleRemoveProbe: () => undefined,
  handleRemoveProbeRequestHeader: () => undefined,
  handleAddProbeAlert: () => undefined,
  handleUpdateProbeAlert: () => undefined,
  handleRemoveProbeAlert: () => undefined,
});

const ProbeProvider: FunctionComponent = ({ children }) => {
  const [probes, setProbes] = useState<Probe[]>([
    {
      id: uuid(),
      name: '',
      description: '',
      interval: 10,
      requests: [
        {
          url: '',
          body: JSON.parse('{}'),
          timeout: 10000,
          headers: {},
          method: 'GET',
        },
      ],
      incidentThreshold: 5,
      recoveryThreshold: 5,
      alerts: defaultAlerts,
    },
  ]);
  const [headersCount, setHeadersCount] = useState(0);

  const handleSetProbes = (probes: Probe[]) => {
    setProbes(probes);
  };

  const handleAddProbe = () => {
    const id = uuid();

    const probeData = probes.concat({
      id,
      name: '',
      description: '',
      interval: 10,
      requests: [
        {
          url: '',
          body: JSON.parse('{}'),
          timeout: 10000,
          headers: {},
          method: 'GET',
        },
      ],
      incidentThreshold: 5,
      recoveryThreshold: 5,
      alerts: defaultAlerts,
    });

    setProbes(probeData);
  };

  const handleAddProbeRequest = (id: string) => {
    const foundProbe = probes.find((data) => data.id === id);
    const probeRequestData = (foundProbe as Probe).requests.concat({
      url: '',
      body: JSON.parse('{}'),
      timeout: 10000,
      headers: {},
      method: 'GET',
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

  const handleAddProbeRequestHeader = (
    probeId: string,
    requestIndex: number
  ) => {
    const foundProbe = probes.find((data) => data.id === probeId);
    const foundRequest = (foundProbe as Probe).requests.map(
      (request, index) => {
        return index === requestIndex
          ? {
              ...request,
              headers: {
                ...request.headers,
                [`key-${headersCount}`]: `value${headersCount}`,
              },
            }
          : request;
      }
    );

    const newProbeData = probes.map((probe) => {
      return probe.id === probeId
        ? {
            ...probe,
            requests: [...foundRequest],
          }
        : probe;
    });

    setProbes(newProbeData);

    setHeadersCount(headersCount + 1);
  };

  const handleUpdateProbeRequestPosition = (
    probeId: string,
    prevIndex: number,
    nextIndex: number
  ) => {
    const foundProbe = probes.find((data) => data.id === probeId);
    const foundRequest = (foundProbe as Probe).requests;

    // Swap the value
    const temp = foundRequest[nextIndex];
    foundRequest[nextIndex] = foundRequest[prevIndex];
    foundRequest[prevIndex] = temp;

    const newProbeData = probes.map((probe) => {
      return probe.id === probeId
        ? {
            ...probe,
            requests: [...foundRequest],
          }
        : probe;
    });

    setProbes(newProbeData);
  };

  const handleUpdateProbeRequestData = (data: UpdateProbeRequestData) => {
    const [selectedProbe] = probes.filter((probe) => probe.id === data.id);
    const selectedProbeRequest = selectedProbe?.requests.find(
      (_, index) => index === data.index
    );
    const selectedProbeRequestData = (selectedProbeRequest ?? {}) as any;
    selectedProbeRequestData[data.field] = data.value;

    const newProbeRequests = selectedProbe?.requests.map((request, idx) => {
      return idx !== data.index ? request : selectedProbeRequestData;
    });

    const probeData = probes.map((probe) => {
      return probe.id === data.id
        ? {
            ...probe,
            requests: newProbeRequests,
          }
        : probe;
    });

    setProbes(probeData);
  };

  const handleUpdateProbeRequestEnableBody = (
    probeId: string,
    requestIndex: number,
    value: string
  ) => {
    const foundProbe = probes.find((data) => data.id === probeId);

    const foundRequest = (foundProbe as Probe).requests.map(
      (request, index) => {
        if (index === requestIndex && value === 'JSON') {
          return {
            ...request,
            body: JSON.parse('{"key": "value"}'),
          };
        } else if (index === requestIndex && value === 'No Body') {
          return {
            ...request,
            body: JSON.parse('{}'),
          };
        } else {
          return {
            ...request,
          };
        }
      }
    );

    const newProbeData = probes.map((probe) => {
      return probe.id === probeId
        ? {
            ...probe,
            requests: [...foundRequest],
          }
        : probe;
    });

    setProbes(newProbeData);
  };

  const handleUpdateProbeRequestHeaderKey = (
    probeId: string,
    requestIndex: number,
    headerIndex: number,
    key: string
  ) => {
    const foundProbe = probes.find((data) => data.id === probeId);
    const foundRequest = (foundProbe as Probe).requests.map(
      (request, index) => {
        const newHeaders = Object.entries(request.headers).map(([k, v], i) => {
          return i === headerIndex ? [key, v] : [k, v];
        });

        return index === requestIndex
          ? {
              ...request,
              headers: Object.fromEntries(newHeaders),
            }
          : request;
      }
    );

    const newProbeData = probes.map((probe) => {
      return probe.id === probeId
        ? {
            ...probe,
            requests: [...foundRequest],
          }
        : probe;
    });

    setProbes(newProbeData);
  };

  const handleUpdateProbeRequestHeaderValue = (
    probeId: string,
    requestIndex: number,
    headerIndex: number,
    value: string
  ) => {
    const foundProbe = probes.find((data) => data.id === probeId);
    const foundRequest = (foundProbe as Probe).requests.map(
      (request, index) => {
        const newHeaders = Object.entries(request.headers).map(([k, v], i) => {
          return i === headerIndex ? [k, value] : [k, v];
        });

        return index === requestIndex
          ? {
              ...request,
              headers: Object.fromEntries(newHeaders),
            }
          : request;
      }
    );

    const newProbeData = probes.map((probe) => {
      return probe.id === probeId
        ? {
            ...probe,
            requests: [...foundRequest],
          }
        : probe;
    });

    setProbes(newProbeData);
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

  const handleUpdateProbeRequestBody = (data: UpdateProbeRequestData) => {
    const [selectedProbe] = probes.filter((probe) => probe.id === data.id);
    const selectedProbeRequest = selectedProbe?.requests.find(
      (_, index) => index === data.index
    );
    const selectedProbeRequestData = (selectedProbeRequest ?? {}) as any;

    try {
      selectedProbeRequestData[data.field] = JSON.parse(data.value);
    } catch (error) {
      selectedProbeRequestData[data.field] = JSON.parse('{}');
    }

    const newProbeRequests = selectedProbe?.requests.map((request, idx) => {
      return idx !== data.index ? request : selectedProbeRequestData;
    });

    const probeData = probes.map((probe) => {
      return probe.id === data.id
        ? {
            ...probe,
            requests: newProbeRequests,
          }
        : probe;
    });

    setProbes(probeData);
  };

  const handleRemoveProbe = (id: string) => {
    const probeData = probes.filter((data) => data.id !== id);

    setProbes(probeData);
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

  const handleRemoveProbeRequestHeader = (
    probeId: string,
    headerIndex: number
  ) => {
    const foundProbe = probes.find((data) => data.id === probeId);
    const filteredRequest = (foundProbe as Probe).requests.map((request) => {
      const newHeaders = Object.entries(request.headers).filter((_, i) => {
        return i !== headerIndex;
      });

      return {
        ...request,
        headers: Object.fromEntries(newHeaders),
      };
    });

    const newProbeData = probes.map((probe) => {
      return probe.id === probeId
        ? {
            ...probe,
            requests: [...filteredRequest],
          }
        : probe;
    });

    setProbes(newProbeData);
  };

  const handleAddProbeAlert = (probeId: string) => {
    const newProbeData = probes.map((probe) => {
      return probe.id === probeId
        ? {
            ...probe,
            alerts: probe.alerts.concat([
              { query: '', subject: '', message: '' },
            ]),
          }
        : probe;
    });

    setProbes(newProbeData);
  };

  const handleUpdateProbeAlert = (
    probeId: string,
    alertIndex: number,
    field: keyof ProbeAlert,
    value: string
  ) => {
    const foundProbe = probes.find((probe) => probe.id === probeId);

    if (!foundProbe) return;

    const updatedAlerts = foundProbe.alerts.slice();
    updatedAlerts.splice(alertIndex, 1, {
      ...foundProbe.alerts[alertIndex],
      [field]: value,
    });

    const newProbeData = probes.map((probe) => {
      return probe.id === probeId
        ? {
            ...probe,
            alerts: updatedAlerts,
          }
        : probe;
    });

    setProbes(newProbeData);
  };

  const handleRemoveProbeAlert = (probeId: string, alertIndex: number) => {
    const foundProbe = probes.find((probe) => probe.id === probeId);

    if (!foundProbe) return;

    const updatedAlerts = foundProbe.alerts.slice();
    updatedAlerts.splice(alertIndex, 1);

    const newProbeData = probes.map((probe) => {
      return probe.id === probeId
        ? {
            ...probe,
            alerts: updatedAlerts,
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
        handleAddProbeRequest,
        handleAddProbeRequestHeader,
        handleUpdateProbeData,
        handleUpdateProbeRequestPosition,
        handleUpdateProbeRequestData,
        handleUpdateProbeRequestBody,
        handleUpdateProbeRequestEnableBody,
        handleUpdateProbeRequestHeaderKey,
        handleUpdateProbeRequestHeaderValue,
        handleRemoveProbe,
        handleRemoveProbeRequest,
        handleRemoveProbeRequestHeader,
        handleAddProbeAlert,
        handleUpdateProbeAlert,
        handleRemoveProbeAlert,
      }}>
      {children}
    </ProbeContext.Provider>
  );
};

export { ProbeProvider, ProbeContext };
