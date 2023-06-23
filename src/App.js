import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { userAdd, userUpdate , userDelete} from "./slice"

function App() {
  const dispatch = useDispatch()
  const [data, setData] = useState()
  const [updateValue, setUpdateValue] = useState()
  const [deleteValue,setDeleteValue]=useState()
  // const [updateData,setUpdateData]=useState()
  const user = useSelector(state => state.users)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
    setUpdateValue({
      ...updateValue,
      [name]: value
    })
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(user?.length)
    data.id = user?.length+1
    // console.log(data)
    dispatch(userAdd(data))
    // console.log(data)
  }

  const editClick = (e, v) => {
    e.preventDefault();
    document.getElementById("editname").value = v.name
    setUpdateValue(v)
    console.log(v)
    // setUpdateData(v)
  }

  const updateClick = (e) => {
    e.preventDefault();
    dispatch(userUpdate(updateValue))
    // console.log(updateData)
  }

  const deleteClick = (e,v) => {
    setDeleteValue(v)
    dispatch(userDelete(v))
    e.preventDefault();
  }
  return (
    <div className="App">

      <form >
        <input type="text" name="name" className='border' placeholder='Name' onChange={(e) => handleChange(e)} />
        <button onClick={(e) => handleClick(e)}> Submit</button>
      </form>

      <form >
        <input type="text" name="name" id="editname" className='border ' placeholder='update Name' onChange={(e) => handleChange(e)} />
        <button onClick={(e) => updateClick(e)}> update</button>
      </form>
      {user?.map((v, i) => {
        return (
          <div keys={i} className=' flex justify-center py-2'>
            <div>
              {v.name}
            </div>
            <div>
              <button onClick={(e) => editClick(e, v)} className='border px-4'>Edit</button>
            </div>

            <div>
              <button onClick={(e) => deleteClick(e, v)} className='border px-4'>Delete</button>
            </div>

          </div>
        )
      })}
      {/* Hello */}
    </div>
  );
}

export default App;
