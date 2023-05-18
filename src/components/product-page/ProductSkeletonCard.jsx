export default function ProductSkeletonCard () {
  return (
    <div className="flex flex-col xl:flex-row animate-pulse h-96 max-w-7xl  opacity-70">
      <div className="w-1/2 bg-slate-700"></div>
      <div className="w-full ml-8">
        <div className=" w-60 h-6 mt-6  bg-slate-700"></div>
        <div className=" w-52 h-6 mt-6 bg-slate-700"></div>
        <div className=" w-40 h-6 mt-6 bg-slate-700"></div>
        <div className=" w-60 h-6 mt-6 bg-slate-700"></div>
        <div className=" w-40 h-6 mt-6 bg-slate-700"></div>
      </div>
    </div>
  )
}