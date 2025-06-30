export type initialStateType = {
  preferences: preferences;
};

type preferences = {
  language: "esES" | "enGB" | "caES";
};

export const initialState: initialStateType = {
  preferences: {
    language: "esES",
  },
};
