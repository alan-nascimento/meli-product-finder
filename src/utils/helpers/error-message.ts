type Error = {
  response: {
    data: {
      error: string;
    };
    status: number;
  };
};

export type ErrorMessage = {
  message: string;
  status: number;
};

export const errorMessage = (error: Error): ErrorMessage => {
  if (error.response) {
    return {
      message: error.response.data.error,
      status: error.response.status,
    };
  }

  return { message: '', status: null };
};
