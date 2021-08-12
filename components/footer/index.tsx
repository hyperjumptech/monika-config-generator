export default function Footer(): JSX.Element {
  return (
    <footer
      className={`flex flex-col lg:flex-row justify-around text-white pt-16 pb-16 px-16`}>
      <a
        className="flex flex-col lg:flex-row"
        href="https://monika.hyperjump.tech/">
        <img className="w-16 h-4 mt-1" src="/monika.svg" alt="Monika Logo" />
      </a>
      <div className="flex flex-col mt-4 lg:mt-0">
        <p className="font-bold">Resources</p>
        <a
          className="text-xs pt-2"
          href="https://monika.hyperjump.tech/overview"
          target="_blank"
          rel="noopener noreferrer">
          Documentation
        </a>
        <a
          className="text-xs pt-1"
          href="https://monika.hyperjump.tech/examples"
          target="_blank"
          rel="noopener noreferrer">
          Example
        </a>
        <a
          className="text-xs pt-1"
          href="https://monika-config.hyperjump.tech/"
          target="_blank"
          rel="noopener noreferrer">
          Config Generator
        </a>
        <a className="text-xs pt-1" href="#">
          WhatsApp Notifier
        </a>
      </div>
      <div className="flex flex-col mt-2 lg:mt-0">
        <p className="font-bold">Community</p>
        <a
          className="text-xs pt-2"
          href={'https://github.com/hyperjumptech/monika/discussions'}
          target="_blank"
          rel="noopener noreferrer">
          Discussion
        </a>
        <a
          className="text-xs pt-1"
          href={'https://github.com/hyperjumptech/monika/releases'}
          target="_blank"
          rel="noopener noreferrer">
          Releases
        </a>
        <a
          className="text-xs pt-1"
          href="https://www.npmjs.com/package/@hyperjumptech/monika"
          target="_blank"
          rel="noopener noreferrer">
          NPM Homepage
        </a>
      </div>
      <div className="flex flex-col max-w-sm mt-8 lg:mt-0">
        <a
          className="font-bold"
          href="https://hyperjump.tech/"
          target="_blank"
          rel="noopener noreferrer">
          <img src="/hyperjump.svg" alt="Hyperjump Logo" />
        </a>
        <p className="text-xs pt-2">
          PT Artha Rajamas Mandiri (Hyperjump) is an open-source-first company
          providing engineering excellence service. We aim to build and
          commercialize open-source tools to help companies streamline,
          simplify, and secure the most important aspects of its modern DevOps
          practices.
        </p>
        <p className="text-xs pt-2">
          Copyright © {new Date().getFullYear()} Hyperjump Tech. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
