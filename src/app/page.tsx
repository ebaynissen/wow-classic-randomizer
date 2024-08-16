"use client";

import {
    allianceCombinations,
    hordeCombinations,
    specs,
    professions,
    allianceRaces,
    hordeRaces,
    mainProfessions,
} from "./modules/info";
import { useState } from "react";
import {
    Description,
    Field,
    Fieldset,
    Label,
    Legend,
    Select,
    RadioGroup,
    Radio,
    Button,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Home() {
    const [faction, setFaction] = useState("random");
    const [wowClass, setWowClass] = useState("random");
    const [race, setRace] = useState("random");
    const [spec, setSpec] = useState("no");
    const [profession, setProfession] = useState("random");
    const [final, setFinal] = useState(["", "", "", "", ""]);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(faction, race, wowClass, spec, profession);
        randomize(faction, race, wowClass, spec, profession);
    };

    const handleSubmit2 = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitty titty");
        console.log(faction, race, wowClass, spec, profession);
    };

    const randomOrNah = ["random", "no"];

    function emptyOrImg(arg: String) {
        if (arg === "no") {
            return "/empty.jpg";
        }
    }

    function specImg(spec: String) {
        if (spec === "frost AOE") {
            return "/frost.png";
        }

        if (spec === "protection" && wowClass === "warrior") {
            return "/protectionW.png";
        }

        if (spec === "holy" && wowClass === "paladin") {
            return "//holyP.png";
        }

        return "/" + spec + ".png";
    }

    function capitalize(word: string): string {
        if (word === "") return "";
        if (word.split(" ").length > 1) {
            return (
                capitalize(word.split(" ")[0]) +
                " " +
                capitalize(word.split(" ")[1])
            );
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    function description() {
        let finFac = capitalize(final[0]);
        let finRace = capitalize(final[1]);
        let finSpec = capitalize(final[2]);
        let finClass = capitalize(final[3]);
        let finProf = capitalize(final[4]);

        return (
            (finFac === "Alliance" ? "An" : "A") +
            " " +
            finFac +
            " " +
            finRace +
            " " +
            finSpec +
            " " +
            finClass +
            (finProf === ""
                ? "."
                : " with " + finProf + " as their main profession. ")
        );
    }

    function randomize(
        faction: string,
        race: string,
        wowClass: string,
        spec: string,
        profession: string
    ) {
        let randomFaction =
            faction === "random"
                ? Math.random() < 0.5
                    ? "alliance"
                    : "horde"
                : faction;
        let randomClass =
            wowClass === "random"
                ? randomFaction === "alliance"
                    ? Object.keys(allianceCombinations)[
                          Math.floor(
                              Math.random() *
                                  Object.keys(allianceCombinations).length
                          )
                      ]
                    : Object.keys(hordeCombinations)[
                          Math.floor(
                              Math.random() *
                                  Object.keys(hordeCombinations).length
                          )
                      ]
                : "";
        let randomRace = "";
        if (race === "no") {
            randomRace = "";
        } else if (randomClass === "") {
            randomRace =
                randomFaction === "alliance"
                    ? allianceRaces[
                          Math.floor(Math.random() * allianceRaces.length)
                      ]
                    : hordeRaces[Math.floor(Math.random() * hordeRaces.length)];
        } else if (randomFaction === "alliance") {
            randomRace =
                allianceCombinations[randomClass][
                    Math.floor(
                        Math.random() * allianceCombinations[randomClass].length
                    )
                ];
        } else {
            randomRace =
                hordeCombinations[randomClass][
                    Math.floor(
                        Math.random() * hordeCombinations[randomClass].length
                    )
                ];
        }
        let randomSpec =
            spec === "random"
                ? specs[randomClass][
                      Math.floor(Math.random() * specs[randomClass].length)
                  ]
                : "";
        let randomProfession = "";
        if (profession === "random" && randomClass !== "") {
            randomProfession =
                professions[randomClass][
                    Math.floor(Math.random() * professions[randomClass].length)
                ];
        } else if (profession === "random" && randomClass === "") {
            randomProfession =
                mainProfessions[
                    Math.floor(Math.random() * mainProfessions.length)
                ];
        } else {
            randomProfession = "";
        }

        console.log(
            randomFaction,
            randomRace,
            randomSpec,
            randomClass,
            randomProfession
        );
        setFinal([
            randomFaction,
            randomRace,
            randomSpec,
            randomClass,
            randomProfession,
        ]);
    }
    return (
        <main className="flex flex-col items-center min-h-screen bg-gradient-to-tr from-red-600 to-sky-500	">
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <form
                    className="w-full lg:w-1/3 max-w-lg p-8 flex-grow"
                    onSubmit={handleSubmit}
                >
                    <Fieldset className="space-y-4 rounded-xl bg-white/5 p-6 sm:p-10">
                        <Legend className="text-base/7 font-semibold text-white">
                            WoW Classic Character Generator
                        </Legend>
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">
                                Faction
                            </Label>
                            <Description className="text-sm/6 text-white/50">
                                Do you want to be part of the Alliance or the
                                Horde?
                            </Description>
                            <div className="relative">
                                <Select
                                    value={faction}
                                    onChange={(e) => setFaction(e.target.value)}
                                    className={clsx(
                                        "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                                        // Make the text of each option black on Windows
                                        "*:text-black"
                                    )}
                                >
                                    <option value="random">
                                        Doesn&apost Matter
                                    </option>
                                    <option value="alliance">Alliance</option>
                                    <option value="horde">Horde</option>
                                </Select>
                                <ChevronDownIcon
                                    className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                    aria-hidden="true"
                                />
                            </div>
                        </Field>
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">
                                Character Race
                            </Label>
                            <Description className="text-sm/6 text-white/50">
                                Do you want to randomize your characterss race?
                            </Description>
                            <RadioGroup
                                value={race}
                                onChange={(value) => {
                                    setRace(value);
                                }}
                                className="flex flex-row space-x-2 justify-between"
                            >
                                {randomOrNah.map((val) => (
                                    <Radio
                                        key={val}
                                        value={val}
                                        className="group relative flex flex-grow cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                                    >
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm/6 font-medium">
                                                    {val === "random"
                                                        ? "Yes"
                                                        : "No"}
                                                </div>
                                            </div>
                                            <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                                        </div>
                                    </Radio>
                                ))}
                            </RadioGroup>
                        </Field>
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">
                                Character Class
                            </Label>
                            <Description className="text-sm/6 text-white/50">
                                Do you want to randomize your character&aposs
                                class?
                            </Description>
                            <RadioGroup
                                value={wowClass}
                                onChange={(value) => {
                                    setWowClass(value);
                                    setSpec("no");
                                }}
                                className="flex flex-row space-x-2 justify-between"
                            >
                                {randomOrNah.map((val) => (
                                    <Radio
                                        key={val}
                                        value={val}
                                        className="group relative flex flex-grow cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                                    >
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm/6 font-medium">
                                                    {val === "random"
                                                        ? "Yes"
                                                        : "No"}
                                                </div>
                                            </div>
                                            <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                                        </div>
                                    </Radio>
                                ))}
                            </RadioGroup>
                        </Field>
                        {wowClass !== "no" && (
                            <Field>
                                <Label className="text-sm/6 font-medium text-white">
                                    Character Specialization
                                </Label>
                                <Description className="text-sm/6 text-white/50">
                                    Do you want to randomize your class
                                    specialization?
                                </Description>
                                <RadioGroup
                                    value={spec}
                                    onChange={(value) => setSpec(value)}
                                    className="flex flex-row space-x-2 justify-between"
                                >
                                    {randomOrNah.map((val) => (
                                        <Radio
                                            key={val}
                                            value={val}
                                            className="group relative flex flex-grow cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                                        >
                                            <div className="flex w-full items-center justify-between">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm/6 font-medium">
                                                        {val === "random"
                                                            ? "Yes"
                                                            : "No"}
                                                    </div>
                                                </div>
                                                <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                                            </div>
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            </Field>
                        )}
                        <Field>
                            <Label className="text-sm/6 font-medium text-white">
                                Profession
                            </Label>
                            <Description className="text-sm/6 text-white/50">
                                Do you want to randomize your main profession?
                            </Description>
                            <RadioGroup
                                value={profession}
                                onChange={(value) => {
                                    setProfession(value);
                                }}
                                className="flex flex-row space-x-2 justify-between"
                            >
                                {randomOrNah.map((val) => (
                                    <Radio
                                        key={val}
                                        value={val}
                                        className="group relative flex flex-grow cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                                    >
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm/6 font-medium">
                                                    {val === "random"
                                                        ? "Yes"
                                                        : "No"}
                                                </div>
                                            </div>
                                            <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                                        </div>
                                    </Radio>
                                ))}
                            </RadioGroup>
                        </Field>

                        <Button
                            className="mt-6 w-full rounded-lg bg-white/10 py-4 text-white font-semibold"
                            type="submit"
                        >
                            Randomize!
                        </Button>
                    </Fieldset>
                </form>
                <div className="w-full lg:w-2/5">
                    <div className="space-y-4 rounded-xl bg-white/5 p-6 sm:p-10 flex flex-col items-center">
                        <div className="flex flex-col items-center space-y-4 max-w-72">
                            <p className="text-xl">Your Character </p>
                            <p className="text-xs">
                                {final[0] === ""
                                    ? "Character Description"
                                    : description()}{" "}
                            </p>
                            <div className="flex flex-row space-x-8">
                                <div className="flex flex-col items-center w-28">
                                    <p className="font-semibold">
                                        {final[0] === ""
                                            ? "Faction"
                                            : capitalize(final[0])}
                                    </p>
                                    <Image
                                        src={
                                            final[0] === ""
                                                ? "/empty.png"
                                                : "/" + final[0] + ".png"
                                        }
                                        alt=""
                                        className="w-16 h-16"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <div className="flex flex-col items-center w-28">
                                    <p className="font-semibold">
                                        {final[1] === ""
                                            ? "Race"
                                            : capitalize(final[1])}
                                    </p>
                                    <Image
                                        src={
                                            final[1] === ""
                                                ? "/empty.png"
                                                : final[1] + ".png"
                                        }
                                        alt=""
                                        className="w-16 h-16"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row space-x-8">
                                <div className="flex flex-col items-center w-28">
                                    <p className="font-semibold">
                                        {final[3] === ""
                                            ? "Class"
                                            : capitalize(final[3])}
                                    </p>
                                    <Image
                                        src={
                                            final[3] === ""
                                                ? "/empty.png"
                                                : final[3] + ".png"
                                        }
                                        alt=""
                                        className="w-16 h-16"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <div className="flex flex-col items-center w-28">
                                    <p className="font-semibold">
                                        {final[2] === ""
                                            ? "Spec"
                                            : capitalize(final[2])}
                                    </p>
                                    <Image
                                        src={
                                            final[2] === ""
                                                ? "/empty.png"
                                                : specImg(final[2])
                                        }
                                        alt=""
                                        className="w-16 h-16"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-28">
                                <p className="font-semibold">
                                    {final[4] === ""
                                        ? "Profession"
                                        : capitalize(final[4])}
                                </p>
                                <Image
                                    src={
                                        final[4] === ""
                                            ? "empty.png"
                                            : final[4] + ".png"
                                    }
                                    alt=""
                                    className="w-16 h-16"
                                    width={16}
                                    height={16}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                {/* footer with current author, year and link to github*/}
                <div className="flex justify-center items-center h-16">
                    <p>
                        ©{new Date().getFullYear()} by Ebaynissen
                        <a
                            href="https://www.github.com/ebaynissen"
                            className="underline px-2"
                            target="_blank"
                        >
                            {"Source code"}
                        </a>
                    </p>
                </div>
            </footer>
        </main>
    );
}
