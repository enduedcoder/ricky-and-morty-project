import { ValueOf } from "../../../util/types";

export const GenderType = {
  Male: "male",
  Female: "female",
} as const;

export type GenderTypeValue = ValueOf<typeof GenderType>;

export const StatusType = {
  Alive: "Alive",
  Dead: "Dead",
  Unknown: "unknown",
  Genderless: "Genderless",
} as const;

export type StatusTypeValue = ValueOf<typeof StatusType>;

export const SpeciesType = {
  Human: "Human",
  Alien: "Alien",
} as const;

export type SpeciesTypeValue = ValueOf<typeof SpeciesType>;
