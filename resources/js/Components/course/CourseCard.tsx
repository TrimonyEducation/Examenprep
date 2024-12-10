import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/Components/ui/card";

import { Button } from "@/Components/ui/button";
import { Progress } from "@/Components/ui/progress";

interface CourseCardProps {
    title: string;
    color: string;

    progress: number;
    lastStudied: string;
    duration: string;
    modules: number;

    rating: number;

    isEnrolled: boolean;
}

export function CourseCard({
    title,
    color,

    progress,
    lastStudied,
    duration,
    modules,

    rating,

    isEnrolled,
}: CourseCardProps) {
    return (
        <Card className="w-full text-white" style={{ backgroundColor: color }}>
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
            </CardHeader>
            <CardContent className="grid gap-4">
                {isEnrolled && (
                    <div className="space-y-2">
                        <Progress
                            value={progress}
                            className="w-full"
                            style={
                                {
                                    "--progress-background":
                                        "rgba(255,255,255,0.3)",
                                    "--progress-foreground":
                                        "rgba(255,255,255,0.9)",
                                } as React.CSSProperties
                            }
                        />
                        <p className="text-xs opacity-90">
                            {progress}% afgerond • Laatst geoefend:{" "}
                            {lastStudied}
                        </p>
                    </div>
                )}
                <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Totale tijd: {duration}</div>
                    <div>Domeinen: {modules}</div>

                    <div>Rating: ★ {rating.toFixed(1)}</div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full mt-auto bg-white hover:bg-gray-100 text-black">
                    {isEnrolled ? "Doorgaan" : "Beginnen met leren"}
                </Button>
            </CardFooter>
        </Card>
    );
}
