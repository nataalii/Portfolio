export const ValidationConfig = {
  Name: {
    required: 'Name field is required',
  },
  Email: {
    required: 'Email field is required.',
    pattern: {
      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Enter valid email.',
    },
  },
  Message: {
    required: 'Message field is required',
  },
};
