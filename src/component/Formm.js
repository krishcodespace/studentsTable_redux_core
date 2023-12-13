import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { deleteData, setStudentData, updateData } from '../redux/action/action';
import Table from '../helper/Table';
import Edit from "../assets/edit.png";
import Remove from "../assets/remove.png";


function Formm() {

    const data = useSelector((state)=> state.studentReducer.studentData);
    // console.log('data', data)
    const final = useSelector((state)=> state.studentReducer.finalD);
    // console.log('final', final)
      // State variables for form inputs

 const [value, setvalue] = useState({
    name:"",    
    address:"",
    gender:"",
    hobbies:[],
    dob:"",
 })

  console.log('value', value)






  // Handle checkbox change
 

  // Handle form submission
  const handleSubmit = (e) => {

console.log('e', e)
    
 

  
  
      
      dispatch(setStudentData(formData))
    // Log form values
        console.log('formData', formData)

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
    const index = editindex
  dispatch(updateData(index,editdata))


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
             type="text"
             name='name' value="name"
             onChange={handleChange(e)}
              />
          </label>
          <br />
    
          {/* Address Field */}
          <label>
            Address:
            <input type="text" 
            name='address' value="address"   onChange={handleChange(e)}
 /> 
          </label>
          <br />
    
          {/* Gender Field */}
          <label>
            Gender:
            <label className='mx-3'>
              <input
                type="radio"
                value="male"
                name='male'
                // checked={gender === 'male' }
                checked={gender === 'male'}

                // onChange={() => setGender('male')}
             onChange={handleChange(e)}

              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                name='female'
                checked={gender === 'female'}
              
                // onChange={() => setGender('female')}
             onChange={handleChange(e)}


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
                value="reading"
                name='reading'
                checked={hobbies.includes('reading')}
              
                // onChange={handleCheckboxChange}
                onChange={handleChange(e)}

              />
              Reading
            </label>
            <label>
              <input  
              className='mx-1'
                type="checkbox"
                value="traveling"
                name='traveling'
                checked={hobbies.includes('traveling')}
             
             onChange={handleChange(e)}

              />
              Traveling
            </label>
            <input
             className='mx-1'
                type="checkbox"
                value="chess"
                name='chess'
                checked={hobbies.includes('chess')}
             
             onChange={handleChange(e)}

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
            name="dob"
            value="dob"
            // onChange={(e)=> setDob(e.target.value)}
            onChange={handleChange(e)}

            />
         
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

export default Formm