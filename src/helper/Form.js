import React, { useState } from 'react';

const StudentFrom = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [dob, setDob] = useState('');

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const hobby = e.target.value;
    if (e.target.checked) {
      // Add hobby to the list
      setHobbies([...hobbies, hobby]);
    } else {
      // Remove hobby from the list
      setHobbies(hobbies.filter((h) => h !== hobby));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form values
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Gender:', gender);
    console.log('Hobbies:', hobbies);
    console.log('Date of Birth:', dob);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />

      {/* Address Field */}
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <br />

      {/* Gender Field */}
      <label>
        Gender:
        <label >
          <input

            type="radio"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
          />
          Female
        </label>
      </label>
      <br />

      {/* Hobby Field */}
      <label>
        Hobbies:
        <label>
          <input
            type="checkbox"
            value="reading"
            checked={hobbies.includes('reading')}
            onChange={handleCheckboxChange}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            value="traveling"
            checked={hobbies.includes('traveling')}
            onChange={handleCheckboxChange}
          />
          Traveling
        </label>
        {/* Add more hobbies as needed */}
      </label>
      <br />

      {/* Date of Birth Field */}
      <label>
        Date of Birth:
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </label>
      <br />

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentFrom;
