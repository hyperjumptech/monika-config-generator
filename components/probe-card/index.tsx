import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, useContext } from 'react';
import { TextInput } from '..';
import { ProbeContext } from '../../contexts/probe-context';
import { Probe } from '../../contexts/probe-context-interface';
import Checkbox from '../checkbox';
import ProbeCustomAlert from '../probe-custom-alert';
import ProbeRequestForm from '../probe-request-form';
import ProbeResponseTime from '../probe-response-time';
import ProbeThreshold from '../probe-threshold';

export interface ProbeCardProps {
  id: string;
  probe: Probe;
}

const ProbeCard: FunctionComponent<ProbeCardProps> = ({ probe, id }) => {
  const {
    probeData,
    handleAddProbeRequest,
    handleUpdateProbeData,
    handleUpdateProbeAlert,
    handleRemoveProbe,
  } = useContext(ProbeContext);

  const isAlertSelected = (alert: string) => {
    const exists = probe.alerts.filter(
      (item) => typeof item === 'string' && item.includes(alert)
    );
    if (exists.length > 0) return true;
    return false;
  };

  return (
    <div className="border border-solid rounded-md mb-8">
      <div className="flex flex-row items-center rounded-t-md justify-between p-4 bg-gray-900 bg-opacity-50 border-b">
        <p>Probe ID : {id?.split('-')[0]}</p>
        {probeData.length > 1 && (
          <button onClick={() => handleRemoveProbe(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
      <form>
        <fieldset className="p-2 md:p-4">
          <div key={id} className="space-y-8 flex flex-col">
            <TextInput
              label="Name"
              id={`probe_${id}_name`}
              placeholder="Home Page Probe"
              className="w-full md:w-6/12"
              onChange={(event) => {
                handleUpdateProbeData({
                  id,
                  field: 'name',
                  value: event.target.value,
                });
              }}
              value={probe.name}
            />
            <TextInput
              label="Description"
              id={`probe_${id}_description`}
              placeholder="Probe for Checking Home Page Downtime"
              className="w-full md:w-6/12"
              onChange={(event) => {
                handleUpdateProbeData({
                  id,
                  field: 'description',
                  value: event.target.value,
                });
              }}
              value={probe.description}
            />
            <p className="text-sm sm:text-lg">Requests</p>
            {(probe as Probe).requests.map((item, index, requests) => (
              <ProbeRequestForm
                probeId={id}
                request={item}
                requestIndex={index}
                requestArray={requests}
                key={index}
              />
            ))}
            <button
              type="button"
              onClick={() => handleAddProbeRequest(id)}
              className="w-full border-4 border-dashed rounded-md p-4">
              <p>Add another request</p>
            </button>
            <div className="flex flex-col space-y-4 lg:space-y-8">
              <p className="font-bold text-sm sm:text-lg">Advanced</p>
              <div className="flex flex-col lg:flex-row items-center justify-start space-x-8">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-sm sm:text-lg">Interval</p>
                    <p className="text-sm sm:text-lg text-gray-500">
                      (Seconds)
                    </p>
                  </div>
                  <TextInput
                    id={`probe_${id}_interval`}
                    type="number"
                    placeholder="10"
                    value={probe.interval}
                    onChange={(event) => {
                      handleUpdateProbeData({
                        id,
                        field: 'interval',
                        value: event.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 lg:space-y-4">
                <p className="text-sm sm:text-lg">Notify on (at least 1):</p>
                <Checkbox
                  name={`probe_${id}_status_not_2xx`}
                  value="status-not-2xx"
                  disabled={
                    probe.alerts?.length < 2 &&
                    isAlertSelected('status-not-2xx')
                  }
                  label="
                  Status Code not 2XX"
                  description="Checks if status code is not 2xx (200-299)"
                  defaultChecked={
                    probe?.alerts?.find((alert) => alert === 'status-not-2xx')
                      ? true
                      : false
                  }
                  onChange={(e) =>
                    handleUpdateProbeAlert(
                      id,
                      `status-not-2xx`,
                      e.target.checked
                    )
                  }></Checkbox>
                <ProbeResponseTime
                  probeId={id}
                  alert={
                    probe?.alerts?.find(
                      (alert) =>
                        typeof alert === 'string' &&
                        alert.includes('response-time-greater-than-')
                    ) as string | undefined
                  }
                  disabled={
                    probe.alerts?.length < 2 &&
                    isAlertSelected('response-time-greater-than')
                  }
                  defaultChecked={
                    probe?.alerts?.find(
                      (alert) =>
                        typeof alert === 'string' &&
                        alert.includes('response-time-greater-than-')
                    )
                      ? true
                      : false
                  }
                />
              </div>
              <p className="text-sm sm:text-lg text-gray-400">
                Define your own alert triggers below
              </p>
              <ProbeCustomAlert probeId={id} />
              <button
                type="button"
                onClick={() => handleAddProbeRequest(id)}
                className="w-full border-4 border-dashed rounded-md p-4">
                <p>Add another alert</p>
              </button>
              <div className="flex flex-col lg:flex-row lg:items-center justify-start lg:space-x-8">
                <p className="text-sm sm:text-lg">Threshold</p>
                <ProbeThreshold probeId={id} />
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ProbeCard;
