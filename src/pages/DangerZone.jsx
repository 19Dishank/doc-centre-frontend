import {
  AlertTriangle,
  ArrowRightLeft,
  Download,
  Info,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DangerZone() {
  return (
    <div>
        <div
          className="relative flex h-239"
          data-id="4987d725-2280-5477-b336-71f1565f03f7"
        >
          <div
            className="flex flex-col flex-1"
            data-id="fd189be5-5b02-52be-b42d-2330b8185b1f"
          >
            <main
              className="overflow-y-auto bg-zinc-100/60 p-8 flex-1"
              data-id="c9bac026-d259-514d-86da-e16bd930ccb9"
            >
              <div
                className="flex flex-col gap-6"
                data-id="794804b6-2ffe-5a1d-a9a8-71dda125c014"
              >
                <div
                  className="flex flex-col gap-1"
                  data-id="0e33a372-44ce-5f8d-be91-06139c39054a"
                >
                  <div
                    className="flex items-center gap-2"
                    data-id="ef205c22-251d-5266-a352-f9a06dd9c572"
                  >
                    <AlertTriangle
                      className="size-6"
                      style={{ color: "#e7000b" }}
                      data-id="e5408f1d-c82c-589d-b490-211adf647ff0"
                    />
                    <h1
                      className="font-semibold text-2xl leading-8"
                      style={{ color: "#e7000b" }}
                      data-id="bb595e4d-cfd8-5a1a-b35a-a96fe9daa7ec"
                    >
                      Danger Zone
                    </h1>
                  </div>
                  <p
                    className="text-[#71717b] text-sm leading-5"
                    data-id="7716c867-f286-52aa-b834-e3b3bc45546e"
                  >
                    These actions are irreversible. Please proceed with caution.
                  </p>
                </div>
                <Card
                  className="bg-white p-0 gap-0"
                  style={{ borderColor: "#FECACA" }}
                  data-id="c7fd18bc-4618-5f5e-84af-cb13f3d123c0"
                >
                  <div
                    className="flex p-6 justify-between items-center"
                    data-id="52f79dec-b112-5d97-a873-6c35e6447b53"
                  >
                    <div
                      className="max-w-2xl flex flex-col gap-1"
                      data-id="5f671cef-8ee8-53dc-9dae-57137b02f45d"
                    >
                      <span
                        className="font-semibold text-sm leading-5"
                        data-id="9cb36eaa-0d8d-5e5c-b297-68e13587f042"
                      >
                        Export All Data
                      </span>
                      <p
                        className="text-[#71717b] text-sm leading-5"
                        data-id="c6ff5887-69a9-56a3-8744-1298f657dceb"
                      >
                        Download a full archive of all your organization's
                        files, users, and settings as a ZIP file.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="gap-2"
                      data-id="53182708-ac39-5fde-a573-43972b282067"
                    >
                      <Download
                        className="size-4"
                        data-id="caf50ea8-9a32-5b73-8e0a-a7a0d4148c38"
                      />
                      Export Data
                    </Button>
                  </div>
                  <Separator data-id="57b83002-6ffa-5589-87fa-dff70dc09284" />
                  <div
                    className="flex p-6 justify-between items-center"
                    data-id="d2f06edd-2c9a-5e97-a2b9-b6470cda7bc0"
                  >
                    <div
                      className="max-w-2xl flex flex-col gap-1"
                      data-id="632ad6f9-c64f-57fe-8ce3-44c16ad19ae2"
                    >
                      <span
                        className="font-semibold text-sm leading-5"
                        data-id="763a1fca-9eab-568a-9e5f-ca0be7f953ad"
                      >
                        Transfer Ownership
                      </span>
                      <p
                        className="text-[#71717b] text-sm leading-5"
                        data-id="94c9d68e-ed4c-5bd6-9049-69e6746bb0ec"
                      >
                        Transfer admin ownership of this organization to another
                        member. You will lose admin access.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="gap-2"
                      style={{
                        borderColor: "#FCD34D",
                        color: "#B45309",
                        backgroundColor: "#FFFBEB",
                      }}
                      data-id="07088d14-c29c-5281-82e4-8c73b7ccbd0f"
                    >
                      <ArrowRightLeft
                        className="size-4"
                        data-id="70eccf63-d8c0-5a49-b3ca-7617a3170f5e"
                      />
                      Transfer Ownership
                    </Button>
                  </div>
                  <Separator data-id="85276075-840e-5acd-aa23-1d7e0bbc7ad7" />
                  <div
                    className="flex p-6 justify-between items-center"
                    data-id="f2d3ce11-be30-53a6-abf7-46cf5f8e63f4"
                  >
                    <div
                      className="max-w-2xl flex flex-col gap-1"
                      data-id="1334c00e-0d9e-53c9-a714-82040f6870d1"
                    >
                      <span
                        className="font-semibold text-sm leading-5"
                        style={{ color: "#e7000b" }}
                        data-id="e6622f05-12ae-537e-a150-83f6ad2537f2"
                      >
                        Delete Organization
                      </span>
                      <p
                        className="text-[#71717b] text-sm leading-5"
                        data-id="3d0a4555-c6ce-5328-bd30-dbbbe9b53677"
                      >
                        Permanently delete this organization and all its data.
                        This action cannot be undone.
                      </p>
                    </div>
                    <Button
                      className="text-white gap-2"
                      style={{ backgroundColor: "#e7000b" }}
                      data-id="90a0d1f2-104c-53d9-bdbd-6894934f38b3"
                    >
                      <Trash2
                        className="size-4"
                        data-id="b347c0fa-a38e-58ae-b050-51c8520ba2d3"
                      />
                      Delete Organization
                    </Button>
                  </div>
                </Card>
                <div
                  className="rounded-lg border-black/1 border-1 border-solid flex p-4 items-start gap-3"
                  style={{ backgroundColor: "#FEF2F2", borderColor: "#FECACA" }}
                  data-id="8c2360f2-a986-5a3c-bdf2-5a064ceb4c22"
                >
                  <Info
                    className="size-4 shrink-0 mt-0.5"
                    style={{ color: "#e7000b" }}
                    data-id="b1266c02-11c8-5617-a4a5-6e42c415b45a"
                  />
                  <p
                    className="text-sm leading-5"
                    style={{ color: "#991B1B" }}
                    data-id="d55f5b8f-446a-55c3-914a-ea8346fbfa96"
                  >
                    Before deleting, we recommend exporting your data. Deleted
                    organizations cannot be recovered.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
  );
}
