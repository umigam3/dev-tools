import Arrow from "@/icons/Arrow";

export default function Card({ tool }) {
	return (
		<a href={tool.url} target="_blank" className="group flex flex-col justify-between gap-y-10 cursor-pointer p-4 w-full sm:w-[48%] lg:w-[32.5%] rounded-xl border border-gray-700 mb-4">
			<div>
				<div className="flex items-center justify-between mb-3">
					<h2 className='font-bold'>{tool.name}</h2>
					<Arrow className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-150"/>
				</div>
				<p className='text-sm text-slate-400 mb-2'>{tool.description}</p>
			</div>
			<div className="flex flex-wrap gap-x-[0.5px]">
				{tool.tags.map((tag, index) => (
					<span key={index} class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl dark:bg-gray-800 dark:text-gray-300 mb-2">{tag}</span>
				))}
			</div>
		</a>
	);
}
  