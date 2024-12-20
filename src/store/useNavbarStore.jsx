import { create } from "zustand";

const useNavbarStore = create((set) => ({
  isHomeSelected: true, 
  setHomeSelected: (isSelected) =>
    set(() => ({ isHomeSelected: isSelected })),
}));

export default useNavbarStore;
