interface Store {
  errors: Error[];
}

export interface WithErrorStoreProps extends Store {
  addError(error: Error): void;
  removeError(index: number): void;
}

export const withErrorStore = {
  addError: (error: Error) => (store: Store): Store => ({
    errors: store.errors.concat(error)
  }),
  removeError: (index: number) => (store: Store): Store => ({
    errors: store.errors.filter((_, i) => i !== index)
  }),
  errors: [] as Error[]
};
