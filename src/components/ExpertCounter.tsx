"use client";

import { useState } from "react";
import { CardContent } from "./shadcnui/card";
import { Button } from "./shadcnui/button";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";

const ExpertCounter = () => {
	const [count, setCount] = useState(0);

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
						onClick={plush}
						disabled={count >= 100}
						className="cursor-pointer">
						<PlusCircleIcon /> Plus 1
					</Button>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<Button
						onClick={minusTen}
						disabled={count <= 9}
						variant={"destructive"}
						className="cursor-pointer">
						<MinusCircleIcon /> Minus 10
					</Button>

					<Button
						onClick={plushTen}
						disabled={count >= 90}
						className="cursor-pointer">
						<PlusCircleIcon /> Plus 10
					</Button>
				</div>
			</CardContent>
		</>
	);
};

export default ExpertCounter;
