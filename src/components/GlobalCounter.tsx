"use client";

import { useState } from "react";

const GlobalCounter = () => {
	const [count, setCount] = useState(0);
	const plush = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
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
