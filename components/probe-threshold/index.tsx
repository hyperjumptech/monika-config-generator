import { InputHTMLAttributes, FunctionComponent, useContext } from 'react';
import { TextInput } from '..';
import { ProbeContext } from '../../contexts/probe-context';

export interface ProbeResponseTimeProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  probeId: string;
}

const ProbeThreshold: FunctionComponent<ProbeResponseTimeProps> = ({
  probeId,
}) => {
  const { handleUpdateProbeData, probeData } = useContext(ProbeContext);
  const probe = probeData.find((probe) => probe.id === probeId);
  const onThresholdChange = (value: string) => {
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
      value={Math.max(
        probe?.incidentThreshold || 0,
        probe?.recoveryThreshold || 0
      )}
      onWheel={(e) => (e.target as any).blur()}
      onChange={(event) => onThresholdChange(event.target.value)}
    />
  );
};

export default ProbeThreshold;
