import {
  InputHTMLAttributes,
  FunctionComponent,
  useState,
  useContext,
} from 'react';
import { TextInput } from '..';
import { ProbeContext } from '../../contexts/probe-context';

export interface ProbeResponseTimeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  probeId: string;
}

const ProbeThreshold: FunctionComponent<ProbeResponseTimeProps> = ({
  probeId,
}) => {
  const { handleUpdateProbeData } = useContext(ProbeContext);
  const [threshold, setThreshold] = useState(5);
  const onThresholdChange = (value: string) => {
    setThreshold(parseInt(value, 10));
    handleUpdateProbeData({
      id: probeId,
      field: 'incidentThreshold',
      value,
    });
    handleUpdateProbeData({
      id: probeId,
      field: 'recoveryThreshold',
      value,
    });
  };

  return (
    <TextInput
      id={`probe_${probeId}_threshold`}
      type="number"
      placeholder="5"
      min="1"
      value={threshold}
      onWheel={(e) => (e.target as any).blur()}
      onChange={(event) => onThresholdChange(event.target.value)}
    />
  );
};

export default ProbeThreshold;
