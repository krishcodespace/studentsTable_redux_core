// import React,{useState} from 'react'

// function NewForm() {

//     const [inputdata, setInputdata] = useState({
//         name:"",
//         address:"",
//         gender:"",
//         hobbies:[],
//         dob:'',

//     })

//     const handleChange=(e)=>{

//     }

//     console.log('inputdata', inputdata)
//   return (
//     <div>

//         <div className="inputfeilds">
//             <input type="text" name='name' value={inputdata?.name} onChange={handleChange} />
//             <input type="text" name='address' value={inputdata?.address} onChange={handleChange} />
//         </div>
//     </div>
//   )
// }

// export default NewForm

import React, { useState } from 'react';

function NewForm() {
  const [inputdata, setInputdata] = useState({
    name: '',
    address: '',
    gender: '',
    hobbies: [],
    dob: '',
  });

  const handleChange = (e) => {
    // const { name, value, type, checked } = e.target;

    // Handle checkboxes separately
    // if (type === 'checkbox') {
    //   const updatedHobbies = checked
    //     ? [...inputdata.hobbies, value]
    //     : inputdata.hobbies.filter((hobby) => hobby !== value);

    //   setInputdata((prevData) => ({
    //     ...prevData,
    //     hobbies: updatedHobbies,
    //   }));
    // } else {
    //   setInputdata((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }
      
    //   ));
    // }


    setInputdata({...inputdata, [e.target.name] : e.target.value})
  };

  console.log('inputdata', inputdata);

  return (
    <div>
      <div className="inputfeilds">
        <input
          type="text"
          name="name"
          value={inputdata.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="address"
          value={inputdata.address}
          onChange={handleChange}
          placeholder="Address"
        />

        <div>
          <label>
            Gender:
            <select
              name="gender"
              value={inputdata.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Hobbies:
            <div>
              <input
                type="checkbox"
                name="reading"
                value="reading"
                checked={inputdata.hobbies.includes('reading')}
                onChange={handleChange}
              />
              Reading
            </div>
            <div>
              <input
                type="checkbox"
                name="traveling"
                value="traveling"
                checked={inputdata.hobbies.includes('traveling')}
                onChange={handleChange}
              />
              Traveling
            </div>
            <div>
              <input
                type="checkbox"
                name="sport"
                value="sport"
                checked={inputdata.hobbies.includes('sport')}
                onChange={handleChange}
              />
              Sport
            </div>
          </label>
        </div>

        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={inputdata.dob}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default NewForm;
