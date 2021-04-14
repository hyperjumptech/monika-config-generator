import React, { FunctionComponent, useContext } from 'react';

import {
  faTrash,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TextInput } from '../';
import { ProbeContext } from '../../contexts/ProbeContext';
import Select, { SelectOption } from '../select';
import Textarea from '../textarea';
import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';
import Button from '../button';
import Checkbox from '../checkbox';

export interface ProbeCardProps {
  id: string;
  probe: Probe;
}

const NotifCard: FunctionComponent<ProbeCardProps> = ({ probe, id }) => {
  const {
    probeData,
    handleUpdateProbeData,
    handleRemoveProbe,
    handleAddProbeRequest,
    handleRemoveProbeRequest,
  } = useContext(ProbeContext);

  return (
    <div className="border border-solid rounded-md mb-8">
      <div className="flex flex-row items-center justify-between p-4 bg-gray-50 border-b">
        <p>Probe ID : {id}</p>
        {probeData.length > 1 && (
          <button onClick={() => handleRemoveProbe(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
      <div className="p-4 ">
        <form>
          <fieldset>
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
              />
              <p className="text-sm sm:text-lg">Requests</p>
              {(probe as Probe).requests.map((item, index) => (
                <div
                  className="w-full p-8 rounded-md bg-gray-100 border border-solid border-gray-300 space-y-8"
                  key={index}>
                  <div className="flex flex-row align-middle justify-between">
                    <div className="flex align-middle">#{index + 1}</div>
                    <div className="flex align-middle space-x-4">
                      <button>
                        <FontAwesomeIcon icon={faArrowUp} />
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faArrowDown} />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-8">
                    <div className="w-8/12">
                      <TextInput
                        id={`probe_${id}_request_${index}_url`}
                        placeholder="https://github.com"
                      />
                    </div>
                    <div className="w-4/12">
                      <Select id={`probe_${id}_method`}>
                        <SelectOption value="GET">GET</SelectOption>
                        <SelectOption value="POST">POST</SelectOption>
                      </Select>
                    </div>
                  </div>
                  <button className="w-full border-4 border-dashed rounded-md p-4">
                    <p>Add header</p>
                  </button>
                  <div className="flex flex-row items-center space-x-8">
                    <p>Body</p>
                    <div className="w-full sm:w-3/12">
                      <Select id={`probe_${id}_content_type`}>
                        <SelectOption value="JSON">JSON</SelectOption>
                      </Select>
                    </div>
                  </div>
                  <Textarea placeholder="{ }" id={`probe_${id}_body`} />
                  {probe.requests.length > 1 && (
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        onClick={() => handleRemoveProbeRequest(id, index)}>
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddProbeRequest(id)}
                className="w-full border-4 border-dashed rounded-md p-4">
                <p>Add another request</p>
              </button>
              <div className="flex flex-col space-y-8">
                <p className="font-bold text-sm sm:text-lg">Advanced</p>
                <div className="flex flex-row items-center justify-start space-x-8">
                  <p className="text-sm sm:text-lg">Interval</p>
                  <TextInput
                    id={`probe_${id}_interval`}
                    type="number"
                    placeholder="10"
                    value={probe.interval}
                    className="w-full md:w-64"
                    onChange={(event) => {
                      handleUpdateProbeData({
                        id,
                        field: 'interval',
                        value: event.target.value,
                      });
                    }}
                  />
                  <p className="text-sm sm:text-lg">seconds</p>
                </div>
                <div className="flex flex-row items-center justify-start space-x-8">
                  <p className="text-sm sm:text-lg">Timeout</p>
                  <TextInput
                    id={`probe_${id}_timeout`}
                    type="number"
                    placeholder="10"
                    value={probe.interval}
                    className="w-full md:w-64"
                    onChange={(event) => {
                      handleUpdateProbeData({
                        id,
                        field: 'interval',
                        value: event.target.value,
                      });
                    }}
                  />
                  <p className="text-sm sm:text-lg">seconds</p>
                </div>
                <div className="flex flex-col space-y-4 space-x-4">
                  <p className="text-sm sm:text-lg">Notify on</p>
                  <Checkbox
                    name={`probe_${id}_status_not_2xx`}
                    value="status-not-2xx"
                    help="Checks if status code is not 2xx (200-204)">
                    Status Code not 2XX (Not Success)
                  </Checkbox>
                  <Checkbox
                    name={`probe_${id}_response-time`}
                    value="status-not-2xx"
                    help="Response time is longer than">
                    Response time is longer than
                  </Checkbox>
                </div>
                <div className="flex flex-row items-center justify-start space-x-8">
                  <p className="text-sm sm:text-lg">Threshold</p>
                  <TextInput
                    id={`probe_${id}_threshold`}
                    type="number"
                    placeholder="10"
                    value={probe.interval}
                    className="w-full md:w-64"
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
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default NotifCard;
