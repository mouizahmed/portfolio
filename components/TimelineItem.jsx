const TimelineItem = ({ title, subtitle, timeline, note }) => {
  return (
    <article className="mb-4 flex flex-row items-center justify-items-start">
      <div className="w-6/12">
        <div className="type-item-title">{title}</div>
        <div className="flex items-center gap-2">
          <span className="type-item-meta whitespace-nowrap">{subtitle}</span>
          {note ? <span className="text-xs text-gray-700 dark:text-gray-400">{note}</span> : null}
        </div>
      </div>
      <span className="mx-4 mb-4 hidden w-full grow shrink self-end border-t border-dashed border-gray-400 opacity-0 dark:border-gray-500 sm:block md:opacity-100" />
      <span className="type-item-meta text-right sm:whitespace-nowrap">{timeline}</span>
    </article>
  );
};

export default TimelineItem;
