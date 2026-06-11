import { Card, CardContent, CardHeader } from "../ui/card";
import { UserCheck, UserPlus, AlertCircle } from "lucide-react";

const AccountConflictModal = ({
    currentEmail = "alex.jones@company.com",
    enteredEmail = "alex.work@docucentral.com",
    onUseCurrent,
    onUseEntered,
}) => {

    return (
        <div className="bg-zinc-950/50 flex fixed inset-0 justify-center items-center z-100 backdrop-blur-sm p-4">
            <Card className="w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150 border border-zinc-200 bg-white shadow-xl shadow-zinc-900/10 rounded-2xl p-0 gap-0">

                <div className="h-1 w-full bg-linear-to-r from-blue-500 via-blue-600 to-blue-500" />

                <div className="p-6 flex flex-col gap-5">

                    <CardHeader className="p-0 flex flex-col gap-2 pb-4 border-b border-zinc-100">
                        <div className="flex items-center gap-2.5">
                            <div className="p-1.5 bg-blue-50 rounded-lg">
                                <AlertCircle className="w-4 h-4 text-blue-500 shrink-0" />
                            </div>
                            <h3 className="font-semibold text-zinc-900 text-base tracking-tight">
                                Account Conflict
                            </h3>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed pl-0.5">
                            You're signed in, but entered a different email address. How would you like to proceed?
                        </p>
                    </CardHeader>

                    <CardContent className="flex p-0 flex-col gap-2.5">
                        <button
                            onClick={onUseCurrent}
                            className="cursor-pointer group flex items-center gap-3.5 p-3.5 rounded-xl border border-blue-100 bg-blue-50/60 hover:bg-blue-50 hover:border-blue-200 text-left transition-all duration-150 focus:outline-none"
                        >
                            <div className="p-2 bg-blue-500 rounded-lg text-white shadow-sm shadow-blue-200 group-hover:shadow-blue-300 group-hover:scale-[1.04] transition-all duration-150 shrink-0">
                                <UserCheck className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-0.5">
                                    Keep Active Session
                                </p>
                                <p className="text-sm font-medium text-zinc-800 truncate">
                                    {currentEmail}
                                </p>
                            </div>
                            <svg className="w-4 h-4 text-blue-300 group-hover:text-blue-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            onClick={onUseEntered}
                            className="cursor-pointer group flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-200 bg-zinc-50/60 hover:bg-zinc-50 hover:border-zinc-300 text-left transition-all duration-150 focus:outline-none"
                        >
                            <div className="p-2 bg-zinc-800 rounded-lg text-white shadow-sm shadow-zinc-200 group-hover:shadow-zinc-300 group-hover:scale-[1.04] transition-all duration-150 shrink-0">
                                <UserPlus className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-0.5">
                                    Switch to Entered Email
                                </p>
                                <p className="text-sm font-medium text-zinc-800 truncate">
                                    {enteredEmail}
                                </p>
                            </div>
                            <svg className="w-4 h-4 text-zinc-300 group-hover:text-zinc-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </CardContent>
                </div>

            </Card>
        </div>
    );
};

export default AccountConflictModal;