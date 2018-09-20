const NEW_NATION = Symbol('NEW_NATION');
const DEFAULT = Symbol('DEFAULT');

export const PAGES = { NEW_NATION, DEFAULT };

interface Store {
  currentPage: Symbol;
}

export interface WithPageStoreProps extends Store {
  goToAddNation(): void;
  goToDefault(): void;
  setCurrentPage(newPage: Symbol): void;
}

export const withPageStore = {
  goToAddNation: () => (_: Store): Store => ({
    currentPage: NEW_NATION
  }),
  goToDefault: () => (_: Store): Store => ({
    currentPage: DEFAULT
  }),
  setCurrentPage: (newPage: Symbol) => (_: Store): Store => ({
    currentPage: newPage
  }),
  currentPage: DEFAULT
};
