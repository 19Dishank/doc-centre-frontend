import { useState } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Eye, EyeOff } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./select";

const FormField = ({ label, name, value, onChange, onBlur, placeholder, error, isPasswordField = false, disabled, type = "text", min, max, options, emptyStateMessage, isRequired = true }) => {

    const [showPassword, setShowPassword] = useState(false);
    const textInputs = ["text", "email", "number", "password"];
    const groupInputs = ["select", "multiselect"];

    if (textInputs.includes(type)) {
        return (
            <div className="flex flex-col gap-2">
                <Label
                    htmlFor={name}
                    className="font-medium uppercase text-zinc-950 dark:text-zinc-300 text-[11px] leading-4 tracking-[0.06em]"
                >
                    {label} {isRequired && <span className="text-red-500">*</span>}
                </Label>
                <div className="relative">
                    <Input
                        onChange={onChange}
                        name={name}
                        value={value}
                        id={name}
                        placeholder={placeholder}
                        className={`rounded-lg border border-zinc-200 dark:border-zinc-800 border-solid h-10 disabled:bg-zinc-50 dark:disabled:bg-zinc-900/50 disabled:cursor-not-allowed outline-none transition-all w-full ${isPasswordField ? "pr-10" : ""} ${error ? "border-red-500 focus:border-red-500! focus:ring-red-100!" : "border-zinc-200 dark:border-zinc-800 focus:border-[#2b7fff] focus:ring-blue-100 dark:focus:ring-blue-950/40"}`}
                        type={isPasswordField && !showPassword ? "password" : type}
                        disabled={disabled}
                        min={min}
                        max={max}
                        onBlur={onBlur}
                    />
                    {isPasswordField && (
                        <button
                            tabIndex={-1}
                            type="button"
                            className="top-1/2 -translate-y-1/2 text-[#71717b] dark:text-zinc-400 absolute right-3"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                        </button>)}
                </div>
                {error && (<p className="text-red-500 text-xs"> * {error}</p>)}
            </div>
        );
    } else if (groupInputs.includes(type)) {
        return (
            <div className="flex flex-col gap-1.5">
                <Label htmlFor={name} className="font-medium text-sm text-zinc-800 dark:text-zinc-300">
                    {label}  <span className="text-red-500">*</span>
                </Label>
                <Select
                    name={name}
                    value={value}
                    onValueChange={onChange}
                >
                    <SelectTrigger
                        id={name}
                        className={`rounded-lg border border-zinc-200 dark:border-zinc-800 h-10! border-solid disabled:bg-zinc-50 dark:disabled:bg-zinc-900/50 disabled:cursor-not-allowed outline-none transition-all w-full ${isPasswordField ? "pr-10" : ""} ${error ? "border-red-500 focus:border-red-500! focus:ring-red-100!" : "border-zinc-200 dark:border-zinc-800 focus:ring-blue-100 dark:focus:ring-blue-950/40"}`}
                    >
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent position="popper" className="z-1000 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-zinc-50">
                        <SelectGroup>
                            <SelectLabel className="text-zinc-500 dark:text-zinc-400">{options.length > 0 ? `Select Role` : emptyStateMessage}</SelectLabel>
                            {options.map((role) => (
                                <SelectItem key={role._id} value={role._id} className="focus:bg-zinc-150 dark:focus:bg-zinc-800 focus:text-zinc-950 dark:focus:text-zinc-50">{role.name}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {error && (<p className="text-red-500 text-xs"> * {error}</p>)}
            </div>
        )
    }
};

export default FormField;