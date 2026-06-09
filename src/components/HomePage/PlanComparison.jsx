import { Check, Minus } from 'lucide-react';

const plans = [
  {
    "id": "starter",
    "name": "Starter",
    "description": "For individuals and small teams getting started.",
    "badge": null,
    "pricing": {
      "monthly": { "amount": 0, "currency": "USD" },
      "yearly": { "amount": 0, "currency": "USD" }
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
      "monthly": { "amount": 9, "currency": "USD" },
      "yearly": { "amount": 86, "currency": "USD", "discount": "20%" }
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
      "monthly": { "amount": 29, "currency": "USD" },
      "yearly": { "amount": 278, "currency": "USD", "discount": "20%" }
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
];

const comparisonRows = [
  { label: "Storage", starter: "5 GB", pro: "100 GB / user", elite: "Unlimited" },
  { label: "Users / Collaborators", starter: "Up to 3", pro: "Unlimited", elite: "Unlimited" },
  { label: "Document Search", starter: "Full-text", pro: "Advanced & filters", elite: "Advanced & filters" },
  { label: "API Access", starter: false, pro: "Full Access", elite: "Full + Custom" },
  { label: "OCR Processing", starter: false, pro: true, elite: true },
  { label: "Version History", starter: false, pro: true, elite: true },
  { label: "Audit Logs", starter: false, pro: false, elite: true },
  { label: "SSO Authentication", starter: false, pro: false, elite: true },
  { label: "Support", starter: "Community", pro: "Priority support", elite: "Dedicated CSM & SLA" }
];

export default function PlanComparison() {
  return (
    <div className="w-full max-w-7xl mx-auto selection:bg-indigo-50">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Compare plans
        </h2>
        <p className="mt-2 md:mt-3 text-sm md:text-lg text-slate-500 mx-auto">
          A detailed look at what each plan includes so you can pick the right fit.
        </p>
      </div>

      <div className="space-y-6 md:hidden">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`rounded-xl border bg-white p-5 shadow-sm transition-all ${
              plan.id === 'pro' ? 'border-indigo-500/40 ring-1 ring-indigo-500/10' : 'border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <h3 className={`text-lg font-bold ${plan.id === 'pro' ? 'text-indigo-600' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">{plan.description}</p>
              </div>
              {plan.badge && (
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                  {plan.badge}
                </span>
              )}
            </div>

            <dl className="space-y-3">
              {comparisonRows.map((row, idx) => {
                const value = row[plan.id];
                return (
                  <div key={idx} className="flex items-center justify-between text-xs py-1">
                    <dt className="text-slate-500 font-medium">{row.label}</dt>
                    <dd className="text-slate-800 font-normal">
                      {typeof value === 'boolean' ? (
                        value ? (
                          <Check className="h-4 w-4 text-indigo-500" strokeWidth={3} />
                        ) : (
                          <Minus className="h-4 w-4 text-slate-300" strokeWidth={2} />
                        )
                      ) : (
                        <span>{value}</span>
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-hidden border border-slate-200/80 bg-white shadow-sm rounded-2xl">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left table-fixed">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70">
                <th className="p-5 text-sm font-semibold text-slate-600 w-1/4">Features</th>
                {plans.map((plan) => (
                  <th key={plan.id} className="p-5 w-1/4 relative">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between min-h-6">
                        <span className={`text-base font-bold ${plan.id === 'pro' ? 'text-indigo-600' : 'text-slate-900'}`}>
                          {plan.name}
                        </span>
                        {plan.badge && (
                          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-normal text-slate-400 line-clamp-1">
                        {plan.description}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonRows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50/40 transition-colors">
                  <td className="p-4 text-sm font-medium text-slate-600 truncate">
                    {row.label}
                  </td>
                  {plans.map((plan) => {
                    const value = row[plan.id];
                    return (
                      <td key={plan.id} className="p-4 text-sm text-slate-700 break-words">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check className="h-5 w-5 text-indigo-500" strokeWidth={2.5} />
                          ) : (
                            <Minus className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
                          )
                        ) : (
                          <span className="font-normal text-slate-700">{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}