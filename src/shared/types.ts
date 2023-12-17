export interface IPokemon {
  name: string
  url: string
};

export interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export interface IStat {
  base_start: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
};