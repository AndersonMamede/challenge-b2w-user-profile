import { string, shape, arrayOf } from 'prop-types';

const userDataType = shape({
  image: string.isRequired,
  name: string.isRequired,
  profession: string.isRequired,
  description: string.isRequired,
  contact: shape({
    tel: string.isRequired,
    cel: string.isRequired,
    address: string.isRequired,
    website: string.isRequired,
    mail: string.isRequired,
  }).isRequired,
  skills: arrayOf(shape({
    name: string.isRequired,
    value: string.isRequired,
  })).isRequired,
  experience: arrayOf(shape({
    name: string.isRequired,
    date: string.isRequired,
    description: string.isRequired,
  })).isRequired,
  education: arrayOf(shape({
    name: string.isRequired,
    date: string.isRequired,
    description: string.isRequired,
  })).isRequired,
});

export { userDataType };
