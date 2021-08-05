import { FunctionComponent, useContext } from 'react';
import { ProbeContext } from '../../contexts/probe-context';
import { RequestConfig } from '@hyperjumptech/monika/lib/interfaces/request';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowDown,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { TextInput, Select, SelectOption, Textarea } from '..';

export interface ProbeRequestFormProps {
  probeId: string;
  request: RequestConfig;
  requestIndex: number;
  requestArray: RequestConfig[];
}

const ProbeRequestForm: FunctionComponent<ProbeRequestFormProps> = ({
  probeId,
  request,
  requestIndex,
  requestArray,
}) => {
  const {
    handleAddProbeRequestHeader,
    handleUpdateProbeRequestPosition,
    handleUpdateProbeRequestData,
    handleUpdateProbeRequestBody,
    handleUpdateProbeRequestEnableBody,
    handleUpdateProbeRequestHeaderKey,
    handleUpdateProbeRequestHeaderValue,
    handleRemoveProbeRequestHeader,
    handleRemoveProbeRequest,
  } = useContext(ProbeContext);

  const validateJSON = (value: string) => {
    try {
      JSON.parse(value);
    } catch (e) {
      alert(e);
    }
  };

  const isJSON = (value: string) => {
    try {
      return !!JSON.parse(value);
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="w-auto p-4 lg:p-8 rounded-md bg-gray-900 bg-opacity-50 border border-solid border-gray-300 space-y-8">
      <div className="flex flex-row align-middle justify-between">
        <div className="flex align-middle">#{requestIndex + 1}</div>
        <div className="flex align-middle space-x-4">
          {requestIndex !== 0 && (
            <button
              type="button"
              onClick={() =>
                handleUpdateProbeRequestPosition(
                  probeId,
                  requestIndex,
                  requestIndex - 1
                )
              }>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          )}
          {requestIndex !== requestArray.length - 1 && (
            <button
              type="button"
              onClick={() =>
                handleUpdateProbeRequestPosition(
                  probeId,
                  requestIndex,
                  requestIndex + 1
                )
              }>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          )}
          {requestArray.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveProbeRequest(probeId, requestIndex)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-8">
        <div className="flex-grow lg:w-8/12">
          <TextInput
            id={`probe_${probeId}_request_${requestIndex}_url`}
            placeholder="https://github.com"
            value={request.url}
            onChange={(event) =>
              handleUpdateProbeRequestData({
                id: probeId,
                index: requestIndex,
                field: 'url',
                value: event.target.value,
              })
            }
          />
        </div>
        <div className="flex-grow lg:w-4/12">
          <Select
            id={`probe_${probeId}_method`}
            value={request.method}
            onChange={(event) =>
              handleUpdateProbeRequestData({
                id: probeId,
                index: requestIndex,
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
        {request.headers &&
          Object.keys((request as RequestConfig).headers).map((header, idx) => (
            <div className="flex flex-row space-x-8" key={idx}>
              <TextInput
                id={`probe_${probeId}_request_${requestIndex}_headers_${idx}`}
                value={header}
                onChange={(event) =>
                  handleUpdateProbeRequestHeaderKey(
                    probeId,
                    requestIndex,
                    idx,
                    event.target.value
                  )
                }
              />
              <TextInput
                id={`probe_${probeId}_request_${requestIndex}_headers_${idx}_value`}
                value={(request as RequestConfig).headers[header]}
                onChange={(event) =>
                  handleUpdateProbeRequestHeaderValue(
                    probeId,
                    requestIndex,
                    idx,
                    event.target.value
                  )
                }
              />
              <button
                type="button"
                onClick={() => handleRemoveProbeRequestHeader(probeId, idx)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))}
        <button
          type="button"
          onClick={() => handleAddProbeRequestHeader(probeId, requestIndex)}
          className="w-full border-4 border-dashed rounded-md p-4">
          <p>Add header</p>
        </button>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="flex items-center space-x-8 flex-row">
          <p>Body</p>
          <div className="w-full sm:w-3/12">
            <Select
              id={`probe_${probeId}_content_type`}
              onChange={(e) =>
                handleUpdateProbeRequestEnableBody(
                  probeId,
                  requestIndex,
                  e.target.value
                )
              }
              defaultValue={
                isJSON(JSON.stringify(request?.body)) ? 'JSON' : 'No Body'
              }>
              <SelectOption value="No Body">No Body</SelectOption>
              <SelectOption value="JSON">JSON</SelectOption>
            </Select>
          </div>
        </div>
        {isJSON(JSON.stringify(request?.body)) && (
          <Textarea
            placeholder="{ }"
            id={`probe_${probeId}_body`}
            onBlur={(event) => validateJSON(event.target.value)}
            value={JSON.stringify(request.body, null, 2)}
            onChange={(event) =>
              handleUpdateProbeRequestBody({
                id: probeId,
                index: requestIndex,
                field: 'body',
                value: event.target.value,
              })
            }
            rows={5}
          />
        )}
        <div className="flex flex-row items-center justify-start space-x-6">
          <div>
            <p className="text-sm sm:text-lg">Timeout</p>
            <p className="text-sm sm:text-lg text-gray-500">Milliseconds</p>
          </div>
          <TextInput
            id={`probe_${probeId}_timeout`}
            type="number"
            placeholder="10"
            min={1}
            value={request.timeout}
            className="w-full md:w-64"
            onChange={(event) => {
              handleUpdateProbeRequestData({
                id: probeId,
                index: requestIndex,
                field: 'timeout',
                value: event.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProbeRequestForm;
