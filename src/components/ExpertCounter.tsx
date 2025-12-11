"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";

const ExpertCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		if (count < 100) {
			setCount(count + 1);
		}
	};

	const minus = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const plusTen = () => {
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
		<CardContent className="space-y-4">
			<div className="text-center text-xl">
				Count: <span className="font-bold">{count}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minus}
					disabled={count <= 0}
					variant={"destructive"}
					className="cursor-pointer">
					<MinusCircleIcon /> Minus 1
				</Button>

				<Button
					onClick={plus}
					disabled={count >= 100}
					className="cursor-pointer">
					<PlusCircleIcon /> Plus 1
				</Button>

				<Button
					onClick={minusTen}
					disabled={count <= 9}
					variant={"destructive"}
					className="cursor-pointer">
					<MinusCircleIcon /> Minus 10
				</Button>

				<Button
					onClick={plusTen}
					disabled={count >= 91}
					className="cursor-pointer">
					<PlusCircleIcon /> Plus 10
				</Button>
			</div>
		</CardContent>
	);
};

export default ExpertCounter;
