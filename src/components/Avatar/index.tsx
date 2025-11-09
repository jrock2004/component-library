import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    { className = "", src, alt = "", fallback = "?", size = "md", ...props },
    ref,
  ) => {
    const [imgError, setImgError] = React.useState(false);

    const sizes = {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-12 h-12 text-base",
      xl: "w-16 h-16 text-lg",
    };

    return (
      <div
        ref={ref}
        className={`${sizes[size]} rounded-full overflow-hidden bg-muted flex items-center justify-center ${className}`}
        {...props}
      >
        {src && !imgError ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-muted-foreground select-none">{fallback}</span>
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";
