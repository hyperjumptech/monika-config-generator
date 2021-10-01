import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';
import React, { FunctionComponent, useContext } from 'react';
import kebabCase from 'lodash.kebabcase';
import { TextInput } from '..';
import { ProbeContext } from '../../contexts/probe-context';
import ProbeAlertForm from '../probe-alert-form';
import ProbeRequestForm from '../probe-request-form';
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
    handleRemoveProbe,
    handleAddProbeAlert,
  } = useContext(ProbeContext);

  return (
    <div
      className="border border-solid rounded-md mb-8"
      // use id for scrolling from the sidebar
      id={`probe-${kebabCase(id)}`}>
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
                {probe.alerts.map((alert, index, alerts) => (
                  <ProbeAlertForm
                    key={index}
                    probeId={id}
                    alertIndex={index}
                    alert={alert}
                    isDeleteDisabled={alerts.length <= 1}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => handleAddProbeAlert(id)}
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
