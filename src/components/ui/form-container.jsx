import { fetchLogo } from "@/api/auth";
import { getSubdomain } from "@/helper/getSubdomain";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const FormContainer = ({ heading, subheading, linkText, linkUrl, linkHelperText, children }) => {

    const slug = getSubdomain();

    return (
        <div className="bg-white flex justify-center items-center flex-1" style={{ width: "660px" }}>
            <div className="max-w-xl flex gap-8 px-12 flex-col w-full">
                {slug !== "app" && <CompanyLogo />}
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-zinc-900 tracking-tight" style={{ fontSize: "28px", lineHeight: "1.2" }}>
                        {heading}
                    </h1>
                    <p className="text-[#71717b] text-sm leading-5">{subheading}</p>
                </div>
                {children}
                <div className="text-sm leading-5 flex justify-center items-center gap-1">
                    <span className="text-[#71717b]">{linkHelperText}</span>
                    <NavLink to={linkUrl} className="font-medium text-[#2b7fff]">
                        {linkText}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export const CompanyLogo = () => {

    
    const [logoSrc, setLogoSrc] = useState(null);
    console.log("Fetching logo for subdomain:", logoSrc);
    
    const getLogoSrc = async () => {
        try {
            const res = await fetchLogo();
            setLogoSrc(res.data.url);
        } catch (error) {
            console.error("Error fetching logo:", error);
            window.location.replace(import.meta.env.VITE_APP_BASE_URL.replace("slug", "app") + `/onboarding`); 
            return null; 
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        getLogoSrc();
    }, []);

    return (
        <img
            width={150}
            src={logoSrc}
            alt=""
        />
    );
}

export default FormContainer;