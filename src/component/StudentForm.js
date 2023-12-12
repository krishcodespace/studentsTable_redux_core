import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteData, setStudentData, updateData } from '../redux/action/action';
import Table from '../helper/Table';
import Edit from "../assets/edit.png";
import Remove from "../assets/remove.png";


function StudentForm() {

    const data = useSelector((state)=> state.studentReducer.studentData);
    // console.log('data', data)
    const final = useSelector((state)=> state.studentReducer.finalD);
    // console.log('final', final)
      // State variables for form inputs
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [dob, setDob] = useState('');
  const [value, setValue] = useState()
  const [editData, setEditData] = useState()
  const [finalData, setFinalData] = useState()
  const [show, setShow] = useState(false)
  const [editindex, setEditindex] = useState()
//   const [selectedDate, setSelectedDate] = useState('')



const dispatch  = useDispatch();



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
  const handleSubmit = () => {


    

    // const formData = {
    //     name: name || editData?.name,
    //     address: address || editData?.address,
    //     gender: gender|| editData?.gender,
    //     hobbies: hobbies || editData?.hobbies?.[0],
    //     dob: dob || editData.dob,
    //   };
  
    const formData = {
        name: name ,
        address: address ,
        gender: gender,
        hobbies: hobbies,
        dob: dob,
      };
  
      
      dispatch(setStudentData(formData))
    // Log form values
        console.log('formData', formData)

        setName("");
        setAddress("");
        setGender("");
        setHobbies([]);
        setDob("")
        setShow(false)

        };

  const handleRemove=(id)=>{

    console.log('delteid', id)
    dispatch(deleteData(id))
  
  }



  const setEditValue=(editdata,index)=>{
    console.log('index', index)
      setEditData(editdata)
      setEditindex(index)
      
      setShow(true)
      
//   console.log('edit', editData)
//   dispatch(updateData(index,editdata))
  
}

    const handleUpdate=()=>{
    console.log('name.address,gender,dob', name,address,gender,dob)
    const editdata = editData;  
//     const index = editindex
//   dispatch(updateData(index,editdata))


    }



    return (
        <>
        <div className="content">

        <div className="formd">

        <div className='flex m-2 justify-between' 
        // onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <label>
            Name:
            <input
             type="text" value={name || editData?.name } 
             onChange={(e) => setName(e.target.value)}
              />
          </label>
          <br />
    
          {/* Address Field */}
          <label>
            Address:
            <input type="text" value={address || editData?.address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <br />
    
          {/* Gender Field */}
          <label>
            Gender:
            <label className='mx-3'>
              <input
                type="radio"
                value="male"
                // checked={gender === 'male' }
                checked={(editData ? editData.gender : gender) === 'male'}

                onChange={() => setGender('male')}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                // checked={gender === 'female'}
                checked={(editData ? editData.gender : gender) === 'female'}
                onChange={() => setGender('female')}

              />
              Female
            </label>
          </label>
          <br />
    
          {/* Hobby Field */}
          <label>
            Hobbies:
            <label className='mx-3'>
              <input className='mx-1'
                type="checkbox"
                value={"reading"}
                // checked={hobbies.includes('reading')}
                checked={(editData ? editData.hobbies : hobbies).includes('reading')}
                onChange={handleCheckboxChange}
              />
              Reading
            </label>
            <label>
              <input  
              className='mx-1'
                type="checkbox"
                value="traveling"
                // checked={hobbies.includes('traveling')}
                checked={(editData ? editData.hobbies : hobbies).includes('traveling')}
                onChange={handleCheckboxChange}
              />
              Traveling
            </label>
            <input
             className='mx-1'
                type="checkbox"
                value="chess"
                // checked={hobbies.includes('chess')}
                checked={(editData ? editData.hobbies : hobbies).includes('chess')}
                onChange={handleCheckboxChange}
              />
              chess
            {/* Add more hobbies as needed */}
          </label>
          <br />
    
          {/* Date of Birth Field */}
          <label htmlFor="birthday">Dob</label>
            <input
            type="date"
            id="birthday"
            name="birthday"
            value={dob || editData?.dob }
            onChange={(e)=> setDob(e.target.value)}
            />
          {/* <label>
            Date of Birth:
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </label> */}
          <br />
    
          {/* Submit Button */}
          {
            show?
            <button type='button' onClick={handleUpdate}>update</button> : 

          <button 
          type="button"
        onClick={handleSubmit}
          
          >Submit</button>
          }
        
        </div>
        </div>


    
     

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
                            <th scope="col" className="px-6 py-3">
                              hobbies
                            </th>
                            
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
                            <td className="px-6 py-4">
                                {item.hobbies?.[0] || item.hobies?.[1] || item.hobbies?.[2]}
                            </td>
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

        </>

);
}

export default StudentForm
{/* <Table /> */}