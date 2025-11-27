import AdvanceCounter from "@/components/AdvanceCounter";
import ExpertCounter from "@/components/ExpertCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expert | Counter State App",
	description: "Expert Counter State App",
};

const page = () => {
	return (
		<>
			<section className="grid h-[90dvh] place-items-center">
				<Card className="w-xs">
					<CardHeader>
						<CardTitle className="text-center text-2xl font-semibold">
							Expert Counter
						</CardTitle>
					</CardHeader>
					<ExpertCounter />
				</Card>
			</section>
		</>
	);
};

export default page;
