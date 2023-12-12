import { DELETE, SET_DATA, UPDATE } from "../action/actionTypes";

const initialState = {
  studentData: [
    {
      name: "krish",
      address: "leo colony south morang, melbourne, Austrlia",
      gender: "male",
      hobbies: ["reading"],
      dob: "2002-09-02",
    },
    {
      name: "parth",
      address: "15, will church empireear, adelide,Austrlia ",
      gender: "male",
      hobbies: ["traveling"],
      dob: "2000-11-04",
    },
    {
      name: "rutvik",
      address: "157, robinson  empireear, adelide,Austrlia ",
      gender: "male",
      hobbies: ["reading"],
      dob: "1984-06-23",
    },
    {
      name: "harmsih",
      address: "10, roscoe katargam , adelide,Austrlia ",
      gender: "male",
      hobbies: ["chess"],
      dob: "2000-07-09",
    },
    {
      name: "jaymi",
      address: "10 madhav partk society, junagadh  ",
      gender: "female",
      hobbies: ["chess"],
      dob: "2004-09-22",
    },
    {
      name: "sger",
      address: "25, harivant society, vagha chokdi vadodra ",
      gender: "male",
      hobbies: ["chess"],
      dob: "1997-08-12",
    },
  ],
  finalD:[
      {
      name: "krish",
      address: "leo colony south morang, melbourne, Austrlia",
      gender: "male",
      hobbies: ["reading"],
      dob: "2002-09-02",
    },
    {
      name: "parth",
      address: "15, will church empireear, adelide,Austrlia ",
      gender: "male",
      hobbies: ["traveling"],
      dob: "2000-11-04",
    },
    {
      name: "rutvik",
      address: "157, robinson  empireear, adelide,Austrlia ",
      gender: "male",
      hobbies: ["reading"],
      dob: "1984-06-23",
    },
    {
      name: "harmsih",
      address: "10, roscoe katargam , adelide,Austrlia ",
      gender: "male",
      hobbies: ["chess"],
      dob: "2000-07-09",
    },
    {
      name: "jaymi",
      address: "10 madhav partk society, junagadh  ",
      gender: "female",
      hobbies: ["chess"],
      dob: "2004-09-22",
    },
    {
      name: "sger",
      address: "25, harivant society, vagha chokdi vadodra ",
      gender: "male",
      hobbies: ["chess"],
      dob: "1997-08-12",
    },
  ]
};

const studentReducer = (state = initialState, action) => {
  console.log(
    "🚀 ~ file: studentReducer.js:11 ~ studentReducer ~ action:",
    action
  );
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        studentData: [...state.studentData, action.payload],
        finalD: [...state.studentData, action.payload],
        
      };
      
    case DELETE:
      return {
      ...state,
        studentData:state.studentData.filter((_, i) => i !== action.payload),
        finalD:state.studentData.filter((_, i) => i !== action.payload),
      };
      case UPDATE:
        console.log('action.payload', action.payload)
        return {
            ...state,
            finalD:state.studentData.map((student,index) =>
              student.index === action.payload.index
                ? {
                    ...student,
                    ...action.payload.editdata,
                  }
                : student
            ),
          };

    //   const { index, editdata } = action.payload;
    //   console.log('updateData', editdata)
    //   const updatedStudentData = [...state.studentData];
    //   updatedStudentData[index] = { ...updatedStudentData[index], ...editdata };
   
    //   return {
    //     ...state,
    //     studentData: updatedStudentData,
    //   };
    default:
      return state;
  }
};

export default studentReducer;
