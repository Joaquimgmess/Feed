import React from 'react';
import Header from './components/Header';
import pageLogo from './assets/header-simbol.png';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

function App() {
  return(
    <div>
      <Header pageLogo={pageLogo} />
      <div className='my-8 mx-auto grid grid-cols-[256px,1fr] max-w-6xl px-4 gap-8 items-start'>
        <Sidebar/>
        <main>
          <Post 
            author="Joaquim" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, unde? Dolor quasi ducimus totam et, assumenda suscipit doloremque illo quis, praesentium, voluptas nihil alias perferendis ea beatae cum tenetur laboriosam"
          />
        </main>
    </div>
  </div>
)
}

export default App

