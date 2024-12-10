import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

import { DisplayLG, TextSM } from "@/Components/typography/Typography";
import { Button } from "@/Components/ui/button";

import { Input } from "@/Components/ui/input";
import GuestLayout from "@/Layouts/GuestLayout";
import { BRAND_NAME } from "@/lib/constants";
import { Head, Link, useForm } from "@inertiajs/react";
import { Eye, EyeOff } from "lucide-react";
import { FormEventHandler, useState } from "react";
import { loginValidation } from "@/validation/auth/authValidation";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
    auth: any;
}) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset, setError } =
        useForm({
            email: "",
            password: "",
            remember: true,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        const validation = loginValidation.safeParse(data);
        if (!validation.success) {
            validation.error.errors.forEach((error) => {
                setError(error.path[0] as "email" | "password", error.message);
            });
            return;
        }
        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title={`${BRAND_NAME} | Inloggen`} />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <span className=" text-center mb-4">
                <DisplayLG weight="bold">
                    Welkom terug! <br /> Klaar om te leren?
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

                    <div className="my-4 relative">
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
                            <InputError
                                message={errors.password}
                                className="my-2"
                            />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center mb-6">
                        {canResetPassword && (
                            <Link
                                href="/forgot-password"
                                className="text-sm font-semibold ml-auto"
                            >
                                Wachtwoord vergeten?
                            </Link>
                        )}
                    </div>
                    <Button
                        type="submit"
                        className="w-full cursor-pointer"
                        disabled={processing}
                        size={"lg"}
                    >
                        Inloggen
                    </Button>
                </form>
                <div className="text-center w-full mt-4 tracking-normal">
                    <Link href={"/register"} className="text-center mt-4">
                        <TextSM weight="medium">
                            Heb je nog geen account?{" "}
                            <span className="underline  text-blue-600 hover:text-blue-800">
                                Aanmelden
                            </span>
                        </TextSM>
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
