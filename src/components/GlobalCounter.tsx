"use client";

import { counAtom } from "@/lib/atoms";
import { useAtomValue } from "jotai";

const GlobalCounter = () => {
	const count = useAtomValue(counAtom);

	return (
		<div className="text-center text-xl">
			Count: <span className="font-bold">{count}</span>
		</div>
	);
};

export default GlobalCounter;
