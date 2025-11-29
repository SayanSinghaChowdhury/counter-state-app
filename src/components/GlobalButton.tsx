"use client";

import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./shadcnui/button";
import { useState } from "react";

const globalButton = () => {
	const [count, setCount] = useState(0);
	const plush = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};
	return (
		<>
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
		</>
	);
};

export default globalButton;
