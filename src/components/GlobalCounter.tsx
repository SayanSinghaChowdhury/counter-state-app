"use client";

import { counAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { useState } from "react";

const GlobalCounter = () => {
	const [count, setCount] = useAtom(counAtom);

	const plush = () => {
		if (count < 100) {
			setCount(count + 1);
		}
	};

	const minus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};
	const plushTen = () => {
		if (count <= 90) {
			setCount(count + 10);
		}
	};

	const minusTen = () => {
		if (count > 9) {
			setCount(count - 10);
		}
	};
	return (
		<>
			<div className="text-center text-xl">
				Count: <span className="font-bold">{count}</span>
			</div>
		</>
	);
};

export default GlobalCounter;
