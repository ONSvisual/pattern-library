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
    'name': 'group',
    'label': 'Secondary',
    'context': {
      'btns' : [
        {
      'btn-classes': 'btn--secondary btn--blue',
      'label': 'Secondary button'
    },
    ]
    },
  },{
    'name': 'group',
    'label': 'Disabled',
    'context': {
      'btns' : [
        {
      'btn-classes': 'btn--primary btn--green btn--primary-disabled',
      'label': 'Primary disabled'
    },{
      'btn-classes': 'btn--secondary btn--blue btn--primary-disabled',
      'label': 'Secondary Disabled'

    },
    ]
    },
  },
  {
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
