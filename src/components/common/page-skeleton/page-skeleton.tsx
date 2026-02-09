/** Main Export */
const PageSkeleton = () => {

  const Rows = [1, 2, 3];

  return (
    <div className="flex-1 min-w-full p-5 animate-pulse">
      <div className="flex flex-col gap-5 min-w-full">
        {Rows?.map((row) => (
         <div key={row} className="grid grid-cols-5 gap-5 w-full items-stretch">
            <div className="h-8 bg-black/10 rounded" />
            <div className="h-8 bg-black/10 rounded" />
            <div className="h-8 bg-black/10 rounded" />
            <div className="h-8 bg-black/10 rounded" />
            <div className="h-8 bg-black/10 rounded " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSkeleton;