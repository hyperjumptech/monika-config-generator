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
  const { handleUpdateProbeAlert } = useContext(ProbeContext);
  const [responseTime, setResponseTime] = useState(10);

  return (
    <Checkbox
      name={`probe_${probeId}_response_time`}
      value="response-time"
      help="Response time is longer than xxx milliseconds"
      onChange={(e) =>
        handleUpdateProbeAlert(
          probeId,
          `response-time-greater-than-${responseTime}-ms`,
          e.target.checked
        )
      }>
      <div className="flex flex-row align-middle items-center space-x-4">
        <span>Response time is longer than</span>
        <TextInput
          id={`probe_${probeId}_response_time_value`}
          type="number"
          placeholder="10"
          className="w-full md:w-64"
          value={responseTime}
          onChange={(e) => setResponseTime(parseInt(e.target.value, 10))}
        />
        <span>milliseconds</span>
      </div>
    </Checkbox>
  );
};

export default ProbeResponseTime;
