const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

if(!validator.isLength(data.handle, { min: 2, max: 40})) {
    errors.handle = 'Handle needs to be between 2 and 4 characters';
}
if(validator.isLength(data.handle)) {
    errors.handle = 'profile handle is required';
}

  return {
    errors,
    isValid: isEmpty(errors)
  }
}