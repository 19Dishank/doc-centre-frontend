import { Building2, Check, HelpCircle, Rocket, X, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BillingPage() {

  const [selectedBillingCycle, setSelectedBillingCycle] = useState("monthly");

  const handleBillingCycleChange = (cycle) => {
    setSelectedBillingCycle(cycle);
  };

  const plans = [
    {
      "id": "starter",
      "name": "Starter",
      "description": "For individuals and small teams getting started.",
      "badge": null,
      "pricing": {
        "monthly": {
          "amount": 0,
          "currency": "USD"
        },
        "yearly": {
          "amount": 0,
          "currency": "USD"
        }
      },
      "features": [
        "5 GB storage",
        "Up to 3 users",
        "File upload & organization",
        "Folder management",
        "Full-text document search",
        "File preview",
        "Activity tracking",
        "Mobile & web access",
        "Community support"
      ],
      "disabledFeatures": [
        "API Access",
        "OCR Processing",
        "Audit Logs"
      ],
      "buttonText": "Get Started"
    },
    {
      "id": "pro",
      "name": "Pro",
      "description": "For growing teams that need collaboration and automation.",
      "badge": "Most Popular",
      "pricing": {
        "monthly": {
          "amount": 9,
          "currency": "USD",
        },
        "yearly": {
          "amount": 86,
          "currency": "USD",
          "discount": "20%"
        }
      },
      "features": [
        "100 GB storage per user",
        "Unlimited users",
        "Role-based access control",
        "API Access",
        "OCR document processing",
        "Document version history",
        "Approval workflows",
        "Shared folders",
        "Advanced search & filters",
        "Email notifications",
        "Priority support"
      ],
      "buttonText": "Start Free Trial"
    },
    {
      "id": "elite",
      "name": "Elite",
      "description": "For organizations requiring security, compliance, and advanced controls.",
      "badge": "Best Value",
      "pricing": {
        "monthly": {
          "amount": 29,
          "currency": "USD",
        },
        "yearly": {
          "amount": 278,
          "currency": "USD",
          "discount": "20%"
        }
      },
      "features": [
        "Everything in Pro",
        "Unlimited storage",
        "Audit logs",
        "SSO Authentication",
        "Advanced permissions",
        "Custom retention policies",
        "Team analytics dashboard",
        "Dedicated account manager",
        "SLA-backed support",
        "White-label branding",
        "Custom integrations",
        "Multi-location backups"
      ],
      "buttonText": "Upgrade to Elite"
    }
  ]


  console.log(plans[0]?.pricing[selectedBillingCycle]?.amount)

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
    <div
      className="flex-1"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        <div className="text-center flex flex-col items-center gap-4">
          <Badge className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1 rounded-full shadow-sm">
            Pricing
          </Badge>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight leading-tight max-w-3xl text-zinc-900">
              Simple, transparent pricing
            </h1>

            <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
              Choose the plan that fits your team. Start free, upgrade as you grow, and<br />
              pay only for what you use. No hidden fees.
            </p>
          </div>

          {/* Toggle */}
          <div className="mt-4 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 p-1 shadow-sm">
            <button
              className={`cursor-pointer px-4 py-2 ${selectedBillingCycle === "monthly" ? "bg-blue-500 rounded-full text-white!" : "text-zinc-900"} text-sm font-semibold text-zinc-900`}
              onClick={() => handleBillingCycleChange("monthly")}
            >
              Monthly
            </button>

            <button
              className={`flex gap-1 cursor-pointer px-4 py-2 ${selectedBillingCycle === "yearly" ? "bg-blue-500 rounded-full text-white!" : "text-zinc-900"} text-sm font-semibold text-zinc-900`}
              onClick={() => handleBillingCycleChange("yearly")}
            >
              Yearly
              <Badge className="bg-blue-100 text-blue-600 border-none text-[10px] px-2 py-0.5 rounded-full font-semibold">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        <div className="w-full mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, idx) => {
              const isPro = plan.id === "pro";
              const currentPrice = plan.pricing[selectedBillingCycle];

              return (
                <div
                  key={idx}
                  className={`relative rounded-xl border transition-all duration-300 shadow-sm flex flex-col ${isPro
                      ? "border-blue-500 shadow-xl shadow-blue-100/60 lg:scale-[1.02] bg-gradient-to-b from-blue-50/30 to-white"
                      : "border-zinc-200 bg-white hover:shadow-lg"
                    }`}
                >
                  {/* Radial glow background for featured card */}
                  {isPro && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_60%)] pointer-events-none rounded-xl" />
                  )}

                  {/* Dynamic Top Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <Badge className="bg-blue-600 text-white border-none px-3.5 py-1 rounded-full text-[11px] font-semibold shadow-sm tracking-wide whitespace-nowrap normal-case">
                        ★ {plan.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Main Card Content Body */}
                  <div className="relative z-10 flex flex-col h-full p-6 pt-8">
                    {/* Header Section */}
                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 font-bold text-2xl text-zinc-900">
                          {plan.icon && (
                            <span className={isPro ? "text-blue-500" : "text-zinc-700"}>
                              {plan.icon}
                            </span>
                          )}
                          <h3>{plan.name}</h3>
                        </div>
                        <p className="text-sm text-zinc-500 min-h-10 leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      {/* Pricing Display */}
                      <div className="pt-2">
                        <div className="flex items-end gap-1">
                          <span className="text-4xl font-extrabold tracking-tight text-zinc-900">
                            ${currentPrice?.amount}
                          </span>

                          {/* Dynamic pricing interval / suffix details */}
                          <span className="text-zinc-400 font-medium mb-1 text-sm">
                            {currentPrice?.amount === 0 ? (
                              ""
                            ) : (
                              <>
                                {currentPrice?.per === "user" && " per user"}
                                {selectedBillingCycle === "monthly" ? " /month" : " /year"}
                              </>
                            )}
                          </span>
                        </div>

                        {/* Yearly Discount Tag Badge if applicable */}
                        {selectedBillingCycle === "yearly" && currentPrice?.discount && (
                          <span className="inline-block mt-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                            Save {currentPrice.discount}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features List Section */}
                    <div className="mt-6 flex-1">
                      <div className="space-y-3">
                        {/* Included Features */}
                        {plan.features?.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="size-4 mt-0.5 text-blue-500 shrink-0" />
                            <span className="text-sm text-zinc-600 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}

                        {/* Disabled / Unavailable Features */}
                        {plan.disabledFeatures?.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 opacity-40"
                          >
                            <X className="size-4 mt-0.5 text-zinc-400 shrink-0" />
                            <span className="text-sm line-through text-zinc-400">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button Section */}
                    <div className="mt-8">
                      <Button
                        variant={isPro ? "default" : "outline"}
                        className={`h-11 w-full rounded-lg text-sm cursor-pointer font-semibold transition-all duration-200 ${isPro
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/10"
                            : "border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300"
                          }`}
                      >
                        {plan.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

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
  );
}