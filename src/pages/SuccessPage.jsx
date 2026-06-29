import { useEffect, useState } from 'react';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SuccessPage = () => {
    const [countdown, setCountdown] = useState(5);
    const navigate = useNavigate();

    const location = useLocation();
    const { heading, subheading, fallbackLink } = location.state || {};


    useEffect(() => {
        if (countdown === 0) {
            navigate('/login');
            return;
        }

        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown, navigate]);

    if (!heading) return <Navigate to="/login" replace />;

    return (
        <div className="w-full max-w-md transform rounded-2xl bg-white dark:bg-zinc-900 border border-transparent dark:border-zinc-800 p-8 transition-all duration-300">

            <div className="flex flex-col items-center text-center mb-8">
                <div className="mb-4 rounded-full bg-emerald-50 dark:bg-emerald-950/20 p-3 text-emerald-500 animate-in fade-in zoom-in duration-500">
                    <CheckCircle2 className="size-8" />
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {heading}
                </h1>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-[320px]">
                    {subheading}
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 py-2.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 rounded-lg">
                    <Loader2 className="size-3.5 animate-spin text-blue-500" />
                    <span>
                        Redirecting in <span className="font-bold text-zinc-800 dark:text-zinc-200 tabular-nums">{countdown}s</span>
                    </span>
                </div>

                <Link to={fallbackLink} className="block w-full">
                    <Button className="group mt-2 cursor-pointer h-11 font-semibold rounded-lg bg-[#2b7fff] hover:bg-[#236edd] text-white w-full disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        <span>Back to login</span>
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default SuccessPage;