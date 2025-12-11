"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";

const AdvanceCounter = () => {
	const [count, setCount] = useState(0);

	const plus = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};
	const plusTen = () => {
		setCount(count + 10);
	};

	const minusTen = () => {
		setCount(count - 10);
	};

	return (
		<>
			<CardContent className="space-y-4">
				<div className="text-center text-xl">
					Count: <span className="font-bold">{count}</span>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<Button
						onClick={minus}
						variant={"destructive"}
						className="cursor-pointer">
						<MinusCircleIcon /> Minus 1
					</Button>

					<Button
						onClick={plus}
						className="cursor-pointer">
						<PlusCircleIcon /> Plus 1
					</Button>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<Button
						onClick={minusTen}
						variant={"destructive"}
						className="cursor-pointer">
						<MinusCircleIcon /> Minus 10
					</Button>

					<Button
						onClick={plusTen}
						className="cursor-pointer">
						<PlusCircleIcon /> Plus 10
					</Button>
				</div>
			</CardContent>
		</>
	);
};

export default AdvanceCounter;
