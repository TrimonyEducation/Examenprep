import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import GuestLayout from "@/Layouts/GuestLayout";
import { BRAND_NAME } from "@/lib/constants";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title={`${BRAND_NAME}`} />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <div className="flex min-h-screen flex-col">
                <GuestLayout></GuestLayout>
                <div className="flex flex-grow items-center justify-center">
                    <Card className="w-full max-w-md">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">
                                Inloggen
                            </CardTitle>
                            <CardDescription>
                                Voer uw gegevens in om in te loggen
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={submit}>
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
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="my-4">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Wachtwoord"
                                        className="mb-3"
                                    />

                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="my-2"
                                    />
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
                                >
                                    Inloggen
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter className="flex items-center justify-center ">
                            <p className="text-sm text-gray-600">
                                Heb je nog geen account?{" "}
                                <Link
                                    href={"/register"}
                                    className="text-blue-600 hover:underline"
                                >
                                    Registreren
                                </Link>
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    );
}
