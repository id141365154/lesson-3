export const validate = values => {
  const errors = {}
  if (!values.code) {
    errors.code = 'Required'
  } else if (values.code.length !== 4 || /[0-9]$/i.test(values.code) !== true) {
    errors.code = 'Must be exactly 4 digits'
  }

  return errors
}