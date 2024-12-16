import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";

import { Check } from "lucide-react";
import GuestLayout from "@/Layouts/GuestLayout";
import { PageProps } from "@/types";
import { DisplayLG } from "@/Components/typography/Typography";
import { useToast } from "@/hooks/use-toast";

type modeType =  'recurring' | 'one_time';



export default function PricingPage({ auth }: PageProps) {
    const isAuthenticated = auth.user;
    let currentDay = "";
    let currentDayOneYearAhead = "";

    const { toast } = useToast();

    const getCurrentDate = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        return `${day < 10 ? `0${day}` : day}/${
            month < 10 ? `0${month}` : month
        }/${year}`;
    };

    const getCurrentDatePlusOneYear = () => {
        const today = new Date();
        today.setFullYear(today.getFullYear() + 1);
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        return `${day < 10 ? `0${day}` : day}/${
            month < 10 ? `0${month}` : month
        }/${year}`;
    };

    const handleCheckout = async ( priceId:string , mode: modeType ) => {
        if (!isAuthenticated) {
            router.visit("/register");
            return;
        }

        console.log(mode)
        try {
            router.post(
                route("subscription.create-checkout"),
                { priceId, mode },
                {
                    preserveState: true,
                    onSuccess: (response) => {
                        if (response.url) {
                            window.location.href = response.url;
                        }
                    },
                    onError: () => {
                        toast({
                            title: "Oeps!",
                            description: "Er is iets misgegaan",
                            variant: "destructive",
                        });
                    },
                }
            );
        } catch (error) {
            console.error(error);
            toast({
                title: "Oeps!",
                description: "Er is iets misgegaan",
                variant: "destructive",
            });
        }
    };

    currentDay = getCurrentDate();
    currentDayOneYearAhead = getCurrentDatePlusOneYear();

    return (
        <GuestLayout>
            <span className="mb-9">
                <DisplayLG weight="bold">Kies je abonnement</DisplayLG>
            </span>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <Card className="flex flex-col bg-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:bg-card">
                    <CardHeader>
                        <CardTitle className="text-gray-900 dark:text-white">
                            1 Maand
                        </CardTitle>
                        <CardDescription className="dark:text-gray-300">
                            Flexibel maandelijks abonnement
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-4xl font-bold text-gray-900 dark:text-white">
                            €9,99
                            <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                                {" "}
                                /maand{" "}
                            </span>
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center">
                                <Check className="mr-2 h-5 w-5 text-green-500" />{" "}
                                Volledige toegang tot alle functies
                            </li>
                            <li className="flex items-center">
                                <Check className="mr-2 h-5 w-5 text-green-500" />{" "}
                                Maandelijks opzegbaar
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full transition-colors duration-300 ease-in-out hover:bg-primary/90"
                            onClick={() =>
                                handleCheckout("price_1Q7fbXAiKenohXkKf9mqC430", 'recurring')
                            }
                        >
                            {isAuthenticated ? "Kiezen" : "Registreren"}
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="flex flex-col bg-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:bg-card">
                    <CardHeader>
                        <CardTitle className="text-gray-900 dark:text-white">
                            Tot examen
                        </CardTitle>
                        <CardDescription className="dark:text-gray-300">
                            Voordelig tot aan je examen
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-4xl font-bold text-gray-900 dark:text-white">
                            €6,99
                            <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
                                {" "}
                                /maand{" "}
                            </span>
                        </p>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                            <li className="flex items-center">
                                <Check className="mr-2 h-5 w-5 text-green-500" />{" "}
                                Volledige toegang tot alle functies
                            </li>
                            <li className="flex items-center">
                                <Check className="mr-2 h-5 w-5 text-green-500" />{" "}
                                Loopt tot aan je examen
                            </li>
                            <li className="flex items-center">
                                <Check className="mr-2 h-5 w-5 text-green-500" />{" "}
                                Bespaar €3 per maand
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full transition-colors duration-300 ease-in-out hover:bg-primary/90"
                            onClick={() =>
                                handleCheckout("price_1Q7f6eAiKenohXkK22tKiClk", 'recurring')
                            }
                        >
                            {isAuthenticated ? "Kiezen" : "Registreren"}
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="relative z-10 flex transform flex-col border-4 border-primary bg-primary text-primary-foreground shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl dark:bg-primary dark:text-primary-foreground">
                    <div className="absolute right-0 top-0 -mr-4 -mt-4">
                        <Badge className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-yellow-900 hover:bg-yellow-400">
                            Voordeligste keuze
                        </Badge>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-2xl">1 jaar</CardTitle>
                        <CardDescription className="text-primary-foreground/80">
                            Beste deal voor een volledig jaar
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-5xl font-bold">
                            €4,99
                            <span className="text-xl font-normal">/maand</span>
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            €{4.99 * 12} per jaar
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <Check className="mr-2 h-5 w-5" /> Volledige
                                toegang tot alle functies
                            </li>
                            <li className="flex items-center">
                                <Check className="mr-2 h-5 w-5" /> Geldig van{" "}
                                {currentDay} t/m {currentDayOneYearAhead}
                            </li>
                            <li className="flex items-center">
                                <Check className="mr-2 h-5 w-5" /> Grootste
                                besparing
                            </li>
                            <li className="flex items-center">
                                <Check className="mr-2 h-5 w-5" /> Meest
                                populaire keuze
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full bg-white py-6 text-lg font-bold text-primary transition-colors duration-300 ease-in-out hover:bg-white/90 dark:bg-blue-500"
                            onClick={() =>
                                handleCheckout("price_1NvTfHAiKenohXkKQI2sACYJ", 'one_time')
                            }
                        >
                            {isAuthenticated ? "Kiezen" : "Registreren"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </GuestLayout>
    );
}
