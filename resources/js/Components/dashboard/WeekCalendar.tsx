import { cn } from "@/lib/utils";

interface WeekCalendarProps {
    streak: number;
}

const DAYS_OF_WEEK = ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"];

export function WeekCalendar({ streak }: WeekCalendarProps) {
    const today = new Date().getDay();
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - today + (today === 0 ? -6 : 1));

    return (
        <div className="flex justify-between mt-2">
            {DAYS_OF_WEEK.map((day, index) => {
                const date = new Date(startOfWeek);
                date.setDate(startOfWeek.getDate() + index);
                const isToday =
                    date.toDateString() === new Date().toDateString();
                const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
                const isStreak = isPast || isToday;

                return (
                    <div key={day} className="flex flex-col items-center">
                        <span className="text-xs text-muted-foreground">
                            {day}
                        </span>
                        <div
                            className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center mt-1",
                                isStreak
                                    ? "bg-green-500 text-white"
                                    : "bg-muted text-muted-foreground",
                                isToday && "ring-2 ring-green-500 ring-offset-2"
                            )}
                        >
                            <span className="text-xs font-medium">
                                {date.getDate()}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
