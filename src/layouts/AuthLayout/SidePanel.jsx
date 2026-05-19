import Logo from "@/components/ui/logo";
import { Check, FileSpreadsheet, FileText, FolderOpen, Star } from "lucide-react";

const SidePanel = () => {
  return (
    <div
      className="relative text-white lg:flex p-12 flex-col justify-between overflow-hidden w-full"
      style={{
        background: "linear-gradient(135deg, oklch(0.42 0.18 264) 0%, oklch(0.55 0.22 260) 100%)",
      }}>
      <Logo width={200} height={80} mode="dark" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative flex justify-center items-center w-full" style={{ height: "320px" }}>
          <div className="size-64 blur-2xl rounded-full bg-white/5 absolute" />
          <div className="rotate-[-8deg] backdrop-blur-sm shadow-2xl rounded-xl bg-white/10 border-white/20 border border-solid flex absolute left-8 top-8 p-4 flex-col gap-2 w-44">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-md bg-rose-400/90 flex justify-center items-center">
                <FileText className="size-4 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="rounded-full bg-white/40 w-20 h-2" />
                <div className="rounded-full bg-white/20 w-12 h-1.5" />
              </div>
            </div>
            <div className="rounded-full bg-white/20 w-full h-1.5" />
            <div className="w-3/4 rounded-full bg-white/20 h-1.5" />
            <div className="w-2/3 rounded-full bg-white/20 h-1.5" />
          </div>
          <div className="rotate-6 backdrop-blur-sm shadow-2xl rounded-xl bg-white/15 border-white/25 border border-solid flex absolute right-6 bottom-6 p-4 flex-col gap-2 w-44">
            <div className="flex items-center gap-2">
              <div className="size-7 rounded-md bg-blue-300/90 flex justify-center items-center">
                <FileSpreadsheet className="size-4 text-blue-900" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="rounded-full bg-white/50 w-20 h-2" />
                <div className="rounded-full bg-white/30 w-12 h-1.5" />
              </div>
            </div>
            <div className="rounded-full bg-white/30 w-full h-1.5" />
            <div className="w-5/6 rounded-full bg-white/30 h-1.5" />
            <div className="w-1/2 rounded-full bg-white/30 h-1.5" />
          </div>
          <div className="relative shadow-2xl z-10 rounded-xl bg-white flex p-4 flex-col gap-2 w-48">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-md bg-[#2b7fff]/15 flex justify-center items-center">
                <FolderOpen className="size-4 text-[#2b7fff]" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold text-zinc-900 text-xs">Q4 Report.pdf</div>
                <div className="text-zinc-400 text-[10px]">2.4 MB · Just now</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="-space-x-1 flex">
                <div className="size-5 rounded-full bg-blue-500 border-white border-2 border-solid" />
                <div className="size-5 rounded-full bg-emerald-500 border-white border-2 border-solid" />
                <div className="size-5 rounded-full bg-amber-500 border-white border-2 border-solid" />
              </div>
              <Check className="size-3 text-emerald-500 ml-auto" />
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col items-center gap-3">
          <h2 className="leading-tight font-bold text-3xl tracking-tight">
            Centralize. Organize.
            <br />
            Collaborate.
          </h2>
          <p className="max-w-md text-white/70 text-sm leading-5">
            One secure home for all your team's documents, files, and shared knowledge.
          </p>
        </div>
      </div>
      <div className="relative z-10 flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          <Star className="size-3.5 fill-amber-300 text-amber-300" />
          <Star className="size-3.5 fill-amber-300 text-amber-300" />
          <Star className="size-3.5 fill-amber-300 text-amber-300" />
          <Star className="size-3.5 fill-amber-300 text-amber-300" />
          <Star className="size-3.5 fill-amber-300 text-amber-300" />
        </div>
        <span className="text-white/70 text-xs">Trusted by 10,000+ teams worldwide</span>
      </div>
    </div>
  );
};

export default SidePanel;