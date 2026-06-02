import { ChevronRight } from 'lucide-react'; // Or your preferred icon library

export default function BreadcrumbNavigation({ navigationBar, handleNavigationClick }) {
    // Fallback safe check if navigationBar is not yet loaded
    if (!navigationBar || navigationBar.length === 0) return null;

    return (
        <div
            className="text-sm flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onWheel={(e) => {
                // If the user is scrolling vertically (deltaY), redirect it horizontally
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    e.currentTarget.scrollLeft += e.deltaY;
                }
            }}
        >
            {navigationBar.map((item, index) => (
                <span
                    key={item.parentId}
                    className="flex items-center gap-2 cursor-pointer shrink-0"
                    onClick={() => handleNavigationClick(item.parentId, index)}
                >
                    <span
                        className={`font-medium transition-colors ${index === navigationBar.length - 1
                                ? 'text-zinc-900 font-semibold cursor-default'
                                : 'text-blue-600 hover:text-blue-800 hover:underline'
                            }`}
                    >
                        {item.name}
                    </span>

                    {index < navigationBar.length - 1 && (
                        <ChevronRight className="size-4 text-zinc-400 shrink-0" />
                    )}
                </span>
            ))}
        </div>
    );
}