import {
  ArrowRight,
  Building2,
  Check,
  HelpCircle,
  Sparkle,
  Star,
  X,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function BillingPage() {
  return (
    <div>
      <div
        className="bg-white text-zinc-950 flex w-full h-fit h-fit min-h-screen overflow-visible"
        style={{ fontFamily: "Inter, sans-serif" }}
        data-id="307f8198-5ee5-5a2a-80df-70ec57eaac34"
      >
        <main
          className="flex flex-col flex-1"
          data-id="f03e2559-3f7d-5b54-bdda-d856ce8bbae6"
        >
          <div
            className="bg-zinc-100/40 p-8 flex-1 overflow-auto"
            data-id="d4c1bbf9-9b54-5a28-b925-b8f7dbc65dad"
          >
            <div
              className="max-w-[860px] flex mx-auto flex-col gap-8"
              data-id="f81ab608-479a-5feb-b19d-13ebc16a3682"
            >
              <div
                className="text-center flex flex-col items-center gap-2"
                data-id="059a0296-9f25-56ed-8704-53ed53c765f6"
              >
                <Badge
                  variant="secondary"
                  className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid"
                  data-id="3e200f61-815f-502f-81c1-3d607a7cca0a"
                >
                  Pricing
                </Badge>
                <h1
                  className="font-semibold text-3xl leading-9 tracking-tight"
                  data-id="1d38824f-60d6-5a8d-b483-ca8aacb0ad87"
                >
                  Choose the plan that fits your team
                </h1>
                <p
                  className="max-w-md text-[#71717b] text-sm leading-5"
                  data-id="309f0c7f-f383-5887-a6d0-9359791b129d"
                >
                  Simple, transparent pricing. No hidden fees. Cancel anytime.
                </p>
                <div
                  className="inline-flex rounded-full bg-zinc-100 border-zinc-200 border-1 border-solid mt-4 p-1 items-center gap-2"
                  data-id="989a1255-cf2a-554f-92b1-58047d91e168"
                >
                  <button
                    className="font-medium rounded-full text-[#71717b] text-sm leading-5 px-4 py-1.5"
                    data-id="3845fd3e-5538-5ed0-bb32-cd2bfda6d477"
                  >
                    Monthly
                  </button>
                  <button
                    className="shadow-sm font-medium rounded-full bg-white text-zinc-950 text-sm leading-5 flex px-4 py-1.5 items-center gap-2"
                    data-id="518a39ec-2c8e-5843-a85e-e68e55fd139a"
                  >
                    Yearly
                    <Badge
                      className="bg-[#2b7fff]/10 text-[#2b7fff] text-[10px] border-black/1 border-0 border-solid px-1.5 py-0"
                      data-id="1ad39804-1ac2-5762-b762-9da064687193"
                    >
                      Save 20%
                    </Badge>
                  </button>
                </div>
              </div>
              <div
                className="grid grid-cols-3 gap-6"
                data-id="8cc96dde-0528-56b0-8eaf-f4dd5f2e6117"
              >
                <Card
                  className="border-zinc-200 border-1 border-solid p-6 gap-4"
                  data-id="f7dd860d-dc3c-5e6e-8ecb-bfe598a2afd3"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="d2870a33-bc3b-561d-805b-e0a83ee1247c"
                  >
                    <div
                      className="flex items-center gap-2"
                      data-id="781fcc7f-e988-5056-808b-8f0629de04b8"
                    >
                      <div
                        className="size-9 rounded-lg bg-zinc-100 flex justify-center items-center"
                        data-id="0fa55a7f-3088-57c7-9c7c-5069422250c0"
                      >
                        <Sparkle
                          className="size-4 text-[#71717b]"
                          data-id="2ba0c6d0-ed93-5577-ba87-ea9f2be8e8b0"
                        />
                      </div>
                      <span
                        className="font-medium text-[#71717b] text-sm leading-5"
                        data-id="1f53b6ff-47be-5b93-82ff-028b9e5098a7"
                      >
                        Free
                      </span>
                    </div>
                    <div
                      className="items-baseline flex mt-2 gap-1"
                      data-id="e5b0c4bf-f65e-5d7a-a832-fff531d823bc"
                    >
                      <span
                        className="font-semibold text-4xl leading-10 tracking-tight"
                        data-id="3c8053ba-2b1d-563f-bb55-0ce62afd511c"
                      >
                        $0
                      </span>
                      <span
                        className="text-[#71717b] text-sm leading-5"
                        data-id="bc01484e-4aae-51e8-8f46-bc6c6b70401a"
                      >
                        /month
                      </span>
                    </div>
                    <p
                      className="text-[#71717b] text-xs leading-4"
                      data-id="c20b9a4c-ab97-59fe-b901-bdf6e2afb376"
                    >
                      Perfect for individuals getting started
                    </p>
                  </CardHeader>
                  <Separator data-id="4b2db94d-175f-5cf1-835d-7c1fef184338" />
                  <CardContent
                    className="flex p-0 flex-col gap-3"
                    data-id="837fd4a4-d547-5b55-9bdf-03534ef7ed29"
                  >
                    <div
                      className="flex items-start gap-2"
                      data-id="82a5eb6e-e334-5f5f-9bf6-99fdd1039315"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="f489083f-88a5-5fde-ad2e-6c6dcbebcb0c"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="6be30e95-7991-509a-a8d0-f13dd54df49b"
                      >
                        Up to 2 GB storage
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="97721b44-2018-5cb7-9567-e52471c3b7cb"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="96ecf276-1b31-564a-a018-dcfd3da8e316"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="b8f0cf49-e3db-57ba-b8ee-8a7a6b466a33"
                      >
                        100 file uploads / month
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="49209638-3f9d-5a5f-ae14-69af86029249"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="2519ec50-1aa3-5e85-b236-a8a54aacd087"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="bfdf82c6-4612-57f0-ba6e-a11dddec8fd5"
                      >
                        1 team member
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="10b4834b-3989-5422-b766-ebdbe7f1a5d0"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="9bbd8943-0459-5767-b2f8-48b672f0e28a"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="bf439bfc-a757-548b-ab47-f30362cc55c0"
                      >
                        Basic Search and Tags
                      </span>
                    </div>
                    <div
                      className="opacity-50 flex items-start gap-2"
                      data-id="3f2c1620-1845-59f4-a4cc-90f4cc2c18a7"
                    >
                      <X
                        className="size-4 text-[#71717b] mt-0.5"
                        data-id="5ab69cf1-641a-56e6-9b7a-d9b5ef3380c2"
                      />
                      <span
                        className="line-through text-sm leading-5"
                        data-id="c2ec4514-2c8c-516a-bdf6-58621ad9bbdc"
                      >
                        API access
                      </span>
                    </div>
                    <div
                      className="opacity-50 flex items-start gap-2"
                      data-id="d029aa1f-866f-5b95-9c0e-6464a6715e74"
                    >
                      <X
                        className="size-4 text-[#71717b] mt-0.5"
                        data-id="93734a80-048a-5060-85df-0ab8b400952e"
                      />
                      <span
                        className="line-through text-sm leading-5"
                        data-id="f35f15f6-f3e8-5d7b-a019-d5fe916b437e"
                      >
                        Priority support
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter
                    className="p-0"
                    data-id="bfc3a1d8-0539-51b1-bd8d-9797f6b709b7"
                  >
                    <Button
                      className="w-full"
                      variant="outline"
                      data-id="0d66adf2-d465-55f4-a95a-deba31e73d01"
                    >
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
                <Card
                  className="relative shadow-lg shadow-primary/10 border-[#2b7fff] border-2 border-solid p-6 gap-4"
                  data-id="270eca14-21c6-57fd-8382-a7d94338fe02"
                >
                  <div
                    className="left-1/2 -translate-x-1/2 absolute -top-3"
                    data-id="813e0dd0-a9cd-5656-b945-dc7ec4901019"
                  >
                    <Badge
                      className="bg-[#2b7fff] text-blue-50 text-[11px] border-black/1 border-0 border-solid px-3 py-0.5"
                      data-id="037e95ad-f2f1-5205-94a2-ae9ab67ea3c4"
                    >
                      <Star
                        className="size-3 fill-current mr-1"
                        data-id="1874ba3e-fe44-5593-9023-02e766b5426e"
                      />
                      Most Popular
                    </Badge>
                  </div>
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="99e9c16b-9b19-5a13-9a66-3f7585963014"
                  >
                    <div
                      className="flex items-center gap-2"
                      data-id="6abefdd7-cc42-5f12-89d2-6ec528e000cf"
                    >
                      <div
                        className="size-9 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                        data-id="b9c20c42-cbfc-5e27-a5f8-ff35b4e3f627"
                      >
                        <Zap
                          className="size-4 text-[#2b7fff]"
                          data-id="9589ba31-66a8-52db-8e0f-bffb7d667d74"
                        />
                      </div>
                      <span
                        className="font-medium text-[#2b7fff] text-sm leading-5"
                        data-id="1e69cd92-fe98-57c1-968a-e2f4da20e8a3"
                      >
                        Pro
                      </span>
                    </div>
                    <div
                      className="items-baseline flex mt-2 gap-1"
                      data-id="7da24d0f-993d-5ab6-ae06-cf7e1d229a8c"
                    >
                      <span
                        className="font-semibold text-4xl leading-10 tracking-tight"
                        data-id="f851f3ab-dc0c-52ce-8441-b1f8326d19a2"
                      >
                        $19
                      </span>
                      <span
                        className="text-[#71717b] text-sm leading-5"
                        data-id="7ba3c2af-35ce-5044-b550-356e06b4c0a9"
                      >
                        /month
                      </span>
                    </div>
                    <p
                      className="text-[#71717b] text-xs leading-4"
                      data-id="fb9200ca-5e15-563f-8c93-17b73ed1144d"
                    >
                      Billed yearly at $182.40 · Save $45.60
                    </p>
                  </CardHeader>
                  <Separator data-id="cdf8eefd-88a7-5c26-9fac-68f723420c6c" />
                  <CardContent
                    className="flex p-0 flex-col gap-3"
                    data-id="e7956926-d527-5b4e-80b8-ec4adad79bfe"
                  >
                    <div
                      className="flex items-start gap-2"
                      data-id="4aea1a11-6521-5fc5-ad60-26ef4b84f067"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="22b8a6fd-e590-5adb-ad07-e795bffd0346"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="6c970d42-b58c-5782-9cd1-e06e11d89ea2"
                      >
                        Up to 500 GB storage
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="6283c8b7-9903-5d5a-beb7-e925d5e97df5"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="f6f4d3e3-3d74-54c3-b145-22937349cb4d"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="4e695665-b991-530e-82a4-639087d1d56a"
                      >
                        Unlimited file uploads
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="0100d5bd-40b2-52d7-a5cc-97b9927e17d1"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="50db3cfa-3bec-5b53-b7a0-f2373bb16154"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="c8ffef99-c712-5fba-a174-453fa8cc0f7f"
                      >
                        Up to 10 team members
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="5a094fec-20b7-5aed-a8e3-585808d3ab57"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="c6b0d39e-8072-541b-ad75-ccc14c305185"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="a56d69f3-1c3e-56fb-82d2-663501fa9bdc"
                      >
                        Advanced Search and OCR
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="b97258b5-ab5c-5b80-83de-dc719b8a05ad"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="a036c5eb-0894-5025-85b1-1db2ca22ef87"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="85d7279d-34c3-53d3-ae9a-d4dbd1c2b086"
                      >
                        API access (10K req/mo)
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="a963a2e4-2a68-5edf-b362-03332e40e97c"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="bb17b0f0-99e2-5691-9454-289ccec4895c"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="a4d3ef24-0f47-5c01-939c-ba8a8dc895aa"
                      >
                        Priority email support
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter
                    className="p-0"
                    data-id="ab11118c-8629-5ecf-88fa-1571cbd04ae9"
                  >
                    <Button
                      className="bg-[#2b7fff] text-blue-50 w-full"
                      data-id="20ada11f-164b-5dde-9106-a0aa7bf34bdd"
                    >
                      Upgrade to Pro
                      <ArrowRight
                        className="size-4 ml-1"
                        data-id="1fd7dd2b-37bc-5b9d-a3e1-e8ff0dbff99f"
                      />
                    </Button>
                  </CardFooter>
                </Card>
                <Card
                  className="border-zinc-200 border-1 border-solid p-6 gap-4"
                  data-id="69271c1d-a4d3-5e0e-86a1-ea7db25ba0b3"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="49f430a4-fa47-5b80-85ed-a93262825fb8"
                  >
                    <div
                      className="flex items-center gap-2"
                      data-id="144f04dd-69de-5442-9d31-c38b19dbe5dc"
                    >
                      <div
                        className="size-9 rounded-lg bg-zinc-100 flex justify-center items-center"
                        data-id="4ecb6e3a-a316-533d-bf45-fdd07e1ba620"
                      >
                        <Building2
                          className="size-4 text-zinc-950"
                          data-id="b92dd0fb-97a0-5d2a-a7f1-d3ab8e38b423"
                        />
                      </div>
                      <span
                        className="font-medium text-sm leading-5"
                        data-id="7acf9f44-c93d-564c-b329-e7133c979a48"
                      >
                        Enterprise
                      </span>
                    </div>
                    <div
                      className="items-baseline flex mt-2 gap-1"
                      data-id="6f9c412a-793e-5025-84fe-3d1cf62aa6f7"
                    >
                      <span
                        className="font-semibold text-4xl leading-10 tracking-tight"
                        data-id="1db863e9-ca12-5f95-8abf-072297b27982"
                      >
                        $49
                      </span>
                      <span
                        className="text-[#71717b] text-sm leading-5"
                        data-id="53e0f992-10e2-56d6-9717-e7e578edf93e"
                      >
                        /month
                      </span>
                    </div>
                    <p
                      className="text-[#71717b] text-xs leading-4"
                      data-id="5022479b-8888-54a0-a382-6add18e84016"
                    >
                      For organizations with advanced needs
                    </p>
                  </CardHeader>
                  <Separator data-id="2d22de77-98ac-5bf4-be12-814e78db11b0" />
                  <CardContent
                    className="flex p-0 flex-col gap-3"
                    data-id="86b6223d-5af4-5efb-8e80-da621ff7f51d"
                  >
                    <div
                      className="flex items-start gap-2"
                      data-id="6fd69c00-05f5-5ff5-be38-42be90ef6e42"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="879f0e2e-f0b7-5f48-89e9-725085dedc24"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="8224a441-ffcb-5c2d-918b-a75228d5eb25"
                      >
                        Unlimited storage
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="ee805901-4e4f-5044-84ce-1ce05ef12a93"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="5277d606-bcda-5129-9929-1ff7e30e00f4"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="abf736df-9df6-5df0-ab33-780c01f2d40c"
                      >
                        Unlimited team members
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="6cc054bb-0034-5d88-a66f-3f7af6f1e78f"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="d255c901-f8bb-5b8a-b0f8-a609a5f4a6f3"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="9c402cf1-339f-5048-9107-c27238930ad9"
                      >{`SSO & SAML 2.0`}</span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="32346505-7eb5-5a9b-9439-d1a0f3d52e30"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="99a48ec2-7314-57f6-86fd-4d23c77a4f70"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="9ae2e0eb-e59e-5769-b6ae-04eadad2780c"
                      >
                        Custom integrations
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="c771b619-37fb-526d-aa0f-e33fe10ee034"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="1e365a09-ae2e-5ca2-a9db-280f87269c46"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="51d30d2a-8314-5d82-bfe4-b0ae917a93a6"
                      >
                        Unlimited API access
                      </span>
                    </div>
                    <div
                      className="flex items-start gap-2"
                      data-id="86586dfd-0c01-5fba-b32c-3987ac285c1b"
                    >
                      <Check
                        className="size-4 text-[#2b7fff] mt-0.5"
                        data-id="a2beba52-e8e4-55f1-bd6a-b40babb6c60e"
                      />
                      <span
                        className="text-sm leading-5"
                        data-id="a110676f-eee5-58e7-8fc4-5d8db90a043c"
                      >
                        Dedicated account manager
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter
                    className="p-0"
                    data-id="2a8fc266-01b8-5176-bc33-0238171f3b51"
                  >
                    <Button
                      className="w-full"
                      variant="outline"
                      data-id="4fcf7d49-3fec-537e-a82e-b0719e0a62d7"
                    >
                      Contact Sales
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <Card
                className="bg-white p-6 gap-4"
                data-id="281cea5e-087b-5ca6-ba69-436d44b0bd22"
              >
                <CardHeader
                  className="p-0 gap-1"
                  data-id="5dcde4d5-7cb0-5f89-a3a8-ca21edcae74d"
                >
                  <h3
                    className="font-semibold text-base leading-6"
                    data-id="33a964bc-df8e-5838-9e03-ae465bcf903f"
                  >
                    Frequently asked
                  </h3>
                  <p
                    className="text-[#71717b] text-xs leading-4"
                    data-id="6e45b43b-eddc-54c7-bc83-b39bdbf2c4f2"
                  >
                    Common questions about our plans and billing
                  </p>
                </CardHeader>
                <CardContent
                  className="grid grid-cols-2 p-0 gap-6"
                  data-id="21c81f7e-6cfb-5df4-b8d9-154612cd7d71"
                >
                  <div
                    className="flex flex-col gap-1"
                    data-id="322158e4-fd53-5080-99eb-2d92fb1ac07a"
                  >
                    <div
                      className="flex items-center gap-2"
                      data-id="724cd86a-9ea3-50fd-8ab9-0b1260149448"
                    >
                      <HelpCircle
                        className="size-4 text-[#2b7fff]"
                        data-id="6040a6bc-9fc8-5cf6-af72-ebf3db9b3ba1"
                      />
                      <span
                        className="font-medium text-sm leading-5"
                        data-id="e894cde4-7ff5-5b1a-8314-0710798ee4c1"
                      >
                        Can I change plans anytime?
                      </span>
                    </div>
                    <p
                      className="text-[#71717b] text-xs leading-4 pl-6"
                      data-id="e2956112-85fe-5813-8222-66743b265a01"
                    >
                      Yes, upgrade or downgrade at any time. Changes prorate
                      automatically.
                    </p>
                  </div>
                  <div
                    className="flex flex-col gap-1"
                    data-id="4d5c164d-592d-5451-9b14-546a3273c7cc"
                  >
                    <div
                      className="flex items-center gap-2"
                      data-id="3cba3890-55dd-5908-9c4e-ce87efc2c537"
                    >
                      <HelpCircle
                        className="size-4 text-[#2b7fff]"
                        data-id="9eac19cf-81b4-5374-909e-a1e32fae067d"
                      />
                      <span
                        className="font-medium text-sm leading-5"
                        data-id="78dcd058-3cf8-5f95-ae7b-7fe983dfb553"
                      >
                        Do you offer refunds?
                      </span>
                    </div>
                    <p
                      className="text-[#71717b] text-xs leading-4 pl-6"
                      data-id="22d60603-cf0d-5990-85af-c85d6402e09c"
                    >
                      14-day money-back guarantee on all paid plans, no
                      questions asked.
                    </p>
                  </div>
                  <div
                    className="flex flex-col gap-1"
                    data-id="23953c15-0e70-5751-b328-e5ad09b7f625"
                  >
                    <div
                      className="flex items-center gap-2"
                      data-id="b7fb0ab6-03ac-573c-bc4a-3c74f15d1ab6"
                    >
                      <HelpCircle
                        className="size-4 text-[#2b7fff]"
                        data-id="7a49012a-72ea-53a7-82b5-6838d6c34f85"
                      />
                      <span
                        className="font-medium text-sm leading-5"
                        data-id="8cc68903-8eda-5055-b730-78ae463ce667"
                      >
                        What payment methods?
                      </span>
                    </div>
                    <p
                      className="text-[#71717b] text-xs leading-4 pl-6"
                      data-id="a09d311e-f86f-59f8-ac40-a44524000b9e"
                    >
                      All major credit cards, ACH, wire transfer for Enterprise
                      plans.
                    </p>
                  </div>
                  <div
                    className="flex flex-col gap-1"
                    data-id="7676a121-c086-52d8-818f-831fb3e0f2f0"
                  >
                    <div
                      className="flex items-center gap-2"
                      data-id="b5c0b36f-c5fb-50f3-9347-d8900b0c6f31"
                    >
                      <HelpCircle
                        className="size-4 text-[#2b7fff]"
                        data-id="911e27f0-2d6d-584b-95a7-a85fe63c57ed"
                      />
                      <span
                        className="font-medium text-sm leading-5"
                        data-id="d6a6ed5b-4b59-5059-8a0f-6ae79be7a37d"
                      >
                        Is there a free trial?
                      </span>
                    </div>
                    <p
                      className="text-[#71717b] text-xs leading-4 pl-6"
                      data-id="b4a274b6-30cd-514e-9e7c-33c1e65cfd35"
                    >
                      Pro includes a 14-day free trial. No credit card required
                      to start.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
