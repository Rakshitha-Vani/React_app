import React from 'react';

function Header() {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
        My <span className="text-primary">Tasks</span>
      </h1>
      <p className="text-slate-500 font-medium">Simplify your day, one task at a time.</p>
    </header>
  );
}

export default Header;