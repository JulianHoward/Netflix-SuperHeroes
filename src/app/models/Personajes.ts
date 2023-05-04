
export interface Personaje {
    heroes:     Alien[];
    villains:   Alien[];
    antiHeroes: Alien[];
    aliens:     Alien[];
    humans:     Alien[];
}

export interface Alien {
    name:           string;
    alterEgo:       string;
    imagePath:      string;
    biography:      string;
    caracteristics: Caracteristics;
    abilities:      Abilities;
    movies:         string[];
}

export interface Abilities {
    force:        number;
    intelligence: number;
    agility:      number;
    endurance:    number;
    velocity:     number;
}

export interface Caracteristics {
    birth:    string;
    weight:   Eight;
    height:   Eight;
    universe: Universe;
}

export interface Eight {
    value: number;
    unity: Unity;
}

export enum Unity {
    Kg = "kg",
    Meters = "meters",
}

export enum Universe {
    Terra616 = "Terra 616",
}
