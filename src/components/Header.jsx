import React from 'react';

function Header({ pageLogo }) {
  return (
    <div className="bg-slate-800 w-full h-20 p-5 flex justify-center items-center">
      <img src={pageLogo} alt="Header Image" className="h-10 w-10" />
    </div>
  );
}

export default Header;
