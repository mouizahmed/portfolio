const TimelineItem = ({ title, subtitle, timeline, note }) => {
  return (
    <article className="mb-4">
      <div className="sm:hidden">
        <div className="flex items-start justify-between gap-4">
          <div className="type-item-title">{title}</div>
          <span className="type-item-meta text-right whitespace-nowrap">{timeline}</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="type-item-meta">{subtitle}</span>
          {note ? <span className="text-xs text-gray-700 dark:text-gray-400">{note}</span> : null}
        </div>
      </div>
      <div className="hidden flex-row items-center justify-items-start sm:flex">
        <div className="w-6/12">
          <div className="type-item-title">{title}</div>
          <div className="flex items-center gap-2">
            <span className="type-item-meta whitespace-nowrap">{subtitle}</span>
            {note ? <span className="text-xs text-gray-700 dark:text-gray-400">{note}</span> : null}
          </div>
        </div>
        <span className="mx-4 mb-4 hidden w-full grow shrink self-end border-t border-dashed border-gray-400 opacity-0 dark:border-gray-500 sm:block md:opacity-100" />
        <span className="type-item-meta text-right whitespace-nowrap">{timeline}</span>
      </div>
    </article>
  );
};

export default TimelineItem;
