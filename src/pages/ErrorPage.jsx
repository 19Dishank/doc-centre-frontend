import { ArrowLeft, FileSearch, LayoutDashboard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div>
        <div
          className="w-full h-screen flex "
          data-id="9912c498-a14c-5f25-b4d7-79e6c4c08d2b"
        >
          <main
            className="bg-zinc-100/40 flex flex-col flex-1"
            data-id="72da8a36-48f9-5066-b056-318ba8194309"
          >
            <div
              className="flex p-12 justify-center items-center flex-1"
              data-id="980b44c2-4597-5692-a434-ac0c9432d5d5"
            >
              <div
                className="max-w-3xl flex flex-col items-center gap-8 w-full"
                data-id="cea434ae-7691-5612-a00a-16139c8593bb"
              >
                <div
                  className="relative flex flex-col items-center"
                  data-id="6bd2d064-1819-58c6-8c8f-1cf12562c20c"
                >
                  <div
                    className="flex absolute inset-0 justify-center items-center"
                    data-id="77def0c5-ffaa-546f-8043-603fa3d2c835"
                  >
                    <div
                      className="size-72 blur-3xl rounded-full bg-[#2b7fff]/5"
                      data-id="31517c46-0be5-5a03-b694-69a73a34f52d"
                    />
                  </div>
                  <div
                    className="relative flex items-center gap-4"
                    data-id="0b35d652-aca9-50d1-8aa1-a5cfbe6c1b8f"
                  >
                    <span
                      className="leading-none font-bold text-zinc-950 text-[160px] tracking-tighter"
                      data-id="41146f43-0501-56d7-a765-d57a475eeb96"
                    >
                      4
                    </span>
                    <div
                      className="relative size-36 flex justify-center items-center"
                      data-id="97a5f5a5-6898-592e-b016-ebec479fba41"
                    >
                      <div
                        className="rounded-full border-[#2b7fff] border-12 border-solid absolute inset-0"
                        data-id="b011fd17-e990-5270-a9d5-4cbbca1a6066"
                      />
                      <div
                        className="rounded-full bg-[#2b7fff]/10 flex absolute inset-4 justify-center items-center"
                        data-id="b8565dd6-5ea0-56bb-b22c-fedee6413622"
                      >
                        <FileSearch
                          className="size-12 text-[#2b7fff]"
                          data-id="b3a362d7-42a8-575b-b867-98c35cada721"
                        />
                      </div>
                    </div>
                    <span
                      className="leading-none font-bold text-zinc-950 text-[160px] tracking-tighter"
                      data-id="cb4d76e2-9888-5ed8-9548-5b98e4d542f9"
                    >
                      4
                    </span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="relative mt-2 px-3 py-1 gap-1.5"
                    data-id="0e64f375-f68c-5e0b-8584-c88dbb0c59ce"
                  >
                    <span
                      className="size-1.5 rounded-full bg-[#e7000b]"
                      data-id="fe133bfc-6549-5346-b3ee-899b1544e46b"
                    />
                    <span
                      className="font-mono text-xs leading-4"
                      data-id="d621db44-07be-57f8-ab95-723ad294f4fd"
                    >
                      ERROR 404 — PAGE NOT FOUND
                    </span>
                  </Badge>
                </div>
                <div
                  className="text-center flex flex-col items-center gap-3"
                  data-id="985f3223-11a5-5609-ac62-aa07a47f7576"
                >
                  <h1
                    className="font-semibold text-3xl leading-9 tracking-tight"
                    data-id="7d428bbe-5b2b-591e-8f4e-c7e98954578e"
                  >
                    We couldn't find that document
                  </h1>
                  <p
                    className="max-w-lg text-[#71717b] text-base leading-6"
                    data-id="1db742ae-0a7b-5fab-b5f7-906332f8a32f"
                  >
                    The page or file you're looking for may have been moved,
                    deleted, or perhaps it never existed. Try one of the
                    suggestions below to get back on track.
                  </p>
                </div>
                <div
                  className="flex items-center gap-3"
                  data-id="a616d57a-8802-5a61-bdac-140e295af3a8"
                >
                  <Button
                    variant="outline"
                    className="gap-2"
                    data-id="74eb3a27-e4d0-5e02-a81e-a533e2ac3fbf"
                  >
                    <ArrowLeft
                      className="size-4"
                      data-id="6ecf410d-945f-5ad7-9f4f-e305794a75a5"
                    />
                    Go back
                  </Button>
                  <Button
                    className="bg-[#2b7fff] text-blue-50 gap-2"
                    data-id="1ffcc6ae-3da5-5e87-a02d-30fa8c6e3c4e"
                  >
                    <LayoutDashboard
                      className="size-4"
                      data-id="eb3b7038-a43c-5ad7-aa0e-f77b89dffdfc"
                    />
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
