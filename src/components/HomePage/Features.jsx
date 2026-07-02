import { FolderOpen, Share2, Lock } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { FileListPreview, SharePreview, SecurityPreview } from "./FeaturePreviews";

const Features = () => {
    return (
        <section id="features" className="flex flex-col gap-10 py-4">
            <div className="flex flex-col items-center gap-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b7fff]">
                    Platform features
                </p>
                <h2 className="font-bold text-3xl md:text-4xl tracking-tight max-w-2xl text-zinc-950">
                    Built for individuals and teams
                </h2>
                <p className="max-w-lg text-zinc-500 text-base md:text-lg">
                    Every feature below ships fully functional — not a UI that pretends.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <FeatureCard icon={FolderOpen} title="Access anywhere" desc="Sync files across every device. Nested folders, breadcrumb navigation, and 10+ instant file previews.">
                    <FileListPreview />
                </FeatureCard>
                <FeatureCard icon={Share2} title="Share with confidence" desc="Time-limited share links, email invites, and real-time notifications keep everyone in sync.">
                    <SharePreview />
                </FeatureCard>
                <FeatureCard icon={Lock} title="Secure by design" desc="Custom roles, granular permissions, and a recycle bin that keeps nothing truly gone.">
                    <SecurityPreview />
                </FeatureCard>
            </div>
        </section>
    );
};

export default Features;