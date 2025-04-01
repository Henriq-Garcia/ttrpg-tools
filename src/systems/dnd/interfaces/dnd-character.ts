const DnD_SUBCLASSES = {
    fighter: ["Champion", "Eldritch Knight", "Battle Master"],
    warlock: ["The Archfey", "The Fiend", "The Great Old One"]
}

const DnD_RACES = {
    elf: ["Wood Elf", "High Elf"],
    human: ["Variant Human"],
    dwarf: ["Mountain Dwarf", "Hill Dwarf"]
}

const DnD_ALIGNMENTS = [
    "Lawful Good", "Neutral Good", "Chaotic Good", 
    "Lawful Neutral", "Neutral", "Chaotic Neutral",
    "Lawful Evil", "Neutral Evil", "Chaotic Evil"
]

export interface IDnDCharacterClass {
    name: string;
    subclass: string;
    level: number;
}

export interface IDnDCharacterRace {
    name: string;
    subrace?: string;
}

export interface IDnDAttribute {
    name: string;
    value: number;
    modifier: number;
}

export interface IDnDSkill {
    name: string;
    attribute: string;
    proficiency: boolean;
    modifier: number
}

export interface ICharacterHitPoint {
    maximum_hp: number;
    current_hp: number;
    temporary_hp: number;
}

export interface IHitDice {
    ammount: number;
    dice_sides: number
}

export interface IFeatureOrTrait {
    name: string;
    description: string
}

export interface IEquipment {
    name: string;
    description: string;
    value: string;
    weight: number;
}

export interface ICharacterFortune {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
}

export interface IDnDCharacterSheet {
    character_name: string;
    player_name: string;
    classes: IDnDCharacterClass[];
    overall_level: number;
    background: string;
    race: IDnDCharacterRace;
    alignment: string;
    experience_points: number;
    proficiency_bonus: number;
    attributes: IDnDAttribute[];
    skills: IDnDSkill[];
    passive_wisdom: number;
    armor_class: number;
    initiative: number;
    speed: number;
    hit_point: ICharacterHitPoint;
    hit_dice: IHitDice;
    personality_traits: string;
    ideals: string;
    bonds: string;
    flaws: string;
    features_and_traits: IFeatureOrTrait;
    equipment: IEquipment[]
    fortune: ICharacterFortune
}