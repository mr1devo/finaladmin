import React, { useState } from 'react';
import './Places.css'; // Import the CSS file
import Hotel from './Hotel';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField, Typography } from '@mui/material';

const Places = () => {
  var [inputs,setInputs]=useState({"placename":'',"tsee":'',"location":''})
  var [selectedimage,setSelectedimage] = useState(null);
   
  const navigate = useNavigate();


  const inputHandler = (e) => {
    const {name,value}=e.target
    setInputs((inputs) => ({...inputs,[name]:value}))
    console.log(inputs)
  }

  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.placephoto=file;
}

const savedata =()=>{
  const formdata = new FormData();
  formdata.append('placename',inputs.placename);
  formdata.append('tsee',inputs.tsee);
  formdata.append('placephoto',selectedimage);
  formdata.append('location',inputs.location);

  fetch('http://localhost:4005/Places',
  {method:'post',body:formdata,})
  .then((response)=>response.json())
  .then((data)=>{
      alert("record saved")
  })
  .catch((err)=>{
     console.log("error")
  })
  navigate('/PlaceView')
}


  const addHandler =() =>{
    console.log("Clicked")
    console.log(inputs)
    axios.post("http://localhost:4005/new",inputs)
    .then((response) =>{
      alert("record saved")
    })
    .catch(err=>console.log(err))
  }
//navigate('/PlaceView');
  // const [placename, setPlaceName] = useState('');
  // const [thingsToSee, setThingsToSee] = useState('');
   const [photos, setPhotos] = useState([]);
   const [location, setLocation] = useState('');
  // const [showHotel, setShowHotel] = useState(false);


  return (
    <div className='p'>
      <Typography variant='h5'>Add 
Place</Typography><br></br>
<TextField id="outlined-basic" label="Places"
variant="outlined"
name="placename" value={inputs.placename}
onChange={inputHandler} />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Things to see"
variant="outlined"
name="tsee" value={inputs.tsee}
onChange={inputHandler} />
<br></br>
<br></br>
{/* <TextField id="outlined-basic" label="photos"
variant="outlined"
name="photos" value={inputs.photos}
onChange={inputHandler} /> */}
<input
            type="file"
            multiple
            onChange={handleimage}
            
          />
<br></br>
<br></br>
<TextField id="outlined-basic" label="Location"
variant="outlined" name="Location" value={inputs.Location}
onChange={inputHandler} />
<br></br>
<br></br>
<Button variant='contained' color='success'
onClick={addHandler} >NEXT</Button>
 </div>
  );
};


export default Places







      {/* <form onSubmit={handleNext} className='p'>
        <label>
          Place Name:
          <input
            type="text"
            value={inputs.placename}
            name='placename'
           onChange={(e) => setPlaceName(e.target.value)}
          />
        </label>
        <br />

        <label>
          Things to See:
          <textarea
            value={inputs.tsee}
            name='tsee'
            onChange={(e) => setThingsToSee(e.target.value)}
          />
        </label>
        <br />

        <label>
          Photos:
          <input
            type="file"
            multiple
            onChange={(e) => setPhotos([...e.target.files])
            }
          />
        </label>
        <br />

        <label>
          Location from Google Maps:
          <input
            type="text"
            value={inputs.location}
            name='location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br />

        <button type="submit" onClick={addHandler}>Next</button>
      </form>
{/* 
          {showHotel && <Hotel />} Conditionally render the Hotel component */} 
   