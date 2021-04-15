import React, { FunctionComponent, useContext } from 'react';

import {
  faTrash,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TextInput } from '..';
import { ProbeContext } from '../../contexts/probe-context';
import Select, { SelectOption } from '../select';
import Textarea from '../textarea';
import Checkbox from '../checkbox';
import { Probe } from '@hyperjumptech/monika/lib/interfaces/probe';
import { RequestConfig } from '@hyperjumptech/monika/lib/interfaces/request';
import ProbeResponseTime from '../probe-response-time/probe-response-time';

export interface ProbeCardProps {
  id: string;
  probe: Probe;
}

const ProbeCard: FunctionComponent<ProbeCardProps> = ({ probe, id }) => {
  const {
    probeData,
    handleAddProbeRequest,
    handleAddProbeRequestHeader,
    handleUpdateProbeData,
    handleUpdateProbeAlert,
    handleUpdateProbeRequestData,
    handleUpdateProbeRequestPosition,
    handleUpdateProbeRequestHeaderKey,
    handleUpdateProbeRequestHeaderValue,
    handleRemoveProbe,
    handleRemoveProbeRequestHeader,
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
              {(probe as Probe).requests.map((item, index, requests) => (
                <div
                  className="w-full p-8 rounded-md bg-gray-100 border border-solid border-gray-300 space-y-8"
                  key={index}>
                  <div className="flex flex-row align-middle justify-between">
                    <div className="flex align-middle">#{index + 1}</div>
                    <div className="flex align-middle space-x-4">
                      {index !== 0 && (
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateProbeRequestPosition(
                              id,
                              index,
                              index - 1
                            )
                          }>
                          <FontAwesomeIcon icon={faArrowUp} />
                        </button>
                      )}
                      {index !== requests.length - 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateProbeRequestPosition(
                              id,
                              index,
                              index + 1
                            )
                          }>
                          <FontAwesomeIcon icon={faArrowDown} />
                        </button>
                      )}
                      {requests.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveProbeRequest(id, index)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row space-x-8">
                    <div className="w-8/12">
                      <TextInput
                        id={`probe_${id}_request_${index}_url`}
                        placeholder="https://github.com"
                        value={item.url}
                        onChange={(event) =>
                          handleUpdateProbeRequestData({
                            id,
                            index,
                            field: 'url',
                            value: event.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="w-4/12">
                      <Select
                        id={`probe_${id}_method`}
                        value={item.method}
                        onChange={(event) =>
                          handleUpdateProbeRequestData({
                            id,
                            index,
                            field: 'method',
                            value: event.target.value,
                          })
                        }>
                        <SelectOption value="GET">GET</SelectOption>
                        <SelectOption value="POST">POST</SelectOption>
                        <SelectOption value="PUT">PUT</SelectOption>
                        <SelectOption value="PATCH">PATCH</SelectOption>
                        <SelectOption value="DELETE">DELETE</SelectOption>
                        <SelectOption value="OPTIONS">OPTIONS</SelectOption>
                        <SelectOption value="HEAD">HEAD</SelectOption>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-8">
                    <p>Headers</p>
                    {Object.keys((item as RequestConfig).headers).map(
                      (header, idx) => (
                        <div className="flex flex-row space-x-8" key={idx}>
                          <TextInput
                            id={`probe_${id}_request_${index}_headers_${idx}`}
                            value={header}
                            onChange={(event) =>
                              handleUpdateProbeRequestHeaderKey(
                                id,
                                index,
                                idx,
                                event.target.value
                              )
                            }
                          />
                          <TextInput
                            id={`probe_${id}_request_${index}_headers_${idx}_value`}
                            value={(item as RequestConfig).headers[header]}
                            onChange={(event) =>
                              handleUpdateProbeRequestHeaderValue(
                                id,
                                index,
                                idx,
                                event.target.value
                              )
                            }
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveProbeRequestHeader(id, idx)
                            }>
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      )
                    )}
                    <button
                      type="button"
                      onClick={() => handleAddProbeRequestHeader(id, index)}
                      className="w-full border-4 border-dashed rounded-md p-4">
                      <p>Add header</p>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-8">
                    <div className="flex items-center space-x-8 flex-row">
                      <p>Body</p>
                      <div className="w-full sm:w-3/12">
                        <Select id={`probe_${id}_content_type`}>
                          <SelectOption value="JSON">JSON</SelectOption>
                        </Select>
                      </div>
                    </div>
                    <Textarea
                      placeholder="{ }"
                      id={`probe_${id}_body`}
                      defaultValue={JSON.stringify(item.body)}
                      onChange={(event) =>
                        handleUpdateProbeRequestData({
                          id,
                          index,
                          field: 'body',
                          value: event.target.value,
                        })
                      }
                    />
                    <div className="flex flex-row items-center justify-start space-x-8">
                      <p className="text-sm sm:text-lg">Timeout</p>
                      <TextInput
                        id={`probe_${id}_timeout`}
                        type="number"
                        placeholder="10"
                        min={1}
                        value={item.timeout}
                        className="w-full md:w-64"
                        onChange={(event) => {
                          handleUpdateProbeRequestData({
                            id,
                            index,
                            field: 'timeout',
                            value: event.target.value,
                          });
                        }}
                      />
                      <p className="text-sm sm:text-lg">seconds</p>
                    </div>
                  </div>
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
                <div className="flex flex-col space-y-4 space-x-4">
                  <p className="text-sm sm:text-lg">Notify on</p>
                  <Checkbox
                    name={`probe_${id}_status_not_2xx`}
                    value="status-not-2xx"
                    help="Checks if status code is not 2xx (200-204)"
                    onChange={(e) =>
                      handleUpdateProbeAlert(
                        id,
                        `status-not-2xx`,
                        e.target.checked
                      )
                    }>
                    Status Code not 2XX (Not Success)
                  </Checkbox>
                  <ProbeResponseTime probeId={id} />
                </div>
                <div className="flex flex-row items-center justify-start space-x-8">
                  <p className="text-sm sm:text-lg">Threshold</p>
                  <TextInput
                    id={`probe_${id}_threshold`}
                    type="number"
                    placeholder="10"
                    value={probe.incidentThreshold}
                    className="w-full md:w-64"
                    onChange={(event) => {
                      handleUpdateProbeData({
                        id,
                        field: 'incidentThreshold',
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

export default ProbeCard;
