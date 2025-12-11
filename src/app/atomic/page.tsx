import GlobalButton from "@/components/GlobalButton";
import GlobalCounter from "@/components/GlobalCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Atomic | Counter State App",
	description: "Atomic Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Atomic Counter
					</CardTitle>
				</CardHeader>

				<CardContent className="space-y-8">
					<GlobalCounter />

					<GlobalButton />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
