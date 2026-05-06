import {
  Aperture,
  ArrowRight,
  BookOpen,
  Boxes,
  Cloud,
  Compass,
  CreditCard,
  FileStack,
  FileText,
  Hexagon,
  History,
  LayoutDashboard,
  Lock,
  Mail,
  PlayCircle,
  Search,
  Sparkles,
  Star,
  Triangle,
  Upload,
  Users,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
        <div className="bg-white border-zinc-200 border-t-0 border-r-0 border-b border-l-0 border-solid w-full">
          <div
            className="max-w-285 flex mx-auto px-8 justify-between items-center h-16"
            data-id="d8d54570-229f-50d7-804e-0da636827e6e"
          >
            <div
              className="flex items-center gap-2"
              data-id="77db0b7d-678a-51ba-9fcd-9d807e12f178"
            >
              <div
                className="size-8 rounded-lg bg-[#2b7fff] flex justify-center items-center"
                data-id="6c0324d8-bf0d-55aa-ba9b-42f78ad8865d"
              >
                <FileStack
                  className="size-5 text-blue-50"
                  data-id="02841c5d-94e1-5c99-9571-2da4d2b960cf"
                />
              </div>
              <span
                className="font-semibold text-lg leading-7 tracking-tight"
                data-id="47f899e1-563b-5c25-81bf-7c8d9ffa3749"
              >
                DocuCentral
              </span>
            </div>
            <nav
              className="flex flex-row justify-center items-center gap-8"
              data-id="a4214a60-c071-5656-9f0e-4012d671f227"
            >
              <a
                className="font-medium text-[#2b7fff] text-sm  border-[#2b7fff] border-t-0 border-r-0 border-b-2 border-l-0 border-solid flex pb-1 items-center gap-2"
                data-id="f9b9c7bb-2b0b-5810-9e92-39256d8dcd52"
              >
                <LayoutDashboard
                  className="size-4"
                  data-id="79a84255-6024-5087-93cb-fa34bd07268b"
                />
                Dashboard
              </a>
              <a
                className="font-medium text-[#71717b] text-sm  flex pb-1 items-center gap-2"
                data-id="c2ae436d-ac14-54c1-b192-4a824a6db74b"
              >
                <Sparkles
                  className="size-4"
                  data-id="5ff9e1ca-58fa-5d70-8bfc-3bd8ba35da56"
                />
                Features
              </a>
              <a
                className="font-medium text-[#71717b] text-sm  flex pb-1 items-center gap-2"
                data-id="638d8095-9d9a-5055-a4df-e2ca2444afc7"
              >
                <CreditCard
                  className="size-4"
                  data-id="51ba6568-b6c3-5dbd-a44b-4b205ef1a4ee"
                />
                Pricing
              </a>
              <a
                className="font-medium text-[#71717b] text-sm  flex pb-1 items-center gap-2"
                data-id="744a78d3-dfa1-5f2a-8fd8-34db45dc777c"
              >
                <BookOpen
                  className="size-4"
                  data-id="f25bc322-854f-512f-8fad-4c1815ad4073"
                />
                Docs
              </a>
              <a
                className="font-medium text-[#71717b] text-sm  flex pb-1 items-center gap-2"
                data-id="b05ca84f-c388-52e9-8fec-db38024c1a0f"
              >
                <Mail
                  className="size-4"
                  data-id="54ee8d92-482a-5d21-983c-c76241933870"
                />
                Contact
              </a>
            </nav>
            <div
              className="flex items-center gap-2"
              data-id="19939c2c-4eb5-5360-9163-210da041b718"
            >
              <Button
                className="text-sm "
                variant="ghost"
                data-id="99042773-8ab0-5831-a4c4-a2f50ee773c3"
              >
                Sign in
              </Button>
              <Button
                className="bg-[#2b7fff] text-blue-50 text-sm "
                data-id="33d50ba7-9b4a-55af-8dcc-40526da064da"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
        <div
          className="max-w-285 mx-auto px-8 py-12"
          data-id="cad6a07a-8411-5799-90f6-c613c8acc5b1"
        >
          <div
            className="flex flex-col gap-12"
            data-id="11542692-f17b-5bf8-87c8-28f51cd86b1f"
          >
            <section
              className="grid grid-cols-2 items-center gap-12"
              data-id="ed888f87-0ab1-5983-bd2f-692670f2098c"
            >
              <div
                className="flex flex-col gap-6"
                data-id="988997b6-2c5a-577a-8ed0-18a43266c4d2"
              >
                <Badge
                  className="px-3 py-1 gap-2 w-fit"
                  variant="secondary"
                  data-id="dd46345f-74ec-5ef4-93b9-964c4bd4e0a4"
                >
                  <Sparkles
                    className="size-3 text-[#2b7fff]"
                    data-id="2770a220-101e-5ed1-bb1d-79a95a581f89"
                  />
                  New · AI-powered document insights
                </Badge>
                <h1
                  className="leading-tight font-bold text-5xl tracking-tight"
                  data-id="c68407df-4f0e-5685-b1bf-6ea5be75163c"
                >
                  The modern home for your team's
                  <span
                    className="text-[#2b7fff]"
                    data-id="43b7960b-68dd-54d1-badb-b40848c82b39"
                  >
                    documents
                  </span>
                </h1>
                <p
                  className="leading-relaxed text-[#71717b] text-base"
                  data-id="37db48a2-c9a8-54b3-87de-1c679bce2ac5"
                >
                  DocuCentral helps growing teams store, share, and collaborate
                  on documents with enterprise-grade security and a delightfully
                  simple interface.
                </p>
                <div
                  className="flex items-center gap-4"
                  data-id="617f8190-4072-5741-b387-4c2abb084021"
                >
                  <Button
                    className="bg-[#2b7fff] text-blue-50 px-6 gap-2 h-11"
                    data-id="dee0d78f-bc37-5a74-a98a-90e9694b4207"
                  >
                    Start for free
                    <ArrowRight
                      className="size-4"
                      data-id="2c36deb7-2f89-56b3-b714-b0f2d8273a0e"
                    />
                  </Button>
                  <Button
                    className="px-6 gap-2 h-11"
                    variant="outline"
                    data-id="ba528bd2-b9c2-541c-8e9e-3383d987f352"
                  >
                    <PlayCircle
                      className="size-4"
                      data-id="30421b34-3fa0-57b6-b97f-5ecd86ee7c5d"
                    />
                    Watch demo
                  </Button>
                </div>
                <div
                  className="flex pt-2 items-center gap-6"
                  data-id="d7fc166a-cb21-5e0c-acbb-9b624aae941d"
                >
                  <div
                    className="-space-x-2 flex"
                    data-id="620e0a29-0d68-5234-a537-7d21435d7d8b"
                  >
                    <div
                      className="size-8 rounded-full bg-[#f54900] border-white border-2 border-solid"
                      data-id="74eb80ba-320a-5d8d-82d0-e8b8631b546c"
                    />
                    <div
                      className="size-8 rounded-full bg-[#009689] border-white border-2 border-solid"
                      data-id="a50718e8-6229-54c3-b0e3-9215683796eb"
                    />
                    <div
                      className="size-8 rounded-full bg-[#ffb900] border-white border-2 border-solid"
                      data-id="c431ef8a-888f-5b9c-a7c3-6fbd10b9a1c5"
                    />
                    <div
                      className="size-8 rounded-full bg-[#fe9a00] border-white border-2 border-solid"
                      data-id="c55b7409-5634-5e2d-b6b8-74f5c6d1a3a8"
                    />
                  </div>
                  <div
                    className="flex flex-col"
                    data-id="53d56c39-ac6a-579f-8d47-4ad7587e9801"
                  >
                    <div
                      className="flex items-center gap-1"
                      data-id="94d5f622-f78d-519e-9534-a3b0ac55038e"
                    >
                      <Star
                        className="size-3.5 fill-chart4 text-[#ffb900]"
                        data-id="edcd98eb-4dbf-5d0d-b7fe-69568b36a433"
                      />
                      <Star
                        className="size-3.5 fill-chart4 text-[#ffb900]"
                        data-id="31beac2e-ca13-5942-84ed-6c6ccb1fe92b"
                      />
                      <Star
                        className="size-3.5 fill-chart4 text-[#ffb900]"
                        data-id="f1714408-f05a-52ee-a93d-c77cf1fc775b"
                      />
                      <Star
                        className="size-3.5 fill-chart4 text-[#ffb900]"
                        data-id="c8cf4fde-facf-5877-98cc-3d3a3dca219d"
                      />
                      <Star
                        className="size-3.5 fill-chart4 text-[#ffb900]"
                        data-id="f7082adb-ca48-51d5-af91-a0063147e09f"
                      />
                      <span
                        className="font-medium text-sm  ml-1"
                        data-id="1458007f-2385-54d1-b615-447e30252d95"
                      >
                        4.9
                      </span>
                    </div>
                    <span
                      className="text-[#71717b] text-xs leading-4"
                      data-id="9942cd0e-3421-59d0-8493-f4f638f1bf06"
                    >
                      Trusted by 12,000+ teams worldwide
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="relative shadow-2xl rounded-2xl border-zinc-200 border border-solid overflow-hidden"
                data-id="513b008f-3928-5ba1-8ff3-6141c8d2ad5d"
              >
                <img
                  alt="Team collaboration"
                  className="object-cover w-full h-105"
                  data-authorname="Stanley Dai"
                  data-authorurl="https://unsplash.com/@stanleydai"
                  data-photoid="x_fhKJpVxhQ"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  data-id="aaac2bea-b6ca-5f08-859f-45915a341c45"
                />
                <div
                  className="bg-linear-to-t from-foreground/60 to-transparent absolute inset-0"
                  data-id="d2e9d333-ebad-5e62-82ba-978be758d9f7"
                />
                <div
                  className="absolute inset-x-6 bottom-6"
                  data-id="a1c85b31-a7d5-5361-89a0-ce89ffa6e921"
                >
                  <Card
                    className="backdrop-blur bg-white/95 p-4 gap-2"
                    data-id="fd821480-a36c-5eaf-8d90-e95d90a8a763"
                  >
                    <CardContent
                      className="flex p-0 justify-between items-center gap-2"
                      data-id="f4284294-7f00-53e9-8bc1-3f3e497a7f58"
                    >
                      <div
                        className="flex items-center gap-3"
                        data-id="9759957f-efa1-58b4-950c-139ed96374a0"
                      >
                        <div
                          className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                          data-id="933294ce-d7fe-5345-b4ef-8e2b9110bdcf"
                        >
                          <FileText
                            className="size-5 text-[#2b7fff]"
                            data-id="a3bdd59b-5d8a-5b9c-8c3f-f864deedffce"
                          />
                        </div>
                        <div
                          className="flex flex-col"
                          data-id="3326f243-3ef5-58fd-adcc-658fb2eba280"
                        >
                          <span
                            className="font-medium text-sm "
                            data-id="82753389-91f2-59c7-b68a-4da08b661a78"
                          >
                            Q4-Strategy.pdf
                          </span>
                          <span
                            className="text-[#71717b] text-xs leading-4"
                            data-id="4f382225-eb98-59dc-ab0d-8cc249706b81"
                          >
                            Updated 2 minutes ago · 3 collaborators
                          </span>
                        </div>
                      </div>
                      <Badge
                        className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid"
                        data-id="a93e604d-5832-545c-9307-5a5d6e758dfe"
                      >
                        Live
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
            <section
              className="flex py-4 flex-col items-center gap-2"
              data-id="c5782fe1-00ca-568a-8f52-35929361aee6"
            >
              <span
                className="uppercase text-[#71717b] text-xs leading-4 tracking-widest"
                data-id="116b1d3e-28e9-5714-b404-51b3135e793f"
              >
                Trusted by leading teams
              </span>
              <div
                className="opacity-60 flex px-12 pt-2 justify-between items-center w-full"
                data-id="b2dd2043-c2c7-50d6-a633-688d030c0115"
              >
                <div
                  className="text-zinc-950 flex items-center gap-2"
                  data-id="72604df6-ac5e-5803-9aed-fe863a99aa79"
                >
                  <Hexagon
                    className="size-5"
                    data-id="c2c13804-ce23-5d8c-b51e-34054704dc3c"
                  />
                  <span
                    className="font-semibold"
                    data-id="9ee84ae1-95b5-5905-8d6c-6e2586d18dae"
                  >
                    Hexform
                  </span>
                </div>
                <div
                  className="text-zinc-950 flex items-center gap-2"
                  data-id="2bed9975-dd30-5d42-a971-6d2e15557b63"
                >
                  <Triangle
                    className="size-5"
                    data-id="6d3556f3-84f5-568b-bac4-11f3271d8735"
                  />
                  <span
                    className="font-semibold"
                    data-id="b8435b12-5dc7-5100-a05d-82b8d65058db"
                  >
                    Trilogy
                  </span>
                </div>
                <div
                  className="text-zinc-950 flex items-center gap-2"
                  data-id="6ddca171-347e-5469-a3fc-539be10a1d4d"
                >
                  <Boxes
                    className="size-5"
                    data-id="591413de-5671-5b4e-8a3b-32127dec1338"
                  />
                  <span
                    className="font-semibold"
                    data-id="38062e37-3e7e-5a6e-88bb-c5ae8b65678c"
                  >
                    Boxworks
                  </span>
                </div>
                <div
                  className="text-zinc-950 flex items-center gap-2"
                  data-id="ec9d3d36-c69f-5f0e-99ce-563c22b2796f"
                >
                  <Cloud
                    className="size-5"
                    data-id="49050078-6b87-52ab-89aa-646f31bffc6d"
                  />
                  <span
                    className="font-semibold"
                    data-id="1f9dba2d-6b18-54f8-a7f2-8108e57e7d9e"
                  >
                    Cloudly
                  </span>
                </div>
                <div
                  className="text-zinc-950 flex items-center gap-2"
                  data-id="a11fd7b1-bc68-5172-a406-ea702d76ca79"
                >
                  <Aperture
                    className="size-5"
                    data-id="c753428a-a2bc-589d-b990-cd1067fab4a0"
                  />
                  <span
                    className="font-semibold"
                    data-id="fc0be343-d13a-5652-a893-2245355ad3e6"
                  >
                    Aperture
                  </span>
                </div>
                <div
                  className="text-zinc-950 flex items-center gap-2"
                  data-id="b32cf3d2-645d-5fd5-9a9f-deaaed9ea257"
                >
                  <Compass
                    className="size-5"
                    data-id="ded3e0dc-6701-5131-a57c-d66332b9d72e"
                  />
                  <span
                    className="font-semibold"
                    data-id="f3c1b07c-d4f4-53ec-8a90-525650c2bb98"
                  >
                    Northstar
                  </span>
                </div>
              </div>
            </section>
            <section
              className="flex flex-col gap-8"
              data-id="33125cb3-8b61-5243-bfa1-13624bf1a077"
            >
              <div
                className="text-center flex flex-col items-center gap-2"
                data-id="ffccb902-848f-55fd-b51c-376f3435da6b"
              >
                <Badge
                  className="w-fit"
                  variant="secondary"
                  data-id="d298ca57-8e98-5c7d-b634-868708898eb0"
                >
                  Features
                </Badge>
                <h2
                  className="font-bold text-3xl leading-9 tracking-tight"
                  data-id="2825187f-4fdd-5325-94b4-b344418efc27"
                >
                  Everything you need to manage documents
                </h2>
                <p
                  className="max-w-xl text-[#71717b] text-sm "
                  data-id="3cc2431b-d67e-5732-8699-0bc68d0a47fa"
                >
                  From upload to archive, DocuCentral handles the entire
                  document lifecycle so your team can focus on the work that
                  matters.
                </p>
              </div>
              <div
                className="grid grid-cols-3 gap-6"
                data-id="86f81f3f-7ce4-59a6-86d1-198c6ff19381"
              >
                <Card
                  className="p-6 gap-4"
                  data-id="6a539af3-fb21-5d31-bd7d-72b7eae30cc2"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="9d954f45-a0e8-5e84-bdb7-80e2d1edbf47"
                  >
                    <div
                      className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                      data-id="a707866f-2c40-5182-9ed2-8b563e031a3e"
                    >
                      <Upload
                        className="size-5 text-[#2b7fff]"
                        data-id="018d061f-c4b0-5f2c-85ec-15e0bac96d95"
                      />
                    </div>
                    <CardTitle
                      className="text-base leading-6"
                      data-id="45cca74d-3ef3-58f6-bb05-a910b3dde658"
                    >
                      Smart upload
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-2"
                    data-id="955445d2-a0b5-5c08-b89b-c45cb0df437a"
                  >
                    <p
                      className="leading-relaxed text-[#71717b] text-sm"
                      data-id="e0b58bcb-8d97-5394-95b3-ddc2da3bf79e"
                    >
                      Drag, drop and watch as DocuCentral auto-tags, classifies
                      and routes your files to the right folders.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-4"
                  data-id="da335d9b-93c5-565b-a5c3-ecb68f0ce7a8"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="0700748e-91c4-5388-bd34-1b651af97712"
                  >
                    <div
                      className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                      data-id="ca503309-be9b-5415-938b-55663ff1c2b3"
                    >
                      <Users
                        className="size-5 text-[#2b7fff]"
                        data-id="7a31f58b-a151-53c3-99ac-91eac81482c3"
                      />
                    </div>
                    <CardTitle
                      className="text-base leading-6"
                      data-id="4237c347-1a2a-5b99-ae7b-9ac0e21d08ba"
                    >
                      Real-time collaboration
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-2"
                    data-id="c3e8be9b-2684-5fac-b380-9e31da87552e"
                  >
                    <p
                      className="leading-relaxed text-[#71717b] text-sm"
                      data-id="57c5eab9-4781-51ef-b288-69ce6f4dbb61"
                    >
                      Comment, mention teammates and review changes together —
                      no more emailed attachments.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-4"
                  data-id="39fa3577-b853-50d9-862b-d346d28ba00a"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="b7d9949e-30ae-5469-af41-dbf56a368602"
                  >
                    <div
                      className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                      data-id="573d8a25-3a85-5c1d-bbd4-ab8a5c83eb44"
                    >
                      <Lock
                        className="size-5 text-[#2b7fff]"
                        data-id="95029f77-d280-5591-9ab2-b146c156d242"
                      />
                    </div>
                    <CardTitle
                      className="text-base leading-6"
                      data-id="da93ef04-3f3a-5852-8386-4d23a1272c27"
                    >
                      Granular permissions
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-2"
                    data-id="812dd6ba-26b3-5db2-bc84-ad0a0dc1bce5"
                  >
                    <p
                      className="leading-relaxed text-[#71717b] text-sm "
                      data-id="2e42e7ab-814e-54fb-989d-af730267d873"
                    >
                      Role-based access, audit trails and SSO keep sensitive
                      documents in the right hands only.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-4"
                  data-id="0997b877-25d4-5828-9b47-d609032ca826"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="cfeb83a7-1360-5ac1-b2a4-b859439556be"
                  >
                    <div
                      className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                      data-id="67291504-1960-53b3-a3c3-93cdb66d7db4"
                    >
                      <Search
                        className="size-5 text-[#2b7fff]"
                        data-id="860bb448-f075-5dea-9cac-17deb13d1c41"
                      />
                    </div>
                    <CardTitle
                      className="text-base leading-6"
                      data-id="5c7ba137-fb94-5771-a28d-7e5cf50b572f"
                    >
                      Universal search
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-2"
                    data-id="16fa34e8-1f44-5b03-a9d3-fb8ba13581ba"
                  >
                    <p
                      className="leading-relaxed text-[#71717b] text-sm "
                      data-id="d9c5edbd-1058-598c-9749-1c8dff96ec52"
                    >
                      Find any document in milliseconds with full-text and
                      OCR-powered semantic search.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-4"
                  data-id="677fd3fe-cd02-5e2a-b9cf-d1c3333c7853"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="322232ac-613e-5737-a0af-0c98bd3fce22"
                  >
                    <div
                      className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                      data-id="8dd4742d-142b-5492-8775-e5f4d267342d"
                    >
                      <History
                        className="size-5 text-[#2b7fff]"
                        data-id="f38563cc-d9c6-5abe-ac8e-17db5db153f1"
                      />
                    </div>
                    <CardTitle
                      className="text-base leading-6"
                      data-id="e5d838f9-6352-55ad-a3ba-56e728c14350"
                    >
                      Version history
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-2"
                    data-id="6d6149a4-b293-5f60-a868-2c302ca614ff"
                  >
                    <p
                      className="leading-relaxed text-[#71717b] text-sm "
                      data-id="18c04e96-626a-5fc0-a007-599d88328318"
                    >
                      Every change tracked, every version restorable. Roll back
                      to any point in time, instantly.
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className="p-6 gap-4"
                  data-id="b604ebca-b99d-5997-833f-6b7d5e276d91"
                >
                  <CardHeader
                    className="p-0 gap-2"
                    data-id="b8ab83ac-c391-501b-81dc-427b900c1ba2"
                  >
                    <div
                      className="size-10 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center"
                      data-id="c7bfdddc-9334-562f-953c-acb97e3ca7a3"
                    >
                      <Workflow
                        className="size-5 text-[#2b7fff]"
                        data-id="f2793f99-b44f-56b0-aea6-dd9ae2b72bfe"
                      />
                    </div>
                    <CardTitle
                      className="text-base leading-6"
                      data-id="15102d40-c72a-507f-bdca-a7ba1a57d691"
                    >
                      Approval workflows
                    </CardTitle>
                  </CardHeader>
                  <CardContent
                    className="p-0 gap-2"
                    data-id="3ebb4d2e-fbec-59b7-bd35-59e7cc0ea896"
                  >
                    <p
                      className="leading-relaxed text-[#71717b] text-sm "
                      data-id="8b7df5d0-9445-51d6-a116-9c18ca4d447c"
                    >
                      Build custom review and signoff flows that route documents
                      through your org automatically.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            <section
              className="grid grid-cols-4 gap-6"
              data-id="4cffefb3-1053-5042-a6b0-19743f9206d1"
            >
              <Card
                className="p-6 gap-2"
                data-id="226619ae-1b09-5602-959e-d37d46aae199"
              >
                <CardContent
                  className="flex p-0 flex-col gap-2"
                  data-id="a28e088e-9dab-5259-9383-3c374683deff"
                >
                  <span
                    className="font-bold text-[#2b7fff] text-3xl leading-9"
                    data-id="c5e3c991-7e0d-520e-8c94-e44bcb7ee7dc"
                  >
                    12K+
                  </span>
                  <span
                    className="text-[#71717b] text-xs leading-4"
                    data-id="c80d585c-b10d-51e4-8b51-4f2313c3c2a8"
                  >
                    Active teams
                  </span>
                </CardContent>
              </Card>
              <Card
                className="p-6 gap-2"
                data-id="beb9f340-9415-545f-a978-0a07a50d5b7a"
              >
                <CardContent
                  className="flex p-0 flex-col gap-2"
                  data-id="55efb37f-72f2-5687-b290-4d7b69559292"
                >
                  <span
                    className="font-bold text-[#2b7fff] text-3xl leading-9"
                    data-id="c2bc506c-a190-5b0c-b1f8-22e7ebfe4e90"
                  >
                    2.4M
                  </span>
                  <span
                    className="text-[#71717b] text-xs leading-4"
                    data-id="f15771b3-0b88-5c73-a828-2019d5d2c075"
                  >
                    Documents managed
                  </span>
                </CardContent>
              </Card>
              <Card
                className="p-6 gap-2"
                data-id="49a0a1df-35a2-5fd2-8e89-4cdb3545d3c5"
              >
                <CardContent
                  className="flex p-0 flex-col gap-2"
                  data-id="55dedc2d-9666-5ffa-acfc-4cbf135d3e86"
                >
                  <span
                    className="font-bold text-[#2b7fff] text-3xl leading-9"
                    data-id="397c7028-86da-5e86-b2fa-3528482705cf"
                  >
                    99.99%
                  </span>
                  <span
                    className="text-[#71717b] text-xs leading-4"
                    data-id="9cdbf5e7-8035-595b-8892-2704ffd86365"
                  >
                    Uptime SLA
                  </span>
                </CardContent>
              </Card>
              <Card
                className="p-6 gap-2"
                data-id="cc31c048-f199-5a79-84c7-a347718376e4"
              >
                <CardContent
                  className="flex p-0 flex-col gap-2"
                  data-id="58832ca9-7ca9-56b2-a263-28573046e943"
                >
                  <span
                    className="font-bold text-[#2b7fff] text-3xl leading-9"
                    data-id="45ceed40-49ba-5ff9-8fef-adaf57c1fe7d"
                  >
                    SOC 2
                  </span>
                  <span
                    className="text-[#71717b] text-xs leading-4"
                    data-id="b43ebbf9-d376-5d0a-9c1e-a3c3e006b13e"
                  >
                    Type II certified
                  </span>
                </CardContent>
              </Card>
            </section>
            <section data-id="85c5246a-16bf-5793-85e5-ed50ab7215a4">
              <Card
                className="bg-[#2b7fff] text-blue-50 border-black/1 border-0 border-solid p-12 gap-6"
                data-id="321b772f-482b-586d-b539-c74247ad891f"
              >
                <CardContent
                  className="flex p-0 justify-between items-center gap-6"
                  data-id="976952e9-02b7-5ebe-987a-8f38c5756b2e"
                >
                  <div
                    className="max-w-xl flex flex-col gap-2"
                    data-id="92453eae-3906-5e81-8bd0-8e168d863b91"
                  >
                    <h3
                      className="font-bold text-2xl leading-8 tracking-tight"
                      data-id="d4e8a9ab-9dde-5a31-a602-4c85c55fece7"
                    >
                      Ready to bring order to your documents?
                    </h3>
                    <p
                      className="opacity-90 text-sm "
                      data-id="85b9e001-d590-53ca-9026-600fb9e17882"
                    >
                      Start your 14-day free trial. No credit card required,
                      cancel anytime.
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-3"
                    data-id="44ff8e67-d8eb-56f4-9f1b-32bb572f6efa"
                  >
                    <Button
                      className="bg-white text-zinc-950 px-6 gap-2 h-11"
                      data-id="6b45b9d2-f6ef-50d2-a4e8-9f8b95772f12"
                    >
                      Get started free
                      <ArrowRight
                        className="size-4"
                        data-id="a59728da-1de7-5866-b850-409eaaf5969f"
                      />
                    </Button>
                    <Button
                      className="bg-transparent text-blue-50 border-blue-50/30 border-0 border-solid px-6 h-11"
                      variant="outline"
                      data-id="78b76186-f8d9-5caa-ba1c-13cfc2b1f303"
                    >
                      Talk to sales
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
        <div
          className="bg-white border-zinc-200 border-t border-r-0 border-b-0 border-l-0 border-solid w-full"
          data-id="bbb0ec8a-4298-5e31-8925-59cb162690f8"
        >
          <div
            className="max-w-285 flex mx-auto px-8 py-6 justify-between items-center"
            data-id="af0ee861-ae6e-56a2-906d-eb9b7ba0c782"
          >
            <div
              className="flex items-center gap-2"
              data-id="4c87c107-23fa-541c-bc4e-f07f6a7b09dd"
            >
              <div
                className="size-6 rounded-sm bg-[#2b7fff] flex justify-center items-center"
                data-id="312a46c2-85a0-55ea-a43c-cc8bbc30991b"
              >
                <FileStack
                  className="size-3.5 text-blue-50"
                  data-id="39becd2f-e9f6-5386-b413-d658a8809348"
                />
              </div>
              <span
                className="text-[#71717b] text-xs leading-4"
                data-id="c21226c0-c92d-5502-a3dc-c9193e000b76"
              >
                © 2025 DocuCentral. All rights reserved.
              </span>
            </div>
            <div
              className="text-[#71717b] text-xs leading-4 flex items-center gap-6"
              data-id="eb125cbc-b102-56b4-a886-a5ddd64f6ff1"
            >
              <a data-id="cd403bdc-3c76-565a-b8f8-3a57768d6c95">Privacy</a>
              <a data-id="d4c907bf-6c77-5b3d-912d-d368b237bdb9">Terms</a>
              <a data-id="b3dc0c89-1805-5f0b-91e3-24edfb723255">Security</a>
              <a data-id="745c3a81-8b97-5cff-acd8-746d43ee9b58">Status</a>
            </div>
          </div>
        </div>
      </div>
  );
}
