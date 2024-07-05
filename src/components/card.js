import Arrow from "@/icons/Arrow";

export default function Card({ tool }) {
	return (
		<a href={tool.url} target="_blank" className="cursor-pointer p-4 w-full sm:w-[49%] lg:w-[32.5%] rounded-xl border-[1px] border-gray-700 mb-4">
			<div className="flex items-center justify-between mb-3">
				<h2 className='font-bold'>{tool.name}</h2>
				<Arrow className="w-3 h-3"/>
			</div>
			<p className='text-sm text-slate-400 mb-2'>{tool.description}</p>
		</a>
	);
}
  