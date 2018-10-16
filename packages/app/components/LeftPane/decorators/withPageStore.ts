const NEW_NATION = Symbol('NEW_NATION');
const NEW_TERRITORY = Symbol('NEW_TERRITORY');
const DEFAULT = Symbol('DEFAULT');

export const PAGES = { NEW_NATION, NEW_TERRITORY, DEFAULT };

interface Store {
  currentPage: Symbol;
}

export interface WithPageStoreProps extends Store {
  goToAddNation(): void;
  goToAddTerritory(): void;
  goToDefault(): void;
  setCurrentPage(newPage: Symbol): void;
}

export const withPageStore = {
  goToAddNation: () => (_: Store): Store => ({
    currentPage: NEW_NATION
  }),
  goToAddTerritory: () => (_: Store): Store => ({
    currentPage: NEW_TERRITORY
  }),
  goToDefault: () => (_: Store): Store => ({
    currentPage: DEFAULT
  }),
  setCurrentPage: (newPage: Symbol) => (_: Store): Store => ({
    currentPage: newPage
  }),
  currentPage: DEFAULT
};
