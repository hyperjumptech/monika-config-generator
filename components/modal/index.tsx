import { Button } from '../';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function Modal({ visible, onClose }: ModalProps): JSX.Element {
  // TODO: this hardcoded jsonConfig variable will be replaced with value from context that will be worked om #14: https://github.com/hyperjumptech/monika-config-generator/issues/14
  const jsonConfig = {
    notifications: [
      {
        id: 'unique-id-smtp',
        type: 'smtp',
        data: {
          recipients: ['YOUR_EMAIL_ADDRESS_HERE'],
          hostname: 'smtp.gmail.com',
          port: 587,
          username: 'YOUR_GMAIL_ACCOUNT',
          password: 'YOUR_GMAIL_PASSWORD_OR_APP_PASSWORD',
        },
      },
    ],
    probes: [
      {
        id: '1',
        name: 'Monika Landing Page',
        description: 'Landing page of awesome Monika',
        interval: 10,
        requests: [
          {
            url: 'https://hyperjumptech.github.io/monika',
            timeout: 7000,
          },
        ],
        alerts: ['status-not-2xx'],
      },
    ],
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        visible ? '' : 'hidden'
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={onClose}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"></div>

        {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
              <div className="float-right">
                <Button
                  outline
                  onClick={() => {
                    navigator.clipboard.writeText(
                      JSON.stringify(jsonConfig, null, 2)
                    );
                    alert('Config copied to clipboard');
                  }}>
                  Copy to clipboard
                </Button>
              </div>
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title">
                Configuration File
              </h3>
              <div className="bg-gray-100 rounded-xl my-8 px-4 py-3 sm:px-6 justify-end sm:flex sm:flex-row-reverse">
                <pre className="overflow-x-auto">
                  {JSON.stringify(jsonConfig, null, 2)}
                </pre>
              </div>
              <div className="mt-2">
                <b>How to use</b>
                <ol className="list-decimal list-inside py-3">
                  <li>Create a file called config.json</li>
                  <li>Fill it up with the generated configuration above</li>
                  <li>Run monika</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 justify-center sm:flex sm:flex-row-reverse">
            <Button onClick={onClose}>Done</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
