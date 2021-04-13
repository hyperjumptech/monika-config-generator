import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer(): JSX.Element {
  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between items-center py-6 md:flex-row md:justify-start md:space-x-10">
        <div className="flex justify-center text-gray-400 md:justify-start lg:w-0 lg:flex-1">
          © Hyperjump Technology 2021
        </div>
        <div className="flex justify-center items-center space-x-8 mt-2 md:mt-0 md:justify-end md:flex-1 lg:w-0">
          <a
            href="https://www.linkedin.com/company/hyperjump"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-2xl font-medium text-gray-400 hover:text-gray-900">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://medium.com/hyperjump-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-2xl font-medium text-gray-400 hover:text-gray-900">
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a
            href="https://github.com/hyperjumptech"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-2xl font-medium text-gray-400 hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}
