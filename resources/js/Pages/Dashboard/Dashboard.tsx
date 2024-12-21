import { DisplayLG, TextMD } from "@/Components/typography/Typography";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { ArrowRight, BookOpen, Clock, Flame, TrendingUp } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Progress } from "@/Components/ui/progress";
import StreakCard from "./components/StreakCard";

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
            
            <div className="min-h-screen">
                <div className="container px-8 mt-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Welkom terug, Student!
                        </h2>

                        <div className="grid gap-6 w-full md:grid-cols-2 lg:grid-cols-3">
                            <StreakCard />
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Totale studietijd
                                    </CardTitle>
                                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        32,5 uur
                                    </div>
                                    <p className="text-xs text-muted-foreground truncate">
                                        Deze maand
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Algehele voortgang
                                    </CardTitle>
                                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        68%
                                    </div>
                                    <Progress value={68} className="mt-2" />
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Te herhalen kaarten
                                    </CardTitle>
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold mb-2">
                                        24
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-4 truncate">
                                        Vandaag te doen
                                    </p>
                                    <ul className="space-y-2">
                                        {[
                                            "Nederlandse grammatica",
                                            "Woordenschat",
                                            "Leesvaardigheid",
                                            "Luistervaardigheid",
                                        ].map((subject) => (
                                            <li
                                                key={subject}
                                                className="flex items-center justify-between"
                                            >
                                                <span
                                                    className="truncate mr-2"
                                                    title={subject}
                                                >
                                                    {subject}
                                                </span>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="shrink-0"
                                                >
                                                    <span className="sr-only">
                                                        Herhaal {subject}
                                                    </span>
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recente activiteit</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {[
                                            "Grammatica quiz voltooid",
                                            "Woordenschat set herhaald",
                                            "Luisteroefening gedaan",
                                            "Nederlands nieuwsartikel gelezen",
                                        ].map((activity, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center space-x-2"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                                <span
                                                    className="truncate"
                                                    title={activity}
                                                >
                                                    {activity}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
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
