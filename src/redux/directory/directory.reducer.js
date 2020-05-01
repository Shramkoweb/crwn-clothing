const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: '/images/hats.png',
      id: 1,
      linkUrl: 'hats'
    },
    {
      title: 'jackets',
      imageUrl: '/images/jackets.png',
      id: 2,
      linkUrl: ''
    },
    {
      title: 'sneakers',
      imageUrl: '/images/sneakers.png',
      id: 3,
      linkUrl: ''
    },
    {
      title: 'women\'s',
      imageUrl: '/images/womens.png',
      size: 'large',
      id: 4,
      linkUrl: ''
    },
    {
      title: 'men\'s',
      imageUrl: '/images/men.png',
      size: 'large',
      id: 5,
      linkUrl: ''
    }
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
