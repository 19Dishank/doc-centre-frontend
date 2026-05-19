import { NavLink } from "react-router-dom";

const FormContainer = ({ heading, subheading, linkText, linkUrl, linkHelperText, children }) => {
    return (
        <div className="bg-white flex justify-center items-center flex-1" style={{ width: "660px" }}>
            <div className="max-w-xl flex px-12 flex-col w-full">
                <div className="flex mb-8 flex-col gap-2">
                    <h1 className="font-bold text-zinc-900 tracking-tight" style={{ fontSize: "28px", lineHeight: "1.2" }}>
                        {heading}
                    </h1>
                    <p className="text-[#71717b] text-sm leading-5">{subheading}</p>
                </div>
                {children}
                <div className="text-sm leading-5 flex mt-8 justify-center items-center gap-1">
                    <span className="text-[#71717b]">{linkHelperText}</span>
                    <NavLink to={linkUrl} className="font-medium text-[#2b7fff]">
                        {linkText}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;