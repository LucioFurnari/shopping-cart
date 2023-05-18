export default function SkeletonCard() {
  return (
    <div className="h-full w-ful animate-pulse opacity-70 ">
      <div className="h-[282px] w-full bg-slate-700 ">
      </div>
      <div className="m-2 bg-slate-700 h-6 w-1/2"></div>
      <div className="m-2 mt-6 bg-slate-700 h-6 w-1/4"></div>
    </div>
  )
}