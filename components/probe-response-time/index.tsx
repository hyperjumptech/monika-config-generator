import {
  FunctionComponent,
  InputHTMLAttributes,
  useState,
  useContext,
  useEffect,
} from 'react';
import { TextInput, Checkbox } from '..';
import { ProbeContext } from '../../contexts/probe-context';
import { parseAlertStringTime } from '../../utils/parse-alert-string-time';

export interface ProbeResponseTimeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  probeId: string;
  alert?: string;
  defaultChecked: boolean;
}

const ProbeResponseTime: FunctionComponent<ProbeResponseTimeProps> = ({
  probeId,
  alert,
  defaultChecked,
  disabled,
}) => {
  const { handleUpdateProbeResponseTimeAlert } = useContext(ProbeContext);
  const [responseTime, setResponseTime] = useState(0);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (alert) {
      const newResponseTime = parseAlertStringTime(alert);
      setResponseTime(newResponseTime);
    }
  }, [alert]);

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
      label="Response time is longer than"
      description="Milliseconds"
      defaultChecked={defaultChecked}
      checked={true}
      disabled={disabled}
      onChange={(e) =>
        handleUpdateResponseTime(probeId, responseTime, e.target.checked)
      }>
      <div className="flex flex-col lg:flex-row align-middle items-center space-x-4">
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
      </div>
    </Checkbox>
  );
};

export default ProbeResponseTime;
