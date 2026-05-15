import { AlertTriangle, ArrowRightLeft, Download, Info, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
export default function DangerZone() {
  return (
    <main className="overflow-y-auto flex-1">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <AlertTriangle className="size-6" style={{ color: "#e7000b" }} />
            <h1 className="font-semibold text-2xl leading-8" style={{ color: "#e7000b" }}>
              Danger Zone
            </h1>
          </div>
          <p className="text-[#71717b] text-sm leading-5">
            These actions are irreversible. Please proceed with caution.
          </p>
        </div>
        <Card className="bg-white p-0 gap-0" style={{ borderColor: "#FECACA" }}>
          <div className="flex p-6 justify-between items-center">
            <div className="max-w-2xl flex flex-col gap-1">
              <span className="font-semibold text-sm leading-5">Export All Data</span>
              <p className="text-[#71717b] text-sm leading-5">
                Download a full archive of all your organization's files, users, and settings as a ZIP file.
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="size-4" />
              Export Data
            </Button>
          </div>
          <Separator />
          <div className="flex p-6 justify-between items-center">
            <div className="max-w-2xl flex flex-col gap-1">
              <span className="font-semibold text-sm leading-5">Transfer Ownership</span>
              <p className="text-[#71717b] text-sm leading-5">
                Transfer admin ownership of this organization to another member. You will lose admin access.
              </p>
            </div>
            <Button
              variant="outline"
              className="gap-2"
              style={{
                borderColor: "#FCD34D",
                color: "#B45309",
                backgroundColor: "#FFFBEB",
              }}>
              <ArrowRightLeft className="size-4" />
              Transfer Ownership
            </Button>
          </div>
          <Separator />
          <div className="flex p-6 justify-between items-center">
            <div className="max-w-2xl flex flex-col gap-1">
              <span className="font-semibold text-sm leading-5" style={{ color: "#e7000b" }}>
                Delete Organization
              </span>
              <p className="text-[#71717b] text-sm leading-5">
                Permanently delete this organization and all its data. This action cannot be undone.
              </p>
            </div>
            <Button className="text-white gap-2" style={{ backgroundColor: "#e7000b" }}>
              <Trash2 className="size-4" />
              Delete Organization
            </Button>
          </div>
        </Card>
        <div
          className="rounded-lg border-black/1 border border-solid flex p-4 items-start gap-3"
          style={{ backgroundColor: "#FEF2F2", borderColor: "#FECACA" }}>
          <Info className="size-4 shrink-0 mt-0.5" style={{ color: "#e7000b" }} />
          <p className="text-sm leading-5" style={{ color: "#991B1B" }}>
            Before deleting, we recommend exporting your data. Deleted organizations cannot be recovered.
          </p>
        </div>
      </div>
    </main>
  );
}
