
import React from 'react';


const PageNotes = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-4">Player Notes and Feedback</h1>
          <p className="mb-2">Your opinion is very important to us!</p>
          <p className="mb-2">Please share your feedback and suggestions.</p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Reviews:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>“The game is really engaging! I can't put it down!”</li>
            <li>“So many characters and possibilities — simply awesome!”</li>
            <li>“I would love to see more difficulty levels.”</li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">Suggestions:</h2>
          <ul className="list-disc list-inside">
            <li>Add new maps.</li>
            <li>Improve the reward system.</li>
            <li>Introduce weekly tournaments.</li>
          </ul>
        </main>
      </div>
    );
  };
  
  export default PageNotes;