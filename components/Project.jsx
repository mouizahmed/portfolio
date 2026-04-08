import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const Project = ({ projectLink, projectName, projectSubtitle, tags, description }) => {
  return (
    <article className="space-y-2">
      <div>
        <h4 className="type-item-title">{projectSubtitle || projectName}</h4>
        {projectLink ? (
          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-sm text-blue-500 transition-opacity hover:underline dark:text-blue-400"
          >
            {projectName}
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        ) : (
          <p className="type-item-meta mt-1">{projectName}</p>
        )}
      </div>
      <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-500">{tags.join(' / ')}</p>
      <p className="type-body">{description}</p>
    </article>
  );
};

export default Project;
