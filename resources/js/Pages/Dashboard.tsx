import { CourseCard } from "@/Components/course/CourseCard";
import { DisplayLG, TextLG } from "@/Components/typography/Typography";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

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
                    <span className="mt-8">
                        <DisplayLG>Béta vakken</DisplayLG>
                    </span>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
