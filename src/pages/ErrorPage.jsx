import { ArrowLeft, FileSearch, LayoutDashboard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ statusCode }) {

  if (statusCode !== 404) return null; // only render for 404

  return (
    <div>
      <div className="w-full h-screen flex ">
        <main className="bg-zinc-100/40 flex flex-col flex-1">
          <div className="flex p-12 justify-center items-center flex-1">
            <div className="max-w-3xl flex flex-col items-center gap-8 w-full">
              <div className="relative flex flex-col items-center">
                <div className="flex absolute inset-0 justify-center items-center">
                  <div className="size-72 blur-3xl rounded-full bg-[#2b7fff]/5" />
                </div>
                <div className="relative flex items-center gap-4">
                  <span className="leading-none font-bold text-zinc-950 text-[160px] tracking-tighter">4</span>
                  <div className="relative size-36 flex justify-center items-center">
                    <div className="rounded-full border-[#2b7fff] border2 border-solid absolute inset-0" />
                    <div className="rounded-full bg-[#2b7fff]/10 flex absolute inset-4 justify-center items-center">
                      <FileSearch className="size-12 text-[#2b7fff]" />
                    </div>
                  </div>
                  <span className="leading-none font-bold text-zinc-950 text-[160px] tracking-tighter">4</span>
                </div>
                <Badge variant="secondary" className="relative mt-2 px-3 py-1 gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#e7000b]" />
                  <span className="font-mono text-xs leading-4">ERROR 404 — PAGE NOT FOUND</span>
                </Badge>
              </div>
              <div className="text-center flex flex-col items-center gap-3">
                <h1 className="font-semibold text-3xl leading-9 tracking-tight">We couldn't find that document</h1>
                <p className="max-w-lg text-[#71717b] text-base leading-6">
                  The page or file you're looking for may have been moved, deleted, or perhaps it never existed. Try one
                  of the suggestions below to get back on track.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="size-4" />
                  Go back
                </Button>
                <Button className="bg-[#2b7fff] text-blue-50 gap-2">
                  <LayoutDashboard className="size-4" />
                  Back to Dashboard
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
