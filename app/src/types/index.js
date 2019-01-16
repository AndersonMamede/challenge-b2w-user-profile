import { string, shape } from 'prop-types';

const userDataType = shape({
  name: string.isRequired,
});

export { userDataType };
