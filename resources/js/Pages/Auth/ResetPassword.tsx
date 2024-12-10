import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { DisplayMD, TextSM } from "@/Components/typography/Typography";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useToast } from "@/hooks/use-toast";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    const { toast } = useToast();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            post(route("password.store"), {
                onFinish: () => reset("password", "password_confirmation"),
                onSuccess: () => {
                    toast({
                        description: "Wachtwoord gereset!",
                        title: "success",
                    });
                },
                onError: (errors) => {
                    console.error(errors);
                    toast({
                        description: "Er is iets misgegaan.",
                        title: "Oeps!",
                        variant: "destructive",
                    });
                }
            });
        } catch (error) {
            console.error(error);
            toast({
                description: "Er is iets misgegaan.",
                title: "Oeps!",
                variant: "destructive",
            });
        }
    };

    return (
        <GuestLayout>
            <Head title="Wachtwoord resetten" />
            <span className="text-left block">
                <DisplayMD weight="bold">Reset wachtwoord</DisplayMD>
            </span>
            <span className="mb-4 text-left block">
                <TextSM>
                    Vul je email en nieuw wachtwoord in om je wachtwoord te
                    resetten.
                </TextSM>
            </span>
            <form onSubmit={submit} className="w-full px-4 md:w-1/3">
                <div>
                    <InputLabel htmlFor="email" value="E-mailadres" />

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="uw@email.nl"
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Wachtwoord" />

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Bevestig Wachtwoord"
                    />

                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 w-full flex items-center justify-end">
                    <Button className="w-full" disabled={processing}>
                        Wachtwoord resetten
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
