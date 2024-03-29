export const Skeleton = ()=>{
    return(
        <div className="border border-amber-400 shadow rounded-md p-4 max-w-sm w-[340px] h-[340px]">
            <div className="animate-pulse flex flex-col">
                <div className="w-full bg-slate-700 h-40"></div>
                <div className="h-2 bg-slate-700 rounded mt-3 p-2"></div>
                <div className="h-2 bg-slate-700 rounded mt-3 p-2"></div>
                <div className="h-2 bg-slate-700 rounded mt-3 p-2"></div>
                <div className="h-2 bg-slate-700 rounded mt-3 p-2"></div>
                <div className="h-2 bg-slate-700 rounded mt-3 p-2"></div>
            </div>
        </div>
    );
}