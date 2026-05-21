import { useState } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Eye, EyeOff } from "lucide-react";

const FormField = ({ label, name, value, onChange, placeholder, error, isPasswordField = false, disabled }) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <Label
                htmlFor={name}
                className="font-medium uppercase text-zinc-950 tracking-wider"
                style={{
                    fontSize: "11px",
                    lineHeight: "16px",
                    letterSpacing: "0.06em",
                }}>
                {label} <p className="text-red-500">*</p>
            </Label>
            <div className="relative">
                <Input
                    onChange={onChange}
                    name={name}
                    value={value}
                    id={name}
                    placeholder={placeholder}
                    className={`rounded-lg border border-zinc-200 border-solid h-10 disabled:bg-zinc-50 disabled:cursor-not-allowed  outline-none transition-all w-full pr-10 ${error ? "border-red-500 focus:border-red-500! focus:ring-red-100!" : "border-zinc-200 focus:border-[#2b7fff] focus:ring-blue-100"}`}
                    type={isPasswordField && !showPassword ? "password" : "text"}
                    disabled={disabled}
                />
                {isPasswordField && (
                    <button
                        tabIndex={-1}
                        type="button"
                        className="top-1/2 -translate-y-1/2 text-[#71717b] absolute right-3"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>)}
            </div>
            {error && (<p className="text-red-500 text-xs"> * {error}</p>)}
        </div>
    );
};

export default FormField;