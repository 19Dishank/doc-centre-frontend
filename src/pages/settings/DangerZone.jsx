import { AlertTriangle, ArrowRightLeft, Download, Info, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DangerZone() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <AlertTriangle className="size-6 text-red-600 shrink-0" />
          <h1 className="font-semibold text-2xl leading-8 tracking-tight text-red-600">
            Danger Zone
          </h1>
        </div>
        <p className="text-zinc-500 text-sm leading-5">
          These actions are irreversible. Please proceed with caution.
        </p>
      </div>

      {/* Irreversible Actions Card Container */}
      <Card className="bg-white p-0 overflow-hidden border-red-200 shadow-sm">
        
        {/* Action Row 1: Export Data */}
        <div className="flex flex-col md:flex-row p-5 md:p-6 justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="font-semibold text-sm leading-5 text-zinc-950">Export All Data</span>
            <p className="text-zinc-500 text-sm leading-normal">
              Download a full archive of all your organization's files, users, and settings as a ZIP file.
            </p>
          </div>
          <Button variant="outline" className="gap-2 w-full md:w-auto h-10 shrink-0">
            <Download className="size-4" />
            Export Data
          </Button>
        </div>
        
        <Separator className="bg-red-100" />
        
        {/* Action Row 2: Transfer Ownership */}
        <div className="flex flex-col md:flex-row p-5 md:p-6 justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="font-semibold text-sm leading-5 text-zinc-950">Transfer Ownership</span>
            <p className="text-zinc-500 text-sm leading-normal">
              Transfer admin ownership of this organization to another member. You will lose admin access.
            </p>
          </div>
          <Button
            variant="outline"
            className="gap-2 w-full md:w-auto h-10 shrink-0 border-amber-300 text-amber-800 bg-amber-50 hover:bg-amber-100/70 hover:text-amber-900"
          >
            <ArrowRightLeft className="size-4" />
            Transfer Ownership
          </Button>
        </div>
        
        <Separator className="bg-red-100" />
        
        {/* Action Row 3: Delete Organization */}
        <div className="flex flex-col md:flex-row p-5 md:p-6 justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="font-semibold text-sm leading-5 text-red-600">
              Delete Organization
            </span>
            <p className="text-zinc-500 text-sm leading-normal">
              Permanently delete this organization and all its data. This action cannot be undone.
            </p>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 w-full md:w-auto h-10 shrink-0 shadow-sm">
            <Trash2 className="size-4" />
            Delete Organization
          </Button>
        </div>
      </Card>

      {/* Informational Callout Alert Banner */}
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 flex items-start gap-3">
        <Info className="size-4 shrink-0 mt-0.5 text-red-600" />
        <p className="text-sm leading-normal text-red-800 font-medium">
          Before deleting, we recommend exporting your data. Deleted organizations cannot be recovered.
        </p>
      </div>
    </div>
  );
}