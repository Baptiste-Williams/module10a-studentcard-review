// StudentCard.jsx
// This shows a student's profile with their name, major, year, picture, and bio.
// It uses props to pass info in and useState to control when the bio is shown.

import React from 'react'; // Required so we can use useState

function StudentCard(props) {
  // Props passed in from App.jsx
  const { name, major, year, bio, imageUrl } = props;

  // Track whether we should show the bio or not
  const [showBio, setShowBio] = React.useState(false);

  // Toggle showBio between true and false
  const toggleBio = () => {
    setShowBio(!showBio);
    console.log("Toggle clicked. New state will be:", !showBio); // optional debug
  };

  return (
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Student photo */}
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '12px'
        }}
      />

      {/* Name and class info */}
      <h2 style={{ margin: '0', fontSize: '22px', color: '#000' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px', color: '#000' }}>
        {major} – {year}
      </p>

      {/* Toggle button */}
      <button
        onClick={toggleBio}
        style={{
          marginTop: '12px',
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: '#007BFF',
          color: 'white'
        }}
      >
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>

      {/* Bio content */}
      {showBio && (
        <p style={{
          marginTop: '16px',
          fontSize: '14px',
          backgroundColor: '#ffdddd', // pop styling so it stands out
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          color: '#000'
        }}>
          {bio}
        </p>
      )}
    </div>
  );
}

export default StudentCard;
