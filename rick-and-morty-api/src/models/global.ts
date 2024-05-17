export interface GlobalDataI {
  characters: RequestDataI
}

export interface RequestDataI {
  info: InfoI;
  results: CharactersI[]
}

export interface InfoI {
  count: number | string;
  next: string;
  pages: number | string;
  prev: number | null;
}

export const InfoDefault: InfoI = {
  count: "",
  next: "",
  pages: "",
  prev: null
}

export const requestDataDefault: RequestDataI = {
  info: InfoDefault,
  results: []
}

export const GlobalDataDefault: GlobalDataI = {
  characters: requestDataDefault
}

export interface CharactersI {
  id: number | string;
  created: string;
  gender: string;
  image: string;
  name: string;
  species: string;
  status: string;
  url: string;
}