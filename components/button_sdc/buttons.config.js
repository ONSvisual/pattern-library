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
          'btn-classes': 'btn--primary btn--green',

          'label': 'Continue'
        },
        {
          'btn-classes': 'btn--primary btn--secondary btn--blue',
          'label': 'Cancel'
        },
      ],
    },
  },{
    'name': 'start',
    'label': 'Start button',
    'context': {
      'btn-classes': 'btn--green',
      'label': 'Start'
    },
  },
  ]
  }
