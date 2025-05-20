import Link from "next/link";
import { CircleFadingPlus } from "lucide-react";

export default function TableHeaderComponent({
	title,
	link,
}: { title: string; link: string }) {
	return (
		<div className="flex items-center justify-between mt-2 mb-1">
			<h2 className="text-2xl font-bold mb-4 text-foreground">{title}</h2>
			<div className="flex items-center space-x-4">
				<Link
					href={link}
					className="bg-background text-foreground px-4 py-2 rounded-md hover:bg-muted transition-colors flex items-center gap-2"
				>
					<CircleFadingPlus className="w-4 h-4" />
					<span className="text-sm font-semibold">Adicionar</span>
				</Link>
			</div>
		</div>
	);
}
