
export interface Viloes {
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
    universe: string;
}

export interface Eight {
    value: number;
    unity: string;
}