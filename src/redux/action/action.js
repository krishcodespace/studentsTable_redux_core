import { DELETE, SET_DATA, UPDATE } from "./actionTypes";


export const setStudentData=(data)=>{
  console.log('data', data);
  return{
    type:SET_DATA,
    payload:data,
  }
}

export const deleteData=(id)=>{
    console.log('id', id)
    return{
        type:DELETE,
        payload: id,
    }
}

export const updateData=(index,editdata)=>{
    console.log('data', index,editdata)
    return{
        type:UPDATE,
        payload:{index,editdata},
    }
}