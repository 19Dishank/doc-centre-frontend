import { fetchLogo } from "@/api/auth";
import { getSubdomain } from "@/helper/getSubdomain";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo";

const FormContainer = ({ heading, subheading, linkText, linkUrl, linkHelperText, children }) => {
    const slug = getSubdomain();
    const isTenant = slug !== "app" && slug !== null;

    return (
        <div className="bg-white flex justify-center items-center flex-1 w-full lg:max-w-165 px-4">
            <div className="max-w-xl flex gap-8 py-8 sm:px-8 flex-col w-full">

                <div className="shrink-0 lg:hidden flex justify-center sm:justify-start">
                    {isTenant ? (
                        <div className="inline-flex items-center gap-3 bg-white brightness-95 rounded-xl px-4 sm:px-6 py-4 sm:py-5">
                            <div className="shrink-0 company-logo-wrap">
                                <CompanyLogo slug={slug} />
                            </div>
                            <style>{`.company-logo-wrap img { width: auto !important; max-width: 120px !important; max-height: 48px !important; object-fit: contain; display: block; }`}</style>
                            <div className="w-px h-9 bg-zinc-200 shrink-0" />
                            <div className="flex flex-col shrink-0">
                                <Logo width={160} />
                            </div>
                        </div>
                    ) : (
                        <Logo width={160} />
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <h1
                        className="font-bold text-zinc-900 tracking-tight"
                        style={{ fontSize: "28px", lineHeight: "1.2" }}
                    >
                        {heading}
                    </h1>
                    <p className="text-[#71717b] text-sm leading-5">{subheading}</p>
                </div>

                {children}

                <div className="text-sm leading-5 flex lg:flex-row md:flex-row flex-col justify-center items-center gap-1">
                    <span className="text-[#71717b]">{linkHelperText}</span>
                    <NavLink to={linkUrl} className="font-medium text-[#2b7fff]">
                        {linkText}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export const CompanyLogo = ({ slug }) => {

    const [logoSrc, setLogoSrc] = useState(null);

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

    if (!logoSrc) return slug
        ? <span className="text-[#2b7fff] font-bold text-lg uppercase">{slug}</span>
        : null;


    return (
        <>
            <img
                width={150}
                src={logoSrc}
                alt={slug}
            />
        </>
    );
}

export default FormContainer;