import AdvanceCounter from "@/components/AdvanceCounter";
import BasicCounter from "@/components/BasicCounter";
import { Card, CardHeader, CardTitle } from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advance | Counter State App",
	description: "Advance Counter State App",
};

const page = () => {
	return (
		<>
			<section className="grid h-[90dvh] place-items-center">
				<Card className="w-xs">
					<CardHeader>
						<CardTitle className="text-center text-2xl font-semibold">
							Advance Counter
						</CardTitle>
					</CardHeader>
					<AdvanceCounter />
				</Card>
			</section>
		</>
	);
};

export default page;
