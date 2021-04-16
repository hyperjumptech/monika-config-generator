import {
  FunctionComponent,
  InputHTMLAttributes,
  useState,
  useContext,
} from 'react';
import { TextInput, Checkbox } from '..';
import { ProbeContext } from '../../contexts/probe-context';

export interface ProbeResponseTimeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  probeId: string;
}

const ProbeResponseTime: FunctionComponent<ProbeResponseTimeProps> = ({
  probeId,
}) => {
  const { handleUpdateProbeResponseTimeAlert } = useContext(ProbeContext);
  const [responseTime, setResponseTime] = useState(2000);
  const [checked, setChecked] = useState(true);

  const handleUpdateResponseTime = (
    probeId: string,
    value: number,
    checked: boolean
  ) => {
    setResponseTime(value);
    setChecked(checked);
    handleUpdateProbeResponseTimeAlert(probeId, value, checked);
  };

  return (
    <Checkbox
      name={`probe_${probeId}_response_time`}
      value="response-time"
      help="Response time is longer than xxx milliseconds"
      defaultChecked={true}
      checked={true}
      onChange={(e) =>
        handleUpdateResponseTime(probeId, responseTime, e.target.checked)
      }>
      <div className="flex flex-row align-middle items-center space-x-4">
        <span>Response time is longer than</span>
        <TextInput
          id={`probe_${probeId}_response_time_value`}
          type="number"
          placeholder="2000"
          className="w-full md:w-64"
          value={responseTime}
          disabled={!checked}
          onChange={(e) =>
            handleUpdateResponseTime(probeId, e.target.valueAsNumber, checked)
          }
        />
        <span>milliseconds</span>
      </div>
    </Checkbox>
  );
};

export default ProbeResponseTime;
