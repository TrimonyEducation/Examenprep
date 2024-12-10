import { BRAND_NAME } from "@/lib/constants";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { DisplayLG, TextLG } from "@/Components/typography/Typography";

export default function Faq() {
    return (
        <GuestLayout>
            <Head title={`${BRAND_NAME} | Veelgestelde vragen`} />
            <div className="container mx-auto px-4 ">
                <div className="mb-2 text-center ">
                    <DisplayLG weight="bold">
                        Veelgestelde vragen over {BRAND_NAME}
                    </DisplayLG>
                </div>
                <p className="mb-8 text-center text-muted-foreground">
                    Alles wat je moet weten over {BRAND_NAME}
                </p>
                <Accordion type="single" className="mx-auto w-full max-w-3xl">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <TextLG>Wat is {BRAND_NAME}?</TextLG>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {BRAND_NAME} is een e-learning platform voor het
                            leren voor de VO eindexamens dat gebruik maakt van
                            videos, "Spaced repetition" technieken &
                            gepersonaliseerd leren. Het is ontworpen om
                            studenten te helpen effectiever te leren en
                            informatie beter te onthouden voor hun eindexamens.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <TextLG>
                                Kan ik {BRAND_NAME} gebruiken voor het
                                staatsexamen?
                            </TextLG>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {BRAND_NAME} is geschikt voor het voorbereiden op
                            het
                            <strong className="text-black underline dark:text-white">
                                {" "}
                                centraal examen (CE){" "}
                            </strong>
                            van het staatsexamen. Het staatsexamen bestaat,
                            naast dit deel, ook uit een deel dat het SE vervangt
                            (college-examen), en deze stof is anders dan de
                            CE-stof. Je kunt deze SE-stof
                            <strong className="text-black underline dark:text-white">
                                {" "}
                                niet{" "}
                            </strong>
                            vinden op {BRAND_NAME}. De stof voor het CE kun je
                            echter wél vinden op {BRAND_NAME}.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <TextLG>Wat is "Spaced repetition"?</TextLG>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            “Spaced repetition,” of herhaald leren, is een
                            leertechniek waarbij de leerstof op geplande
                            intervallen wordt herhaald. Dit helpt bij het
                            verplaatsen van informatie van het korte- naar het
                            langetermijngeheugen. Eerst wordt de leerstof
                            aangeboden, waarna er om de zoveel dagen, weken, en,
                            wanneer je de stof al goed beheerst, zelfs maanden,
                            vragen over deze stof worden gesteld. {BRAND_NAME}{" "}
                            maakt gebruik van deze techniek om het leerproces te
                            optimaliseren en de retentie van informatie te
                            verbeteren.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <TextLG>Welke vakken heeft {BRAND_NAME}?</TextLG>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {BRAND_NAME} biedt een breed scala aan vakken. De
                            vakken die wij aanbieden zijn:
                            <ul className="mt-2 list-inside list-disc">
                                <li>Nederlands</li>
                                <li>Engels</li>
                                <li>Wiskunde A</li>
                                <li>Wiskunde B</li>
                                <li>Geschiedenis</li>
                                <li>Aardrijkskunde</li>
                                <li>Biologie</li>
                                <li>Natuurkunde</li>
                                <li>Scheikunde</li>
                                <li>Economie</li>
                                <li>Bedrijfseconomie</li>
                                <li>Maatschappijwetenschappen</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <TextLG>Voor welk niveau is {BRAND_NAME}?</TextLG>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {BRAND_NAME} is beschikbaar voor de volgende niveaus
                            VMBO-GL/TL, HAVO en VWO.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </GuestLayout>
    );
}
