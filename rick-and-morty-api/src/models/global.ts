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

export interface eventI {
  target: {
    value: string
  }
}

export const InfoDefault: InfoI = {
  count: "",
  next: "",
  pages: "",
  prev: null
}

export const RequestDataDefault: RequestDataI = {
  info: InfoDefault,
  results: []
}

export const GlobalDataDefault: GlobalDataI = {
  characters: RequestDataDefault
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

export const eventDefault: eventI = {
  target: {
    value: ""
  }
}

export const CharactersDefault: CharactersI = {
  id: "",
  created: "",
  gender: "",
  image: "",
  name: "",
  species: "",
  status: "",
  url: "",
}