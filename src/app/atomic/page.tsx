import GlobalButton from "@/components/GlobalButton";
import GlobalCounter from "@/components/GlobalCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import { GlobalError } from "next/dist/build/templates/app-page";

export const metadata: Metadata = {
	title: "Atomic | Counter State App",
	description: "Atomic Counter State App",
};

const page = () => {
	return (
		<>
			<section className="grid h-[90dvh] place-items-center">
				<Card className="w-xs">
					<CardHeader>
						<CardTitle className="text-center text-2xl font-semibold">
							Atomic Counter
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-8">
							<GlobalCounter />

							<GlobalButton />
						</div>
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
