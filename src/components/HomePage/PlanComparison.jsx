import { Check, Minus, Zap } from "lucide-react";
import { Badge } from "../ui/badge";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "For individuals and small teams getting started.",
    badge: null,
    price: { monthly: "Free", yearly: "Free" },
    highlight: false,
    buttonText: "Get started free",
    buttonTo: "/onboarding",
    features: [
      "5 GB storage",
      "Up to 3 users",
      "File upload & folder management",
      "10+ file type previews",
      "Document sharing (60 min links)",
      "Recycle bin & restore",
      "Real-time notifications",
      "Community support",
    ],
    disabled: ["API Access & SSO", "Custom roles & permissions", "Usage analytics dashboard"],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams that need roles, API access and analytics.",
    badge: "Most Popular",
    price: { monthly: "$9", yearly: "$86" },
    highlight: true,
    buttonText: "Start 14-day trial",
    buttonTo: "/onboarding",
    features: [
      "100 GB storage per user",
      "Unlimited users",
      "Everything in Starter",
      "Custom roles & granular permissions",
      "User invite & management",
      "API keys + SSO integration",
      "Usage analytics dashboard",
      "Priority support",
    ],
    disabled: ["Dedicated account manager", "White-label branding"],
  },
  {
    id: "elite",
    name: "Elite",
    description: "For organizations needing security, compliance and scale.",
    badge: "Best Value",
    price: { monthly: "$29", yearly: "$278" },
    highlight: false,
    buttonText: "Upgrade to Elite",
    buttonTo: "/onboarding",
    features: [
      "Unlimited storage",
      "Everything in Pro",
      "Audit logs",
      "White-label branding",
      "Custom data retention policies",
      "Multi-region backups",
      "Dedicated account manager",
      "SLA-backed support",
    ],
    disabled: [],
  },
];

const comparisonRows = [
  { label: "Storage", starter: "5 GB", pro: "100 GB / user", elite: "Unlimited" },
  { label: "Users", starter: "Up to 3", pro: "Unlimited", elite: "Unlimited" },
  { label: "File type previews", starter: "10+ types", pro: "10+ types", elite: "10+ types" },
  { label: "Share links", starter: "60 min max", pro: "60 min max", elite: "60 min max" },
  { label: "Recycle bin", starter: true, pro: true, elite: true },
  { label: "Real-time notifs", starter: true, pro: true, elite: true },
  { label: "Custom roles", starter: false, pro: true, elite: true },
  { label: "User management", starter: false, pro: true, elite: true },
  { label: "API Access & SSO", starter: false, pro: true, elite: true },
  { label: "Usage dashboard", starter: false, pro: true, elite: true },
  { label: "Audit logs", starter: false, pro: false, elite: true },
  { label: "White-label branding", starter: false, pro: false, elite: true },
  { label: "Support", starter: "Community", pro: "Priority", elite: "Dedicated + SLA" },
];

export default function PlanComparison() {
  return (
    <section id="pricing" className="flex flex-col gap-12 py-4">
      {/* heading */}
      <div className="text-center flex flex-col items-center gap-4">
        <Badge className="w-fit px-4 py-1 bg-blue-50 text-[#2b7fff] border border-blue-100 rounded-full" variant="outline">
          <Zap className="size-3" />
          Pricing
        </Badge>
        <h2 className="font-bold text-3xl md:text-4xl tracking-tight text-zinc-950">
          Simple, transparent pricing
        </h2>
        <p className="max-w-xl text-zinc-500 text-base md:text-lg">
          Start free, upgrade when you need it. No hidden fees, cancel anytime.
        </p>
      </div>

      {/* plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col rounded-2xl border p-6 gap-6 ${plan.highlight
              ? "border-[#2b7fff]/40 shadow-lg shadow-blue-500/10 bg-white ring-1 ring-[#2b7fff]/20"
              : "border-zinc-200 bg-white shadow-sm"
              }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-[#2b7fff] px-3 py-1 text-xs font-semibold text-white shadow">
                {plan.badge}
              </span>
            )}

            <div className="flex flex-col gap-1">
              <h3 className={`text-lg font-bold ${plan.highlight ? "text-[#2b7fff]" : "text-zinc-900"}`}>
                {plan.name}
              </h3>
              <p className="text-xs text-zinc-400">{plan.description}</p>
            </div>

            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold text-zinc-950 tracking-tight">
                {plan.price.monthly}
              </span>
              {plan.price.monthly !== "Free" && (
                <span className="text-zinc-400 text-sm mb-1.5">/user/mo</span>
              )}
            </div>

            <NavLink to={plan.buttonTo}>
              <Button
                className={`w-full h-10 cursor-pointer text-sm font-semibold ${plan.highlight
                  ? "bg-[#2b7fff] hover:bg-[#2b7fff]/90 text-white shadow shadow-blue-500/20"
                  : ""
                  }`}
                variant={plan.highlight ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </NavLink>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-zinc-100">
              {plan.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-700">
                  <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  {f}
                </div>
              ))}
              {plan.disabled.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <Minus className="size-4 shrink-0 mt-0.5" strokeWidth={2} />
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* comparison table — desktop */}
      <div className="hidden md:block overflow-hidden border border-zinc-200 bg-white shadow-sm rounded-2xl">
        <table className="w-full border-collapse text-left table-fixed">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="p-5 text-sm font-semibold text-zinc-500 w-1/4">Feature</th>
              {plans.map((plan) => (
                <th key={plan.id} className="p-5 w-1/4">
                  <span className={`text-base font-bold ${plan.highlight ? "text-[#2b7fff]" : "text-zinc-900"}`}>
                    {plan.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {comparisonRows.map((row, i) => (
              <tr key={i} className="hover:bg-zinc-50/60 transition-colors">
                <td className="p-4 text-sm font-medium text-zinc-600">{row.label}</td>
                {plans.map((plan) => {
                  const val = row[plan.id];
                  return (
                    <td key={plan.id} className="p-4 text-sm text-zinc-700">
                      {typeof val === "boolean" ? (
                        val
                          ? <Check className="size-5 text-emerald-500" strokeWidth={2.5} />
                          : <Minus className="size-5 text-zinc-300" strokeWidth={1.5} />
                      ) : (
                        <span>{val}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}