import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
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
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <Head title="Registreren" />
            <div className="flex min-h-screen flex-col">
                <GuestLayout></GuestLayout>
                <div className="flex flex-grow items-center justify-center">
                    <Card className="w-full max-w-md">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold">
                                Registreren
                            </CardTitle>
                            <CardDescription>
                                Vul uw gegevens in om een account aan te maken
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
                                        required
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
                                        autoComplete="new-password"
                                        placeholder="••••••••"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="my-2"
                                    />
                                </div>

                                <div className="my-4">
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Bevestig wachtwoord"
                                        className="mb-3"
                                    />

                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        placeholder="••••••••"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full cursor-pointer"
                                    disabled={processing}
                                >
                                    Registreren
                                </Button>
                            </form>
                        </CardContent>
                        <CardFooter className="flex items-center justify-center ">
                            <p className="text-sm text-gray-600">
                                Heb je al een account?{" "}
                                <Link
                                    href="/login"
                                    className="text-blue-600 hover:underline"
                                >
                                    Inloggen
                                </Link>
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    );
}
