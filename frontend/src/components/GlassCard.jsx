import React from "react";

export const GlassCard = ({
    children,
    variant = "light",
    className = "",
    hover = true,
    ...props
}) => {
    const base = variant === "dark" ? "glass-dark" : "glass-light";
    const hoverCls = hover ? "glass-card-hover" : "";
    return (
        <div
            className={`relative rounded-2xl ${base} ${hoverCls} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default GlassCard;
