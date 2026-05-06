import {
  ArrowRight,
  Check,
  Eye,
  FileSpreadsheet,
  FileStack,
  FileText,
  FolderOpen,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div>
        <div
          className="flex w-full"
          style={{ minHeight: "956px" }}
          data-id="3d6b060c-4697-57fc-8776-bacde49b6a0d"
        >
          <div
            className="relative text-white flex p-12 flex-col justify-between overflow-hidden"
            style={{
              width: "480px",
              background:
                "linear-gradient(135deg, oklch(0.42 0.18 264) 0%, oklch(0.55 0.22 260) 100%)",
            }}
            data-id="64c21cc2-0555-512e-88c2-060398f8bda4"
          >
            <div
              className="relative z-10 flex items-center gap-2"
              data-id="f28a7e98-cd46-542f-8385-bd5a6862e033"
            >
              <div
                className="size-9 backdrop-blur-sm rounded-lg bg-white/15 flex justify-center items-center"
                data-id="1b4c34d8-ff78-5044-af86-ee13dfab0123"
              >
                <FileStack
                  className="size-5 text-white"
                  data-id="42482a52-3e09-5b53-9dd1-dfe0587b91e7"
                />
              </div>
              <span
                className="font-semibold text-lg leading-7 tracking-tight"
                data-id="1f50bf27-e8cd-5348-aecd-e4c985ff1008"
              >
                DocuCentral
              </span>
            </div>
            <div
              className="relative z-10 flex flex-col items-center gap-8"
              data-id="e7f1dac4-2b69-563f-afec-557ed5f91864"
            >
              <div
                className="relative flex justify-center items-center w-full"
                style={{ height: "320px" }}
                data-id="0331a452-ddff-52d2-8236-67009f77f0d0"
              >
                <div
                  className="size-64 blur-2xl rounded-full bg-white/5 absolute"
                  data-id="d5213e41-a0d3-5aea-8ee0-6a0519cf213a"
                />
                <div
                  className="rotate-[-8deg] backdrop-blur-sm shadow-2xl rounded-xl bg-white/10 border-white/20 border-1 border-solid flex absolute left-8 top-8 p-4 flex-col gap-2 w-44"
                  data-id="181fb1e1-f369-527d-a79e-e5f55abf5d47"
                >
                  <div
                    className="flex items-center gap-2"
                    data-id="787df0e7-620a-5165-b92c-894109b7b6bd"
                  >
                    <div
                      className="size-7 rounded-md bg-rose-400/90 flex justify-center items-center"
                      data-id="e82a91b5-18ab-5258-a8ef-c8215d552935"
                    >
                      <FileText
                        className="size-4 text-white"
                        data-id="7ab029fa-b937-57fd-947e-6b4555750fd4"
                      />
                    </div>
                    <div
                      className="flex flex-col gap-1"
                      data-id="5e9a6206-d56f-505e-b1aa-7ab1b2d4d3c4"
                    >
                      <div
                        className="rounded-full bg-white/40 w-20 h-2"
                        data-id="db7a47ee-19c2-5d5b-b2bf-17d19ffce793"
                      />
                      <div
                        className="rounded-full bg-white/20 w-12 h-1.5"
                        data-id="a73bcce9-c785-505c-800c-6a4024b36a6a"
                      />
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-white/20 w-full h-1.5"
                    data-id="f4709f8c-6c2a-58db-afa2-d7a917eb6b2c"
                  />
                  <div
                    className="w-3/4 rounded-full bg-white/20 h-1.5"
                    data-id="447aa337-51b3-57a6-87a0-696b9c83d53f"
                  />
                  <div
                    className="w-2/3 rounded-full bg-white/20 h-1.5"
                    data-id="12f0fdb9-ef7a-5ada-8e13-b5a13d08b24f"
                  />
                </div>
                <div
                  className="rotate-[6deg] backdrop-blur-sm shadow-2xl rounded-xl bg-white/15 border-white/25 border-1 border-solid flex absolute right-6 bottom-6 p-4 flex-col gap-2 w-44"
                  data-id="5825302e-f0b5-51b0-9e5c-1d71f7b72476"
                >
                  <div
                    className="flex items-center gap-2"
                    data-id="05eb7f1d-0101-59f3-9a49-b5f29112b21b"
                  >
                    <div
                      className="size-7 rounded-md bg-blue-300/90 flex justify-center items-center"
                      data-id="cd7ced5f-6ee7-50bb-98c3-c4fd5b728ac8"
                    >
                      <FileSpreadsheet
                        className="size-4 text-blue-900"
                        data-id="8fc40f10-0b2c-5988-a5af-e8e5aaad67e9"
                      />
                    </div>
                    <div
                      className="flex flex-col gap-1"
                      data-id="30ecd8b5-1398-5ba9-9d62-85882335722b"
                    >
                      <div
                        className="rounded-full bg-white/50 w-20 h-2"
                        data-id="0abc099f-a41e-53e4-b99b-12e87bde363f"
                      />
                      <div
                        className="rounded-full bg-white/30 w-12 h-1.5"
                        data-id="7383fdbc-19e5-56c7-8a38-5069c268856d"
                      />
                    </div>
                  </div>
                  <div
                    className="rounded-full bg-white/30 w-full h-1.5"
                    data-id="c95adf4d-eec4-58c3-b9c2-34e42303bf60"
                  />
                  <div
                    className="w-5/6 rounded-full bg-white/30 h-1.5"
                    data-id="4b39945b-3c43-54ab-9d46-4f1f2c71275b"
                  />
                  <div
                    className="w-1/2 rounded-full bg-white/30 h-1.5"
                    data-id="4bbc41e5-5ffd-558b-847e-a33efc5eb317"
                  />
                </div>
                <div
                  className="relative shadow-2xl z-10 rounded-xl bg-white flex p-4 flex-col gap-2 w-48"
                  data-id="3bdbb156-ca1d-51b1-b744-eada45ed99fc"
                >
                  <div
                    className="flex items-center gap-2"
                    data-id="3a83dc18-bcc4-57d3-8735-1fdfccfcca1d"
                  >
                    <div
                      className="size-8 rounded-md bg-[#2b7fff]/15 flex justify-center items-center"
                      data-id="09762309-0ee9-51a7-98b9-bd23c86ad999"
                    >
                      <FolderOpen
                        className="size-4 text-[#2b7fff]"
                        data-id="12bd8b78-e2e5-5537-8f1d-1c3764ddfe04"
                      />
                    </div>
                    <div
                      className="flex flex-col gap-1"
                      data-id="d0049818-bc70-5c0a-8bf8-3f7dcfe7a09d"
                    >
                      <div
                        className="font-semibold text-zinc-900 text-xs leading-4"
                        data-id="551cf7ea-7ca2-568e-ba20-077e04808ff8"
                      >
                        Q4 Report.pdf
                      </div>
                      <div
                        className="text-zinc-400 text-[10px]"
                        data-id="7d64cb19-3d97-5090-9836-09f5565b15bf"
                      >
                        2.4 MB · Just now
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-1"
                    data-id="d26f0235-ca16-553f-a6c9-94c5cd870918"
                  >
                    <div
                      className="-space-x-1 flex"
                      data-id="790c7652-c298-5c8a-accc-abd0618fe3a1"
                    >
                      <div
                        className="size-5 rounded-full bg-blue-500 border-white border-2 border-solid"
                        data-id="4518aa66-21ab-52b5-bdde-c98b4618775e"
                      />
                      <div
                        className="size-5 rounded-full bg-emerald-500 border-white border-2 border-solid"
                        data-id="95d5bd11-e328-5cc5-8153-76030291aefa"
                      />
                      <div
                        className="size-5 rounded-full bg-amber-500 border-white border-2 border-solid"
                        data-id="2bcc6fd4-0cff-5c5c-9e71-cf0936390823"
                      />
                    </div>
                    <Check
                      className="size-3 text-emerald-500 ml-auto"
                      data-id="fdf6355a-233d-525c-8092-365ffad991fd"
                    />
                  </div>
                </div>
              </div>
              <div
                className="text-center flex flex-col items-center gap-3"
                data-id="031ac776-4bb8-58ba-aebe-97872ee62801"
              >
                <h2
                  className="leading-tight font-bold text-3xl leading-9 tracking-tight"
                  data-id="06a9fbde-8ed9-5464-9251-83dbd232d680"
                >
                  Centralize. Organize.
                  <br data-id="fa126ff6-154b-5703-bbde-53e27a986baa" />
                  Collaborate.
                </h2>
                <p
                  className="max-w-xs text-white/70 text-sm leading-5"
                  data-id="dee838aa-5bd4-544d-8c93-77272aba16e5"
                >
                  One secure home for all your team's documents, files, and
                  shared knowledge.
                </p>
              </div>
            </div>
            <div
              className="relative z-10 flex items-center gap-2"
              data-id="f3dabb30-b94f-55b6-b0fa-22faf2996c92"
            >
              <div
                className="flex items-center gap-0.5"
                data-id="569c0c0b-03b8-5891-bdff-f14f4e7e18b1"
              >
                <Star
                  className="size-3.5 fill-amber-300 text-amber-300"
                  data-id="f28da631-7cd5-5be5-8b8a-cbdcdeb76804"
                />
                <Star
                  className="size-3.5 fill-amber-300 text-amber-300"
                  data-id="ecd329b7-cf75-566c-9d32-bdeb7131c1c6"
                />
                <Star
                  className="size-3.5 fill-amber-300 text-amber-300"
                  data-id="584bd4a9-e0b6-5b7c-9caf-d888d2fcafe4"
                />
                <Star
                  className="size-3.5 fill-amber-300 text-amber-300"
                  data-id="a926c2e3-3a02-5c70-8203-0a9a84dd7691"
                />
                <Star
                  className="size-3.5 fill-amber-300 text-amber-300"
                  data-id="568071c0-8581-5699-ad02-af776c3f59cf"
                />
              </div>
              <span
                className="text-white/70 text-xs leading-4"
                data-id="dceaef9f-7f4a-537f-b431-54f3bfd62523"
              >
                Trusted by 10,000+ teams worldwide
              </span>
            </div>
          </div>
          <div
            className="bg-white flex justify-center items-center flex-1"
            style={{ width: "660px" }}
            data-id="b636e7de-c02a-5d47-bcac-e4bb92286ee0"
          >
            <div
              className="max-w-md flex px-12 flex-col w-full"
              data-id="345c3e6f-f4e2-5960-9f5f-18ac8f8e48df"
            >
              <div
                className="flex mb-12 items-center gap-2"
                data-id="157ac6df-086e-529c-9111-1931022bab25"
              >
                <div
                  className="size-9 rounded-lg bg-[#2b7fff] flex justify-center items-center"
                  data-id="72c464b4-a58e-50bf-afad-11e77d1b7f56"
                >
                  <FileStack
                    className="size-5 text-blue-50"
                    data-id="7e2a10ca-ce92-577e-ac47-345f2a3cbf9f"
                  />
                </div>
                <span
                  className="font-semibold text-[#2b7fff] text-lg leading-7 tracking-tight"
                  data-id="4a9df8b2-fb1f-542b-886f-676c7329ed57"
                >
                  DocuCentral
                </span>
              </div>
              <div
                className="flex mb-8 flex-col gap-2"
                data-id="1d95e140-626a-57bc-b637-2d8795596f33"
              >
                <h1
                  className="font-bold text-zinc-900 tracking-tight"
                  style={{ fontSize: "28px", lineHeight: "1.2" }}
                  data-id="bec78077-11e4-5e46-a4ef-06679569e18c"
                >
                  Welcome back
                </h1>
                <p
                  className="text-[#71717b] text-sm leading-5"
                  data-id="55bf7606-7489-5722-9427-3a472ddc7e23"
                >
                  Sign in to your account to continue
                </p>
              </div>
              <Button
                variant="outline"
                className="font-medium rounded-lg bg-white text-zinc-800 border-zinc-200 border-0 border-solid gap-2 w-full h-11"
                data-id="30bc8a36-b9ea-52dc-830f-b4c58c7ed2f5"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  data-id="1e1ed00a-51eb-5b42-8970-cfa874b98b11"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                    data-id="50ce34d8-dc92-573d-bc88-65727d2e4f69"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                    data-id="f2c43280-9305-5c54-9de1-7093a0fb16f6"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                    data-id="12faaa42-44e7-5e5c-98a1-58b71c982707"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                    data-id="4843cad7-23dd-57c1-bb9e-8dbd51b8b3d1"
                  />
                </svg>
                Continue with Google
              </Button>
              <div
                className="flex my-6 items-center gap-4"
                data-id="447707be-1e24-504f-84e2-e3b8216f859b"
              >
                <Separator
                  className="flex-1"
                  data-id="3801d063-a36c-5a23-ac88-0c4277cc227b"
                />
                <span
                  className="whitespace-nowrap text-[#71717b] text-xs leading-4"
                  data-id="6e2c9e88-84e6-5048-8ded-32dbdf1ed56f"
                >
                  or continue with email
                </span>
                <Separator
                  className="flex-1"
                  data-id="9adbce6b-40c3-59ad-a433-820ac66ab550"
                />
              </div>
              <div
                className="flex flex-col gap-4"
                data-id="9c36412b-e9e6-5cee-af87-c001526f3b10"
              >
                <div
                  className="flex flex-col gap-2"
                  data-id="f8be5250-5c9b-5e89-a784-9de9d0f26555"
                >
                  <Label
                    htmlFor="email"
                    className="font-medium text-zinc-800 text-sm leading-5"
                    data-id="ab55bec9-afda-5a83-97a1-e49b9b5f2534"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    defaultValue="jordan@acmecorp.com"
                    className="rounded-lg bg-white border-zinc-200 border-0 border-solid h-11"
                    data-id="f6520a2b-e95d-52d4-8db9-42b033d3a56b"
                  />
                </div>
                <div
                  className="flex flex-col gap-2"
                  data-id="ea9b4eb6-2bee-58fc-beda-b0d7c89445ad"
                >
                  <Label
                    htmlFor="password"
                    className="font-medium text-zinc-800 text-sm leading-5"
                    data-id="d4b3ad28-40ca-5e78-a6f5-7ac64d5f8043"
                  >
                    Password
                  </Label>
                  <div
                    className="relative"
                    data-id="cbe037d4-642f-5069-be76-6e149178a0ac"
                  >
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      defaultValue="••••••••••••"
                      className="rounded-lg bg-white border-zinc-200 border-0 border-solid pr-10 h-11"
                      data-id="653db462-295b-5d22-9f45-760bdcad2c38"
                    />
                    <button
                      className="top-1/2 -translate-y-1/2 text-[#71717b] absolute right-3"
                      data-id="076c3e59-7ec5-52fb-b1fb-2ac735f1d793"
                    >
                      <Eye
                        className="size-4"
                        data-id="af9beb56-ee97-5df6-9615-fa8433fb15a4"
                      />
                    </button>
                  </div>
                  <a
                    href="#"
                    className="font-medium text-[#2b7fff] text-xs leading-4 self-end"
                    data-id="774ec20a-3d1b-54d1-9d4a-c75dcc2c47b5"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button
                  className="font-semibold rounded-lg bg-[#2b7fff] text-blue-50 mt-2 w-full h-11"
                  data-id="adab167c-6d64-56a0-8e01-9c5d55b1bbf6"
                >
                  Sign In
                  <ArrowRight
                    className="size-4 ml-1"
                    data-id="6b18e67a-e3c4-5d6e-9196-0e1f042b4cf3"
                  />
                </Button>
              </div>
              <div
                className="text-sm leading-5 flex mt-8 justify-center items-center gap-1"
                data-id="c71cbb31-d38a-5805-b61f-869b8c981a9c"
              >
                <span
                  className="text-[#71717b]"
                  data-id="6290987a-60bc-5ca3-81e6-e71036142a4f"
                >
                  Don't have an account?
                </span>
                <a
                  href="#"
                  className="font-medium text-[#2b7fff]"
                  data-id="2e40fc0d-e26a-5351-94b3-027bc1495590"
                >
                  Sign up
                </a>
              </div>
              <p
                className="leading-relaxed text-center text-[#71717b] text-xs leading-4 mt-12"
                data-id="b9dce2eb-1aaa-5e01-a3a1-719c8efb8bd8"
              >
                By signing in, you agree to our
                <a
                  href="#"
                  className="underline"
                  data-id="f8d1ce8b-da92-5136-a2ed-5ecb68b122b1"
                >
                  Terms of Service
                </a>
                and
                <a
                  href="#"
                  className="underline"
                  data-id="044e8b3e-46e9-59a1-8a56-beb13912deec"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
