import React, { FunctionComponent, useContext } from 'react';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TextInput } from '../';
import { ProbeContext } from '../../contexts/ProbeContext';

export interface ProbeCardProps {
  id: string;
}

const NotifCard: FunctionComponent<ProbeCardProps> = ({ id }) => {
  const { probeData, handleUpdateProbeData, handleRemoveProbe } = useContext(
    ProbeContext
  );

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
      <div className="p-4 md:w-8/12 lg:w-6/12">
        <form>
          <fieldset>
            <div key={id} className="space-y-8 flex flex-col">
              <TextInput
                label="Name"
                id={`data${id}_url`}
                placeholder="Home Page Probe"
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
                id={`data${id}_url`}
                placeholder="Probe for Checking Home Page Downtime"
                onChange={(event) => {
                  handleUpdateProbeData({
                    id,
                    field: 'description',
                    value: event.target.value,
                  });
                }}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default NotifCard;
