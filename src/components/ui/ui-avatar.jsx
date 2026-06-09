const UIAvatar = ({ fullName, firstName, lastName, userId }) => {
    
    function getAvatarColors() {
        const seed = String(userId);

        let hash = 0;
        for (let i = 0; i < seed.length; i++) {
            hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        }

        const bgColor = (hash & 0x00ffffff)
            .toString(16)
            .toUpperCase()
            .padStart(6, "0");

        const r = parseInt(bgColor.substring(0, 2), 16);
        const g = parseInt(bgColor.substring(2, 4), 16);
        const b = parseInt(bgColor.substring(4, 6), 16);

        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

        const textColor = luminance > 186 ? "000000" : "FFFFFF";

        return { bgColor, textColor };
    }

    const { bgColor, textColor } = getAvatarColors();

    const name = fullName || `${firstName} ${lastName}`;
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <div className="size-8 rounded-full shrink-0 flex items-center justify-center text-sm"
            style={{ backgroundColor: `#${bgColor}`, color: `#${textColor}` }}
        >
            {initials}
        </div>
    );
};

export default UIAvatar;