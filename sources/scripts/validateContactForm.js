import '../assets/justValidate/just-validate.production.min.js'
import Inputmask from '../assets/inputmask/inputmask.es6.js'

new Inputmask({
  mask: '+[9]{11,16}',
}).mask(document.querySelector('input[name="contact-phone"]'))

new JustValidate('#contact', {
  errorFieldCssClass: 'invalid',

  tooltip: {
    position: 'top',
  },
})
  .onSuccess(() => {
    document.querySelector('form#contact').submit()
  })

  .addField('[name="contact-name"]', [
    {
      rule: 'required',
    },
  ])
  .addField('[name="contact-mail"]', [
    {
      rule: 'email',
    },
  ])
  .addField('[name="contact-phone"]', [
    {
      rule: 'function',
      validator: () => {
        let phoneUnmaskedValue = document
          .querySelector('[name="contact-phone"]')
          .inputmask.unmaskedvalue()

        return (
          phoneUnmaskedValue?.length >= 11 &&
          Number.isInteger(parseInt(phoneUnmaskedValue))
        )
      },
    },
  ])