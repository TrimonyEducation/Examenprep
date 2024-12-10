import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { DisplayLG, TextSM } from "@/Components/typography/Typography";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import GuestLayout from "@/Layouts/GuestLayout";
import { BRAND_NAME } from "@/lib/constants";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect, useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { registerValidation } from "@/validation/auth/authValidation";

export default function Register() {
    const { toast } = useToast();
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
    const [count, setCount] = useState(0);
    const [subjectColor, setSubjectColor] = useState(subjectColors[count]);

    function GetSubjectColor(): string {
        if (count === subjectColors.length - 1) {
            setCount(0);
            return subjectColors[count];
        }
        const newCount = count + 1;
        setCount(newCount);
        return subjectColors[count];
    }

    const [text] = useTypewriter({
        words: [
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
        ],
        loop: true,
    });

    useEffect(() => {
        if (text.length === 0) {
            return setSubjectColor(GetSubjectColor());
        }
    }, [text]);

    const { data, setData, post, processing, errors, reset, setError } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        const validation = registerValidation.safeParse(data);
        if (!validation.success) {
            validation.error.errors.forEach((error) => {
                setError(error.path[0] as "email" | "password" | "password_confirmation", error.message);
            });
            return;
        }

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
            preserveScroll: true,
            onSuccess: () => {
                toast({
                    title: "Welkom!",
                    description: "Je account is aangemaakt!",
                });
            },
        });
    };

    return (
        <GuestLayout>
            <Head title={`${BRAND_NAME} | Registreren`} />
            <span className=" text-center mb-4">
                <DisplayLG weight="bold">
                    Begin vandaag nog met het leren van <br />
                    <span
                        style={{
                            color: subjectColor || "#06b6d",
                            fontWeight: "extrabold",
                        }}
                    >
                        {text.length > 0 ? text : "‎ "}
                    </span>
                </DisplayLG>
            </span>
            <div className="max-w-md w-10/12">
                <form onSubmit={submit} className="w-full">
                    <div>
                        <InputLabel
                            htmlFor="email"
                            value="E-mailadres"
                            className="mb-3"
                        />

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="uw@email.nl"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="my-4">
                        <InputLabel
                            htmlFor="password"
                            value="Wachtwoord"
                            className="mb-3"
                        />
                        <div className="relative w-full">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full pr-10"
                                autoComplete="current-password"
                                placeholder="••••••••"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <div
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="text-muted-foreground" />
                                ) : (
                                    <Eye className="text-muted-foreground" />
                                )}
                            </div>
                        </div>
                        <InputError
                            message={errors.password}
                            className="my-2"
                        />
                    </div>

                    <div className="my-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Bevestig Wachtwoord"
                            className="mb-3"
                        />
                        <div className="relative w-full">
                            <Input
                                id="password_confirmation"
                                type={
                                    showPasswordConfirmation
                                        ? "text"
                                        : "password"
                                }
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full pr-10"
                                autoComplete="new-password"
                                placeholder="••••••••"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                            />
                            <div
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                onClick={() =>
                                    setShowPasswordConfirmation(
                                        !showPasswordConfirmation
                                    )
                                }
                            >
                                {showPasswordConfirmation ? (
                                    <EyeOff className="text-muted-foreground" />
                                ) : (
                                    <Eye className="text-muted-foreground" />
                                )}
                            </div>
                        </div>
                        <InputError
                            message={errors.password_confirmation}
                            className="my-2"
                        />
                    </div>

                    <div className="w-full flex items-center justify-center mb-6"></div>
                    <Button
                        type="submit"
                        className="w-full cursor-pointer"
                        disabled={processing}
                        size={"lg"}
                    >
                        Aanmelden
                    </Button>
                </form>
                <div className="text-center w-full mt-4 tracking-normal">
                    <Link href={"/login"} className="text-center mt-4">
                        <TextSM weight="medium">
                            Heb je al een account?{" "}
                            <span className="underline  text-blue-600 hover:text-blue-800">
                                Inloggen
                            </span>
                        </TextSM>
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
