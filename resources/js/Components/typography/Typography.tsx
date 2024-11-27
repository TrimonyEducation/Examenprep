import { FC } from "react";

interface DisplayProps extends React.HTMLAttributes<HTMLHeadingElement> {
    weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
}

export const Display2XL: FC<DisplayProps> = ({
    children,
    weight,
    ...props
}) => {
    return (
        <h1
            className={`text-7xl ${
                space_grotesk.className
            } leading-[5.625rem] tracking-[-2%] ${
                weight ? `font-${weight}` : ""
            }`}
            {...props}
        >
            {children}
        </h1>
    );
};

export const DisplayXL: FC<DisplayProps> = ({ children, weight, ...props }) => {
    return (
        <h2
            className={`text-6xl ${
                space_grotesk.className
            } leading-[4.5rem] tracking-[-2%] ${
                weight ? `font-${weight}` : ""
            }`}
            {...props}
        >
            {children}
        </h2>
    );
};

export const DisplayLG: FC<DisplayProps> = ({ children, weight, ...props }) => {
    return (
        <h3
            className={`text-5xl ${
                space_grotesk.className
            } leading-[3.75rem] tracking-[-2%] ${
                weight ? `font-${weight}` : ""
            }`}
            {...props}
        >
            {children}
        </h3>
    );
};

interface DisplayParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    weight?: "light" | "normal" | "medium" | "bold" | "extrabold";
    muted?: boolean;
}

export const DisplayMD: FC<DisplayParagraphProps> = ({
    children,
    weight,
    muted,
    ...props
}) => {
    return (
        <p
            className={`text-4xl leading-[2.75rem] tracking-[-2%] ${
                weight ? `font-${weight}` : ""
            } ${muted ? "text-muted-foreground" : ""}`}
            {...props}
        >
            {children}
        </p>
    );
};

export const DisplaySM: FC<DisplayParagraphProps> = ({
    children,
    weight,
    muted,
    ...props
}) => {
    return (
        <p
            className={`text-3xl leading-[2.375rem] ${
                weight ? `font-${weight}` : ""
            } ${muted ? "text-muted-foreground" : ""}`}
            {...props}
        >
            {children}
        </p>
    );
};

export const DisplayXS: FC<DisplayParagraphProps> = ({
    children,
    weight,
    muted,
    ...props
}) => {
    return (
        <p
            className={`text-2xl leading-[2rem] ${
                weight ? `font-${weight}` : ""
            } ${muted ? "text-muted-foreground" : ""}`}
            {...props}
        >
            {children}
        </p>
    );
};

export const TextXL: FC<DisplayParagraphProps> = ({
    children,
    weight,
    muted,
    ...props
}) => {
    return (
        <p
            className={`text-xl leading-[1.875rem] ${
                weight ? `font-${weight}` : ""
            } ${muted ? "text-muted-foreground" : ""}`}
            {...props}
        >
            {children}
        </p>
    );
};

export const TextLG: FC<DisplayParagraphProps> = ({
    children,
    weight,
    muted,
    ...props
}) => {
    return (
        <p
            className={`text-lg leading-[1.75rem] ${
                weight ? `font-${weight}` : ""
            } ${muted ? "text-muted-foreground" : ""}`}
            {...props}
        >
            {children}
        </p>
    );
};

export const TextMD: FC<DisplayParagraphProps> = ({
    children,
    weight,
    muted,
    ...props
}) => {
    return (
        <p
            className={`text-base leading-[1.5rem] ${
                weight ? `font-${weight}` : ""
            } ${muted ? "text-muted-foreground" : ""}`}
            {...props}
        >
            {children}
        </p>
    );
};

export const TextSM: FC<DisplayParagraphProps> = ({
    children,
    weight,
    muted,
    ...props
}) => {
    return (
        <p
            className={`text-sm leading-[1.25rem] ${
                weight ? `font-${weight}` : ""
            } ${muted ? "text-muted-foreground" : ""}`}
            {...props}
        >
            {children}
        </p>
    );
};

export const TextXS: FC<DisplayParagraphProps> = ({
    children,
    weight,
    muted,
    ...props
}) => {
    return (
        <p
            className={`text-xs leading-[1.125rem] ${
                weight ? `font-${weight}` : ""
            } ${muted ? "text-muted-foreground" : ""}`}
            {...props}
        >
            {children}
        </p>
    );
};


