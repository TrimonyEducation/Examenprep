import { CourseCard } from "@/Components/course/CourseCard";
import { DisplayLG, TextLG } from "@/Components/typography/Typography";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { TrendingUp } from "lucide-react";
import { WeekCalendar } from "@/Components/dashboard/WeekCalendar";

const subjects = [
    "Wiskunde A",
    "Biologie",
    "Economie",
    "Geschiedenis",
    "Aardrijkskunde",
    "Wiskunde B",
    "Natuurkunde",
    "Scheikunde",
    "Engels",
    "Nederlands",
];

const subjectColors = [
    "#2563eb", // blue
    "#22c55e", // green
    "#f59e0b", // amber
    "#7c3aed", // purple
    "#84cc16", // lime
    "#3b82f6", // lighter blue
    "#ef4444", // red
    "#ec4899", // pink
    "#06b6d4", // cyan
    "#f97316", // orange
];

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="min-h-screen  ">
                <div className="container px-8 mt-8">
                    <DisplayLG weight="bold">Welkom terug!</DisplayLG>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Studie streak
                            </CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">7 dagen</div>
                            <p
                                className="text-xs text-muted-foreground truncate"
                                title="Alleen 80% van de studenten houden het zolang vol. Ga zo door!"
                            >
                                Alleen 80% van de studenten houden het zolang
                                vol. Ga zo door!
                            </p>
                            <WeekCalendar streak={7} />
                        </CardContent>
                    </Card>
                    <span className="mt-8">
                        <DisplayLG>Béta vakken</DisplayLG>
                        <DisplayLG>Taalvakken</DisplayLG>
                        <DisplayLG>Maatschappijvakken</DisplayLG>
                    </span>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
