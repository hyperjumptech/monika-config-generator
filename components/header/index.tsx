type HeaderProps = {
  isMobileMenuCollapsed?: boolean;
  onMobileMenuCollapsedChange?: (isMobileMenuCollapsed: boolean) => void;
};

export default function Header({
  isMobileMenuCollapsed,
  onMobileMenuCollapsedChange = () => {},
}: HeaderProps): JSX.Element {
  return (
    <header className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Monika Configuration Generator</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/monika-logo.svg"
                alt="Monika Logo"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
              onClick={() => onMobileMenuCollapsedChange(true)}
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="https://hyperjumptech.github.io/monika/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-base font-medium text-gray-400 hover:text-gray-900"
            >
              Documentation
            </a>
            <a
              href="https://hyperjumptech.github.io/monika"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-800"
            >
              Get Monika
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state. */}
      <div
        className={
          isMobileMenuCollapsed
            ? "absolute top-0 inset-x-0 p-2 transition transform origin-top-right duration-200 ease-out md:hidden"
            : "transition duration-100 ease-in hidden"
        }
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="/monika-logo.svg"
                  alt="Monika Logo"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                  onClick={() => onMobileMenuCollapsedChange(false)}
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a
                  href="https://hyperjumptech.github.io/monika/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="text-base font-medium text-gray-900">
                    Documentation
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <a
                href="https://hyperjumptech.github.io/monika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-800"
              >
                Get Monika
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                © Hyperjump Technology 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
