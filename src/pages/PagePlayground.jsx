import React from 'react';

const PagePlayground = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-4">Game Rules</h1>
        <p className="mb-2">1. The game starts with character selection.</p>
        <p className="mb-2">2. Players take turns making moves.</p>
        <p className="mb-2">3. The objective is to collect the most points.</p>
        <p className="mb-2">4. The game ends when players have exhausted all their moves.</p>
        <h2 className="text-2xl font-bold mt-6 mb-4">Game Features</h2>
        <ul className="list-disc list-inside">
          <li>Unique characters with special abilities.</li>
          <li>Diverse difficulty levels.</li>
          <li>Multiplayer mode.</li>
          <li>User-friendly interface.</li>
        </ul>
      </main>
    </div>
  );
};

export default PagePlayground;