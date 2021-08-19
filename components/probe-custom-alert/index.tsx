import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { TextInput } from '..';

export interface ProbeCustomAlertProps {
  probeId: string;
}

const ProbeCustomAlert: FunctionComponent<ProbeCustomAlertProps> = ({
  probeId,
}) => {
  return (
    <div className="w-auto p-4 lg:p-8 rounded-md bg-gray-900 bg-opacity-50 border border-solid border-gray-300 space-y-8">
      <div className="flex justify-end">
        <button type="button" disabled className="cursor-not-allowed">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>

      <div className="flex-1 w-full flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
        <span className="block w-16">Query</span>
        <TextInput
          id={`probe_${probeId}_custom_alert_query_value`}
          type="text"
          placeholder="example: response.status == 500"
          className="flex-1"
        />
      </div>
      <div className="flex-1 w-full flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
        <span className="block w-16">Subject</span>
        <TextInput
          id={`probe_${probeId}_custom_alert_subject_value`}
          type="text"
          placeholder="Subject of sent notification"
          className="flex-1"
        />
      </div>
      <div className="flex-1 w-full flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
        <span className="block w-16">Message</span>
        <TextInput
          id={`probe_${probeId}_custom_alert_message_value`}
          type="text"
          placeholder="Message of sent notification"
          className="flex-1"
        />
      </div>
    </div>
  );
};

export default ProbeCustomAlert;
