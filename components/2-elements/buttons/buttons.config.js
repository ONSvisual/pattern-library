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
      'btn-classes': 'btn--primary'
    },
  },{
    'name': 'group',
    'label': 'Secondary',
    'context': {
      'btns' : [
        {
      'btn-classes': 'btn--secondary',
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
      'btn-classes': 'btn--secondary btn--primary-disabled',
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
          'btn-classes': 'btn--secondary',
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
  },{
    'name': 'group',
    'label': 'Play / Pause',
    'context': {
      'btns' : [
        {
          'btn-classes': 'btn--primary btn--green btn--play',

          'label': 'Play'
        },
        {
          'btn-classes': 'btn--primary btn--green btn--pause',
          'label': 'Pause'
        },
      ],
    },
  },{
    'name': 'group',
    'label': 'Action',
    'context': {
      'btns' : [
        {
          'btn-classes': 'btn--primary btn--green btn--start',
          'label': 'Start'
        },
        {
          'btn-classes': 'btn--secondary btn--restart',
          'label': 'Restart'
        },
      ],
    },
  },{
    'name': 'group',
    'label': 'Navigate',
    'context': {
      'btns' : [
        {
          'btn-classes': 'btn--primary btn--green btn--up',
          'label': 'Up a level'
        },
        {
          'btn-classes': 'btn--secondary btn--blue btn--top',
          'label': 'Back to top'
        },
      ],
    },
  },
  ]
  }
