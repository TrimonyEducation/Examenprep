import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { error } from "console";
import { FormEventHandler } from "react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage().props.auth.user;
    const { toast } = useToast();

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        try {
            patch(route("profile.update"), {
                preserveScroll: true,
                onSuccess: () => {
                    toast({
                        title: "Opgeslagen!",
                        description: "Je accountinformatie is bijgewerkt.",
                    });
                },
                onError: (errors) => {
                    setData("email", user.email);
                    toast({
                        variant: "destructive",
                        title: "Oeps!",
                        description: "Er is iets misgegaan.",
                    });
                },
            });
        } catch (error) {
            setData("email", user.email);
            toast({
                variant: "destructive",
                title: "Fout",
                description: "Er is een onverwachte fout opgetreden.",
            });
        }
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    E-mailadres wijzigen
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Update je e-mailadres.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="email" value="E-mailadres" />

                    <Input
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Je hebt je e-mailadres nog niet geverifieerd.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-muted-foreground underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Klik hier om een nieuwe verificatielink te
                                ontvangen.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                Een nieuwe verificatielink is naar je
                                e-mailadres gestuurd.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <Button disabled={processing || data.email === user.email}>
                        Opslaan
                    </Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-muted-foreground">
                            Opgeslagen!
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
