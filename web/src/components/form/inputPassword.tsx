import { useState } from "react";
import * as React from "react";
import { Eye, EyeClosed } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { ChangeEvent, FocusEvent } from "react";

interface InputDefaultProps {
	control: any;
	name: string;
	label?: string;
	placeholder: string;
	description?: string;
	className?: string;
	inputClassname?: string;
	readOnly?: boolean;
	disabled?: boolean;
	maxLength?: number | undefined;
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputPassword({
	control,
	name,
	label,
	placeholder,
	description,
	className,
	inputClassname,
	readOnly = false,
	disabled = false,
	maxLength = undefined,
	onBlur,
	onChange,
}: InputDefaultProps) {
	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn(className)}>
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<div className="flex gap-x-2">
							<Input
								type={showPassword ? "text" : "password"}
								className={cn(className)}
								onChange={(event) => {
									field.onChange(event);
									onChange && onChange(event);
								}}
								placeholder={placeholder}
							/>
							<Button
								type="button"
								variant={"outline"}
								className="p-0 h-full aspect-square bg-background text-foreground hover:bg-muted hover:text-foreground cursor-pointer"
								onClick={togglePasswordVisibility}
							>
								{showPassword ? <EyeClosed size={18} /> : <Eye size={18} />}
							</Button>
						</div>
					</FormControl>
					<FormMessage />
					{description && <FormDescription>{description}</FormDescription>}
				</FormItem>
			)}
		/>
	);
}
