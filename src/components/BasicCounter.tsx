"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./shadcnui/button";
import { CardContent } from "./shadcnui/card";
import { useState } from "react";

const BasicCounter = () => {
	// altime logic write here .

	const [count, setCount] = useState(0);

	const plush = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};
	return (
		<>
			<CardContent className="space-y-8">
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
						onClick={plush}
						className="cursor-pointer">
						<PlusCircleIcon /> Plus 1
					</Button>
				</div>
			</CardContent>
		</>
	);
};

export default BasicCounter;
