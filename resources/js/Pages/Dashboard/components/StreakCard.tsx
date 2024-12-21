import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { DisplayLG, TextMD } from "@/Components/typography/Typography";
import { Flame } from "lucide-react";
import { WeekCalendar } from "@/Components/dashboard/WeekCalendar";

export default function StreakCard() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm text-muted-foreground font-medium">
                    Studie streak
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center space-x-1">
                    <DisplayLG weight="bold">0</DisplayLG>
                    <Flame className="h-8 w-8 text-input" />
                </div>
                <TextMD weight="medium">
                    Oefen of kijk een video om je streak te beginnen{" "}
                </TextMD>
                {/* <p
                                        className="text-xs text-muted-foreground truncate"
                                        title="Alleen 80% van de studenten houden het zolang vol. Ga zo door!"
                                    >
                                        Alleen 80% van de studenten houden het
                                        zolang vol. Ga zo door!
                                    </p> */}
                <WeekCalendar streak={7} />
            </CardContent>
        </Card>
    );
}
