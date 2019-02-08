## When to use this component

Use the checkboxes component when you need to help users select multiple options from a list or toggle a single option on or off

## When not to use this component

Do not use the checkboxes component if users can only choose one option from a selection. In this case, use the radios component.

## How it works

Checkboxes are grouped together in a `<fieldset>` with a `<legend>` that describes them, as shown in the examples on this page. This is usually a question, like ‘How would you like to be contacted?’.

If you are asking just [one question per page](https://design-system.service.gov.uk/patterns/question-pages/#start-by-asking-one-question-per-page) as recommended, you can set the contents of the `<legend>` as the page heading. This is good practice as it means that users of screen readers will only hear the contents once.

Read more about [why and how to set legends as headings](https://design-system.service.gov.uk/get-started/labels-legends-headings).

Unlike with radios, users can select multiple options from a list of checkboxes. Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.

If needed, add a hint explaining this, for example, ‘Select all that apply’.

There are 2 ways to use the checkboxes component. You can use HTML or, if you’re using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/), you can use the Nunjucks macro.
