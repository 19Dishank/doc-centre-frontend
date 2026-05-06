import { ArrowRight, Building2, Check, HelpCircle, Sparkle, Star, X, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
export default function BillingPage() {
  return (
    <div>
      <div
        className="bg-white text-zinc-950 flex w-full h-fit h-fit min-h-screen overflow-visible"
        style={{ fontFamily: "Inter, sans-serif" }}>
        <main className="flex flex-col flex-1">
          <div className="bg-zinc-100/40 p-8 flex-1 overflow-auto">
            <div className="max-w-[860px] flex mx-auto flex-col gap-8">
              <div className="text-center flex flex-col items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-[#2b7fff]/10 text-[#2b7fff] border-black/1 border-0 border-solid">
                  Pricing
                </Badge>
                <h1 className="font-semibold text-3xl leading-9 tracking-tight">Choose the plan that fits your team</h1>
                <p className="max-w-md text-[#71717b] text-sm leading-5">
                  Simple, transparent pricing. No hidden fees. Cancel anytime.
                </p>
                <div className="inline-flex rounded-full bg-zinc-100 border-zinc-200 border border-solid mt-4 p-1 items-center gap-2">
                  <button className="font-medium rounded-full text-[#71717b] text-sm leading-5 px-4 py-1.5">
                    Monthly
                  </button>
                  <button className="shadow-sm font-medium rounded-full bg-white text-zinc-950 text-sm leading-5 flex px-4 py-1.5 items-center gap-2">
                    Yearly
                    <Badge className="bg-[#2b7fff]/10 text-[#2b7fff] text-[10px] border-black/1 border-0 border-solid px-1.5 py-0">
                      Save 20%
                    </Badge>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <Card className="border-zinc-200 border border-solid p-6 gap-4">
                  <CardHeader className="p-0 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="size-9 rounded-lg bg-zinc-100 flex justify-center items-center">
                        <Sparkle className="size-4 text-[#71717b]" />
                      </div>
                      <span className="font-medium text-[#71717b] text-sm leading-5">Free</span>
                    </div>
                    <div className="items-baseline flex mt-2 gap-1">
                      <span className="font-semibold text-4xl leading-10 tracking-tight">$0</span>
                      <span className="text-[#71717b] text-sm leading-5">/month</span>
                    </div>
                    <p className="text-[#71717b] text-xs leading-4">Perfect for individuals getting started</p>
                  </CardHeader>
                  <Separator />
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Up to 2 GB storage</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">100 file uploads / month</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">1 team member</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Basic Search and Tags</span>
                    </div>
                    <div className="opacity-50 flex items-start gap-2">
                      <X className="size-4 text-[#71717b] mt-0.5" />
                      <span className="line-through text-sm leading-5">API access</span>
                    </div>
                    <div className="opacity-50 flex items-start gap-2">
                      <X className="size-4 text-[#71717b] mt-0.5" />
                      <span className="line-through text-sm leading-5">Priority support</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Button className="w-full" variant="outline">
                      Get Started
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="relative shadow-lg shadow-primary/10 border-[#2b7fff] border-2 border-solid p-6 gap-4">
                  <div className="left-1/2 -translate-x-1/2 absolute -top-3">
                    <Badge className="bg-[#2b7fff] text-blue-50 text-[11px] border-black/1 border-0 border-solid px-3 py-0.5">
                      <Star className="size-3 fill-current mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                  <CardHeader className="p-0 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="size-9 rounded-lg bg-[#2b7fff]/10 flex justify-center items-center">
                        <Zap className="size-4 text-[#2b7fff]" />
                      </div>
                      <span className="font-medium text-[#2b7fff] text-sm leading-5">Pro</span>
                    </div>
                    <div className="items-baseline flex mt-2 gap-1">
                      <span className="font-semibold text-4xl leading-10 tracking-tight">$19</span>
                      <span className="text-[#71717b] text-sm leading-5">/month</span>
                    </div>
                    <p className="text-[#71717b] text-xs leading-4">Billed yearly at $182.40 · Save $45.60</p>
                  </CardHeader>
                  <Separator />
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Up to 500 GB storage</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Unlimited file uploads</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Up to 10 team members</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Advanced Search and OCR</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">API access (10K req/mo)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Priority email support</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Button className="bg-[#2b7fff] text-blue-50 w-full">
                      Upgrade to Pro
                      <ArrowRight className="size-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-zinc-200 border border-solid p-6 gap-4">
                  <CardHeader className="p-0 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="size-9 rounded-lg bg-zinc-100 flex justify-center items-center">
                        <Building2 className="size-4 text-zinc-950" />
                      </div>
                      <span className="font-medium text-sm leading-5">Enterprise</span>
                    </div>
                    <div className="items-baseline flex mt-2 gap-1">
                      <span className="font-semibold text-4xl leading-10 tracking-tight">$49</span>
                      <span className="text-[#71717b] text-sm leading-5">/month</span>
                    </div>
                    <p className="text-[#71717b] text-xs leading-4">For organizations with advanced needs</p>
                  </CardHeader>
                  <Separator />
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Unlimited storage</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Unlimited team members</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">{`SSO & SAML 2.0`}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Custom integrations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Unlimited API access</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-4 text-[#2b7fff] mt-0.5" />
                      <span className="text-sm leading-5">Dedicated account manager</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Button className="w-full" variant="outline">
                      Contact Sales
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <Card className="bg-white p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <h3 className="font-semibold text-base leading-6">Frequently asked</h3>
                  <p className="text-[#71717b] text-xs leading-4">Common questions about our plans and billing</p>
                </CardHeader>
                <CardContent className="grid grid-cols-2 p-0 gap-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="size-4 text-[#2b7fff]" />
                      <span className="font-medium text-sm leading-5">Can I change plans anytime?</span>
                    </div>
                    <p className="text-[#71717b] text-xs leading-4 pl-6">
                      Yes, upgrade or downgrade at any time. Changes prorate automatically.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="size-4 text-[#2b7fff]" />
                      <span className="font-medium text-sm leading-5">Do you offer refunds?</span>
                    </div>
                    <p className="text-[#71717b] text-xs leading-4 pl-6">
                      14-day money-back guarantee on all paid plans, no questions asked.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="size-4 text-[#2b7fff]" />
                      <span className="font-medium text-sm leading-5">What payment methods?</span>
                    </div>
                    <p className="text-[#71717b] text-xs leading-4 pl-6">
                      All major credit cards, ACH, wire transfer for Enterprise plans.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <HelpCircle className="size-4 text-[#2b7fff]" />
                      <span className="font-medium text-sm leading-5">Is there a free trial?</span>
                    </div>
                    <p className="text-[#71717b] text-xs leading-4 pl-6">
                      Pro includes a 14-day free trial. No credit card required to start.
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
