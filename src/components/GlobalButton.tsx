"use client";

import { counAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./shadcnui/button";

const globalButton = () => {
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
			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minus}
					disabled={count < 1}
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
				{/* 10 Plush */}
				<Button
					onClick={minusTen}
					disabled={count < 10}
					variant={"destructive"}
					className="cursor-pointer">
					<MinusCircleIcon /> Minus 10
				</Button>
				<Button
					onClick={plushTen}
					disabled={count > 90}
					className="cursor-pointer">
					<PlusCircleIcon /> Plus 10
				</Button>
			</div>
		</>
	);
};

export default globalButton;
