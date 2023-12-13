import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteData, setStudentData,updateData } from '../redux/action/action';
import Edit from "../assets/edit.png";
import Remove from "../assets/remove.png";

function NewForm() {
    const final = useSelector((state)=> state.studentReducer.finalD);
    console.log('final', final)

    const [editData, setEditData] = useState(null)
    const [showbtn, setshowBtn] = useState(false)
    const [index, setIndex] = useState(null)
  const [inputdata, setInputdata] = useState({
    name: '',
    address: '',
    gender: '',
    // hobbies: [],
    dob: '',
  });

  const dispatch = useDispatch();


  

  const handleChange = (e) => {
    // const { name, value, type, checked } = e.target;

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
    console.log('inputdata', inputdata);
  };


  const handleSubmit=()=>{

    dispatch(setStudentData(inputdata));
    console.log('inputdata', inputdata);
    setInputdata({
        name: '',
        address: '',
        gender: '',
        // hobbies: [],
        dob: '',
    })
  }

  const handleRemove=(id)=>{

    console.log('delteid', id)
    dispatch(deleteData(id))
  
  }



  const setEditValue=(item,index)=>{
    console.log('index', index)
    setIndex(index)
      setEditData(item)
      setInputdata({
        name:item?.name,
        address:item?.address,
        gender:item?.gender,
        dob:item?.dob,

      })
      setshowBtn(true);
      console.log('editdata', editData)
    //   setEditindex(index)
      
    //   setShow(true)
      
//   console.log('edit', editData)
//   dispatch(updateData(index,editdata))
  
}

    const handleUpdate=()=>{
        
     
    const editdata = inputdata;  
    console.log('editdata', editdata)
       dispatch(updateData(index,editdata))


    setInputdata({
        name: '',
        address: '',
        gender: '',
        // hobbies: [],
        dob: '',
    })
    setIndex(null)
    setshowBtn(false)
//     const index = editindex
//   dispatch(updateData(index,editdata))


    }


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

        {/* <div>
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
        </div> */}

        {/* <div>
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
        </div> */}

        <label>
    Gender:
    <input
      type="radio"
      name="gender"
      value="male"
      checked={inputdata.gender === 'male'}
      onChange={handleChange}
    />
    Male
    <input
      type="radio"
      name="gender"
      value="female"
      checked={inputdata.gender === 'female'}
      onChange={handleChange}
    />
    Female
  </label>

  

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
        {
            showbtn ? <button type='button' onClick={handleUpdate}>update</button> :<button type='submit' onClick={handleSubmit}>
            add
        </button>
        }
        
      </div>


      {/* table start here*/}

      <div className="table">
      <div className="overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {/* <th scope="col" className="px-6 py-3">
                                student id
                            </th> */}
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                              gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                             Birth date
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                              hobbies
                            </th> */}
                            
                            <th scope="col" className="px-6 py-3">
                            edit
                            </th>
                            <th scope="col" className="px-6 py-3">
                             delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        final.map((item,id)=>{
                            return(

                             <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.id}
                            </th> */}
                            <td className="px-6 py-4">
                                {item.name}
                            </td>
                            <td className="px-6 py-4">
                                {item.address}
                            </td>
                            <td className="px-6 py-4">
                                {item.gender}
                            </td>
                            <td className="px-6 py-4">
                               {item.dob}
                            </td>
                            {/* <td className="px-6 py-4">
                                {item.hobbies?.[0] || item.hobies?.[1] || item.hobbies?.[2]}
                            </td> */}
                            <td className="px-6 py-4">
                                <img className='cursor-pointer' src={Edit} onClick={()=>setEditValue(item,id)} alt="" />
                            </td>
                            <td className="px-6 py-4">
                               <img className='cursor-pointer' src={Remove} onClick={()=> handleRemove(id)} alt="" />
                            </td>
                        </tr>
                        )

                        })
                    }
                       
                   
                    </tbody>
                </table>
            </div>

      </div>
    </div>
  );
}

export default NewForm;