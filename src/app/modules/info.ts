export const allianceCombinations: { [key: string]: string[] } = {
    priest: ["human", "dwarf", "night elf"],
    mage: ["gnome", "human"],
    warlock: ["gnome", "human"],
    druid: ["night elf"],
    rogue: ["human", "night elf", "gnome", "dwarf"],
    hunter: ["night elf", "dwarf"],
    paladin: ["human", "dwarf"],
    warrior: ["human", "gnome", "dwarf", "night elf"],
};

export const hordeCombinations: { [key: string]: string[] } = {
    priest: ["undead", "troll"],
    mage: ["undead", "troll"],
    warlock: ["undead", "orc"],
    druid: ["tauren"],
    rogue: ["undead", "troll", "orc"],
    hunter: ["troll", "orc"],
    warrior: ["undead", "troll", "orc", "tauren"],
    shaman: ["troll", "orc", "tauren"],
};

export const specs: { [key: string]: string[] } = {
    priest: ["holy", "shadow", "discipline"],
    mage: ["arcane", "fire", "frost", "frost AOE"],
    warlock: ["affliction", "demonology", "destruction"],
    druid: ["balance", "feral", "guardian", "restoration"],
    rogue: ["assassination", "combat", "subtlety"],
    hunter: ["beast mastery", "marksmanship", "survival"],
    paladin: ["holy", "protection", "retribution"],
    warrior: ["arms", "fury", "protection"],
    shaman: ["elemental", "enhancement", "restoration"],
};

export const professions: { [key: string]: string[] } = {
    priest: ["alchemy", "engineering", "tailoring"],
    mage: ["alchemy", "engineering", "tailoring"],
    warlock: ["alchemy", "engineering", "tailoring"],
    druid: ["alchemy", "engineering", "leatherworking", "tailoring"],
    rogue: ["alchemy", "engineering", "leatherworking"],
    hunter: ["alchemy", "engineering", "leatherworking"],
    paladin: [
        "alchemy",
        "engineering",
        "enchanting",
        "blacksmithing",
        "tailoring",
    ],
    warrior: ["alchemy", "engineering", "blacksmithing"],
    shaman: [
        "alchemy",
        "engineering",
        "blacksmithing",
        "leatherworking",
        "tailoring",
    ],
};

export const wowClasses = [
    "priest",
    "mage",
    "warlock",
    "druid",
    "rogue",
    "hunter",
    "paladin",
    "warrior",
    "shaman",
];

export const allianceRaces = ["human", "dwarf", "gnome", "night elf"];

export const hordeRaces = ["undead", "troll", "tauren", "orc"];

export const mainProfessions = [
    "alchemy",
    "engineering",
    "tailoring",
    "leatherworking",
    "enchanting",
    "blacksmithing",
];
