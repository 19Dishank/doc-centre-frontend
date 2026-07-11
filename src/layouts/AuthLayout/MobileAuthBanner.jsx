import { CompanyLogo } from "@/components/ui/form-container";
import Logo from "@/components/ui/logo";
import { getSubdomain } from "@/helper/getSubdomain";
import { Check, FileSpreadsheet, FileText, FolderOpen, Star } from "lucide-react";

const MobileAuthBanner = () => {
  const slug = getSubdomain();
  const isTenant = slug !== "app" && slug !== null;

  return (
    <div className="relative w-full overflow-hidden text-white bg-[linear-gradient(135deg,oklch(0.42_0.18_264)_0%,oklch(0.55_0.22_260)_100%)] min-h-[clamp(200px,38vw,280px)]">

      <div className="absolute pointer-events-none size-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)] -top-20 -right-16" />
      <div className="absolute pointer-events-none size-60 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] -bottom-16 -left-10" />

      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[image:radial-gradient(circle,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="relative z-10 flex items-center justify-between h-full px-5 sm:px-8 py-5 sm:py-6 gap-4">

        <div className="flex flex-col gap-3 flex-1 min-w-0">
          <div className="shrink-0">
            {isTenant ? (
              <div className="inline-flex items-center gap-2.5 bg-white/15 brightness-95 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-white/20">
                <CompanyLogo slug={slug} className="w-auto max-w-[90px] max-h-8 object-contain block shrink-0" />
                <div className="w-px h-7 bg-white/30 shrink-0" />
                <div className="shrink-0">
                  <Logo width={110} mode="dark" />
                </div>
              </div>
            ) : (
              <Logo width={130} mode="dark" />
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <h2 className="font-bold leading-tight tracking-tight text-[clamp(1.05rem,3.5vw,1.35rem)]">
              Centralize. Organize.{" "}
              <span className="text-white/80">Collaborate.</span>
            </h2>
            <p className="text-white/65 leading-snug hidden sm:block text-[clamp(0.7rem,2vw,0.82rem)]">
              One secure home for your team's documents &amp; knowledge.
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3 fill-amber-300 text-amber-300" />
              ))}
            </div>
            <span className="text-white/60 text-[10px]">10,000+ teams</span>
          </div>
        </div>

        <div className="relative shrink-0 hidden sm:block w-[clamp(130px,30vw,200px)] h-[clamp(130px,30vw,180px)]">

          <div className="absolute top-[8%] left-0 w-[clamp(90px,20vw,130px)] p-[clamp(8px,1.5vw,12px)] backdrop-blur-sm shadow-xl rounded-xl bg-white/10 border border-white/20 flex flex-col gap-1.5 -rotate-[7deg] animate-float-slow">
            <div className="flex items-center gap-1.5">
              <div className="size-5 rounded-md bg-rose-400/90 flex justify-center items-center shrink-0">
                <FileText className="size-2.5 text-white" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <div className="rounded-full bg-white/40 h-1.5 w-[50px]" />
                <div className="rounded-full bg-white/20 h-1 w-8" />
              </div>
            </div>
            <div className="rounded-full bg-white/20 w-full h-1" />
            <div className="rounded-full bg-white/20 h-1 w-[70%]" />
          </div>

          <div className="absolute top-[18%] left-[22%] z-10 w-[clamp(96px,22vw,140px)] p-[clamp(8px,1.5vw,12px)] shadow-2xl rounded-xl bg-white flex flex-col gap-1.5 animate-float-center">
            <div className="flex items-center gap-1.5">
              <div className="size-[22px] rounded-md bg-[#2b7fff]/15 flex justify-center items-center shrink-0">
                <FolderOpen className="size-3 text-[#2b7fff]" />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="font-semibold text-zinc-900 truncate text-[9px]">Q4 Report.pdf</div>
                <div className="text-zinc-400 text-[8px]">2.4 MB · Just now</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex -space-x-1">
                <div className="size-3.5 rounded-full bg-blue-500 border-2 border-white" />
                <div className="size-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                <div className="size-3.5 rounded-full bg-amber-500 border-2 border-white" />
              </div>
              <Check className="size-2.5 text-emerald-500 ml-auto" />
            </div>
          </div>

          <div className="absolute bottom-[4%] right-0 w-[clamp(82px,18vw,118px)] p-[clamp(7px,1.2vw,10px)] backdrop-blur-sm shadow-xl rounded-xl bg-white/15 border border-white/25 flex flex-col gap-1.5 rotate-6 animate-float-reverse">
            <div className="flex items-center gap-1.5">
              <div className="size-[18px] rounded-md bg-blue-300/90 flex justify-center items-center shrink-0">
                <FileSpreadsheet className="size-2.5 text-blue-900" />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <div className="rounded-full bg-white/50 h-1.5 w-11" />
                <div className="rounded-full bg-white/30 h-1 w-7" />
              </div>
            </div>
            <div className="rounded-full bg-white/30 w-full h-1" />
            <div className="rounded-full bg-white/30 h-1 w-[60%]" />
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-8 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.08))]" />
    </div>
  );
};

export default MobileAuthBanner;
