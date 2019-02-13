module.exports = {
  'title': 'Buttons',
  'default': 'primary',
  'collated': true,
  'status': 'inDevelopment',
  'variants': [{
    'name': 'primary',
    'label': 'Primary',
    'context': {
      'label': 'Primary button',
      'btn-classes': 'btn--primary btn--green'
    },
  },{
    'name': 'secondary',
    'label': 'Secondary',
    'context': {
      'btn-classes': 'btn--secondary btn--blue',
      'label': 'Secondary button'
    },
  },{
    'name': 'group',
    'label': 'Group',
    'context': {
      'btns' : [
        {
          'btn-classes': 'btn--primary btn--secondary btn--blue',
          'label': 'Cancel'
        },
        {
          'btn-classes': 'btn--primary btn--green',
          'label': 'Continue'

        },
      ],
    },
  },{
    'name': 'group',
    'label': 'Interaction',
    'context': {
      'btns' : [
        {
          'btn-classes': 'btn--primary btn--green btn--previous',

          'label': 'Previous'
        },
        {
          'btn-classes': 'btn--primary btn--green btn--next',
          'label': 'Next'
        },
      ],
    },
  },{
    'name': 'group',
    'label': 'Gender',
    'context': {
      'btns' : [
        {
          'btn-classes': 'btn--primary btn--green btn--male',

          'label': 'Male'
        },
        {
          'btn-classes': 'btn--primary btn--green btn--female',
          'label': 'Female'
        },
      ],
    },
  },
  {
    'name': 'start',
    'label': 'Start button',
    'context': {
      'btn-classes': 'btn--green btn--start',
      'label': 'Start'
    },
  },
  ]
  }
