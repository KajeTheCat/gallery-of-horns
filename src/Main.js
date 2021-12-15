import React from 'react';
import Beast from './Beast';
import dragon from './imgs/dragon.jpg'
import minotaur from './imgs/minotaur.jpg'
import unicorn from './imgs/unicorn.jpg'

class Main extends React.Component {
  render() {
    return (
      <>
        <p>Fantasy Creatures:</p>
        <Beast title={'Unicorn'} description={'These beautiful horses have one horn, and only only exist in fantasy settings!'} img_url={unicorn}/>
        <Beast title={'Minotaur'} description={'These monstrous beings have two horns. They only exist in fantasy settings'} img_url={minotaur}/>
        <Beast title={'Dragon'} description={'These majestic beings can come with one, two, or no horns. They only exist in fantasy settings!'} img_url={dragon}/>
      </>
    )
  }
};

export default Main;