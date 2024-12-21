import React, { useState } from "react";
import { cva } from "class-variance-authority";

const buttonStyles = cva(
    "relative px-6 py-3 font-semibold transition-all duration-200 rounded-full",
    {
        variants: {
            color: {
                blue: "text-white bg-blue-500",
                red: "text-white bg-red-500",
                green: "text-white bg-green-500",
                yellow: "text-black bg-yellow-500",
            },
            pressed: {
                true: "translate-y-1",
                false: "translate-y-0",
            },
        },
        defaultVariants: {
            color: "blue",
        },
    }
);

const RaisedButton = ({
    children,
    color = "blue",
}: {
    children: React.ReactNode;
    color?: "blue" | "red" | "green" | "yellow";
}) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    return (
        <div className="relative inline-block">
            <div
                className={`absolute inset-0 rounded-full transition-transform duration-200 ${
                    color === "blue"
                        ? "bg-blue-700"
                        : color === "red"
                        ? "bg-red-700"
                        : color === "green"
                        ? "bg-green-700"
                        : "bg-yellow-700"
                } ${isPressed ? "translate-y-1" : "translate-y-2"}`}
                aria-hidden="true"
            ></div>
            <button
                className={buttonStyles({
                    color,

                })}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={() => setIsPressed(false)}
            >
                {children}
            </button>
        </div>
    );
};

export default RaisedButton;
