import { Check, HelpCircle, ShieldCheck, Sparkles, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function BillingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for individuals getting started",
      features: [
        "Up to 2 GB storage",
        "100 file uploads / month",
        "1 team member",
        "Basic Search and Tags",
      ],
      unavailableFeatures: ["API access", "Priority support"],
    },
    {
      name: "Pro",
      price: "$19",
      description: "Best for growing teams and power users",
      isPopular: true,
      features: [
        "Up to 500 GB storage",
        "Unlimited file uploads",
        "Up to 10 team members",
        "Advanced Search and OCR",
        "API access (10K req/mo)",
        "Priority email support",
      ],
      unavailableFeatures: [],
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "Advanced security and unlimited scalability",
      features: [
        "Unlimited storage",
        "Unlimited team members",
        "SSO & SAML 2.0",
        "Custom integrations",
        "Unlimited API access",
        "Dedicated account manager",
      ],
      unavailableFeatures: [],
    },
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan anytime. Changes are applied automatically.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 14-day money-back guarantee on all paid plans.",
    },
  ];

  return (
    <div className="bg-white text-zinc-950 min-h-screen">
      <main className="flex flex-col flex-1">
        <div
          className="flex-1 overflow-auto bg-linear-to-b from-zinc-50 via-white to-zinc-100/40 p-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-12">
            {/* Header */}
            <div className="text-center flex flex-col items-center gap-4">
              <Badge className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1 rounded-full shadow-sm">
                Pricing Plans
              </Badge>

              <div className="space-y-3">
                <h1 className="text-2xl font-bold tracking-tight leading-tight max-w-3xl">
                  Choose the perfect plan for your workspace
                </h1>

                <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
                  Flexible pricing for individuals, teams, and enterprises.
                  Upgrade anytime as your business grows.
                </p>
              </div>

              {/* Toggle */}
              <div className="mt-4 inline-flex items-center rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
                <button className="rounded-full px-6 py-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900">
                  Monthly
                </button>

                <button className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-md">
                  Yearly
                  <Badge className="bg-white/20 text-white border-none text-[10px] px-2 py-0">
                    Save 20%
                  </Badge>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {plans.map((plan, idx) => (
                <Card
                  key={idx}
                  className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                    plan.isPopular
                      ? "border-blue-500 shadow-2xl shadow-blue-100 scale-[1.03] bg-linear-to-b from-blue-50/70 to-white"
                      : "border-zinc-200 bg-white hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />
                  )}

                  {plan.isPopular && (
                    <div className="absolute top-5 right-5">
                      <Badge className="bg-blue-600 text-white border-none px-3 py-1 rounded-full shadow">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col h-full p-5">
                    <CardHeader className="p-0 space-y-5">
                      <div className="flex items-center gap-4">
                        <div
                          className={`size-12 rounded-sm flex items-center justify-center shadow-sm ${
                            plan.isPopular
                              ? "bg-blue-600 text-white"
                              : "bg-zinc-100 text-zinc-600"
                          }`}
                        >
                          {plan.name === "Enterprise" ? (
                            <ShieldCheck className="size-5" />
                          ) : (
                            <Sparkles className="size-5" />
                          )}
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold">
                            {plan.name}
                          </h3>
                          <p className="text-sm text-zinc-500 mt-1">
                            {plan.description}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="pt-2">
                        <div className="flex items-end gap-1">
                          <span className="text-5xl font-bold tracking-tight">
                            {plan.price}
                          </span>
                          <span className="text-zinc-500 font-medium mb-2">
                            /month
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Features */}
                    <CardContent className="mt-5 p-0 flex-1">
                      <div className="space-y-4">
                        {plan.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3"
                          >
                            <div
                              className={`mt-0.5 flex size-5 items-center justify-center rounded-full ${
                                plan.isPopular
                                  ? "bg-blue-100"
                                  : "bg-emerald-100"
                              }`}
                            >
                              <Check
                                className={`size-3.5 ${
                                  plan.isPopular
                                    ? "text-blue-600"
                                    : "text-emerald-600"
                                }`}
                              />
                            </div>

                            <span className="text-sm text-zinc-700 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}

                        {plan.unavailableFeatures.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 opacity-45"
                          >
                            <div className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-zinc-100">
                              <X className="size-3.5 text-zinc-400" />
                            </div>

                            <span className="text-sm line-through text-zinc-500">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="border-0 bg-white px-0">
                      <Button
                        variant={plan.isPopular ? "default" : "outline"}
                        className={`h-12 w-full rounded-xl text-base font-medium transition-all ${
                          plan.isPopular
                            ? "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200"
                            : "border-zinc-200 hover:bg-zinc-50"
                        }`}
                      >
                        {plan.name === "Free"
                          ? "Get Started"
                          : plan.name === "Pro"
                          ? "Upgrade to Pro"
                          : "Contact Sales"}
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>

            {/* FAQ */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">
                  Frequently asked questions
                </h2>
                <p className="text-zinc-500 mt-2">
                  Everything you need to know about billing and plans.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <div className="flex size-8 items-center justify-center rounded-full bg-blue-50">
                        <HelpCircle className="size-4 text-blue-600" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-base">
                        {faq.question}
                      </h3>

                      <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}