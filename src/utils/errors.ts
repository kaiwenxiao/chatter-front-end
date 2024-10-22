export const extractErrorMessage = (err: any) => {
  const errorMessage = err.graphQLErrors[0]?.extensions?.originalError?.message;

  if (Array.isArray(errorMessage)) {
    return errorMessage[0];
  } else {
    return errorMessage;
  }
};
