import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../button';

type HeaderProps = {
  isMobileMenuCollapsed?: boolean;
  onMobileMenuCollapsedChange?: (isMobileMenuCollapsed: boolean) => void;
};

export default function Header({
  isMobileMenuCollapsed,
  onMobileMenuCollapsedChange = () => true,
}: HeaderProps): JSX.Element {
  return (
    <header className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-auto">
            <Link href="/">
              <a>
                <span className="sr-only">Monika Configuration Generator</span>
                <img
                  className="w-auto h-4"
                  src="/monika.svg"
                  alt="Monika Logo"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
              onClick={() => onMobileMenuCollapsedChange(true)}>
              <span className="sr-only">Open menu</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ul className="flex flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-white font-sans font-bold leading-snug hover:opacity-75"
                  href="https://monika.hyperjump.tech/overview">
                  <span className="ml-2">Docs</span>
                </a>
              </li>
              <li className="nav-item">
                <span className="ml-2 px-3 py-2 flex items-center text-white font-sans underline font-bold leading-snug hover:opacity-75">
                  Config Generator
                </span>
              </li>
              <li className="nav-item">
                <a
                  href="https://whatsapp.hyperjump.tech/"
                  className="px-3 py-2 flex items-center text-white font-sans font-bold leading-snug hover:opacity-75">
                  <span className="ml-2">WhatsApp Notifier</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-white font-sans font-bold leading-snug hover:opacity-75"
                  href="https://github.com/hyperjumptech/monika/discussions"
                  target="_blank">
                  <span className="ml-2">Discuss</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-white font-sans font-bold leading-snug hover:opacity-75"
                  href="https://hyperjump.tech/"
                  target="_blank">
                  <span className="ml-2">Hyperjump</span>
                </a>
              </li>
              <li>
                <Button>
                  <a
                    href="https://github.com/hyperjumptech/monika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center rounded-md shadow-sm text-base font-medium">
                    <svg
                      className="h-6 w-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>{' '}
                    Github
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state. */}
      <div
        data-testid="mobile-menu"
        className={
          isMobileMenuCollapsed
            ? 'z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right duration-200 ease-out md:hidden'
            : 'transition duration-100 ease-in hidden'
        }>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-4 w-auto"
                  src="/monika.svg"
                  alt="Monika Logo"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                  onClick={() => onMobileMenuCollapsedChange(false)}>
                  <span className="sr-only">Close menu</span>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <ul className="flex flex-col list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-black font-sans font-bold leading-snug hover:opacity-75"
                    href="https://monika.hyperjump.tech/overview">
                    <span className="ml-2">Docs</span>
                  </a>
                </li>
                <li className="nav-item">
                  <span className="ml-2 px-3 py-2 flex items-center text-black font-sans underline font-bold leading-snug hover:opacity-75">
                    Config Generator
                  </span>
                </li>
                <li className="nav-item">
                  <a
                    href="https://whatsapp.hyperjump.tech/"
                    className="px-3 py-2 flex items-center text-black font-sans font-bold leading-snug hover:opacity-75">
                    <span className="ml-2">WhatsApp Notifier</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-black font-sans font-bold leading-snug hover:opacity-75"
                    href="https://github.com/hyperjumptech/monika/discussions"
                    target="_blank">
                    <span className="ml-2">Discuss</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-black font-sans font-bold leading-snug hover:opacity-75"
                    href="https://hyperjump.tech/"
                    target="_blank">
                    <span className="ml-2">Hyperjump</span>
                  </a>
                </li>
                <li>
                  <Button>
                    <a
                      href="https://github.com/hyperjumptech/monika"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-md shadow-sm text-base font-medium">
                      <svg
                        className="h-6 w-6 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>{' '}
                      Github
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
