export default function ProductSkeletonCard () {
  return (
    <div className="flex flex-col xl:flex-row animate-pulse xl:h-96 h-full opacity-70">
      <div className="xl:w-[933px] xl:h-[450px] h-1/2 w-full bg-slate-700"></div>
      <div className="w-full ml-8">
        <div className="w-3/5 h-6 mt-6  bg-slate-700"></div>
        <div className="w-1/2 h-6 mt-6 bg-slate-700"></div>
        <div className="w-1/3 h-6 mt-6 bg-slate-700"></div>
        <div className="w-1/2 h-6 mt-6 bg-slate-700"></div>
        <div className="w-1/3 h-6 mt-6 bg-slate-700"></div>
      </div>
    </div>
  )
}