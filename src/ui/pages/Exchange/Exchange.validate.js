export const validate = values => {
  const errors = {}
  console.log('validate', values)
  if (typeof values.country_1 != 'undefined' && typeof values.country_2 != 'undefined') {
    if (values.country_1.id == values.country_2.id) {
      errors.country_2 = 'Выберите другую страну'
    }

  }
  if (!values.sum_1) {
    errors.sum_1 = 'Required'
  } else if (values.sum_1.length <= 0 || /[0-9]$/i.test(values.sum_1) !== true) {
    errors.sum_1 = 'Only digits'
  }

  if (!values.sum_2) {
    errors.sum_2 = 'Required'
  } else if (values.sum_2.length <= 0 || /[0-9]$/i.test(values.sum_2) !== true) {
    errors.sum_2 = 'Only digits'
  }

  if (!values.agree) {
    errors.agree = "Required"
  }
  console.log('errors',errors);
  return errors
}