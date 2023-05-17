import React from "react";

const notes = {
  title: "Hmmm oh life",
  content: "I don't understand this"
};

function Notes() {
  return (
    <div className="note">
      <h1>{notes.title}</h1>
      <p>{notes.content}</p>
    </div>
  );
}

export default Notes;
