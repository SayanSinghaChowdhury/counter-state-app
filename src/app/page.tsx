import BasicCounter from "@/components/BasicCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Counter State App",
	description: "Basic Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Basic Counter
					</CardTitle>
				</CardHeader>
				<BasicCounter />
			</Card>
		</section>
	);
};

export default page;
