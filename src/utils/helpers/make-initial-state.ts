type InitialState<T> = {
  data: T;
  error: {
    message: string;
    status: number;
  };
  loading: boolean;
};

export const makeInitialState = <T>(data: any = {}): InitialState<T> => ({
  data,
  error: {
    message: '',
    status: null,
  },
  loading: false,
});
