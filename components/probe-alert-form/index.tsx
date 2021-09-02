import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProbeAlert } from '@hyperjumptech/monika/lib/interfaces/probe';
import { FunctionComponent, useContext } from 'react';
import { TextInput } from '..';
import { ProbeContext } from '../../contexts/probe-context';

export interface ProbeAlertFormProps {
  probeId: string;
  alertIndex: number;
  alert: ProbeAlert;
  isDeleteDisabled?: boolean;
}

const ProbeAlertForm: FunctionComponent<ProbeAlertFormProps> = ({
  probeId,
  alertIndex,
  alert,
  isDeleteDisabled,
}) => {
  const { handleUpdateProbeAlert, handleRemoveProbeAlert } =
    useContext(ProbeContext);

  return (
    <div className="w-auto p-4 lg:p-8 rounded-md bg-gray-900 bg-opacity-50 border border-solid border-gray-300 space-y-8">
      <div className="flex justify-end">
        {!isDeleteDisabled && (
          <button
            type="button"
            onClick={() => handleRemoveProbeAlert(probeId, alertIndex)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>

      <div>
        <div className="w-full flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <span className="block w-16">Query</span>
          <TextInput
            id={`probe_${probeId}_alert_${alertIndex}_query_value`}
            type="text"
            placeholder="example: response.status == 500"
            className="flex-1"
            value={alert.query}
            onChange={(event) =>
              handleUpdateProbeAlert(
                probeId,
                alertIndex,
                'query',
                event.target.value
              )
            }
          />
        </div>
        <p className="lg:ml-20 text-gray-500">
          The alert will be triggered if the query expression is evaluated to
          true
        </p>
      </div>

      <div className="w-full flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
        <span className="block w-16">Subject</span>
        <TextInput
          id={`probe_${probeId}_alert_${alertIndex}_subject_value`}
          type="text"
          placeholder="Subject of sent notification"
          className="flex-1"
          value={alert.subject}
          onChange={(event) =>
            handleUpdateProbeAlert(
              probeId,
              alertIndex,
              'subject',
              event.target.value
            )
          }
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
        <span className="block w-16">Message</span>
        <TextInput
          id={`probe_${probeId}_alert_${alertIndex}_message_value`}
          type="text"
          placeholder="Message of sent notification"
          className="flex-1"
          value={alert.message}
          onChange={(event) =>
            handleUpdateProbeAlert(
              probeId,
              alertIndex,
              'message',
              event.target.value
            )
          }
        />
      </div>
    </div>
  );
};

export default ProbeAlertForm;
