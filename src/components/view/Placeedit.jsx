
import React, { useState } from 'react'
import './student.css'
import axios from 'axios'
import { Typography } from '@mui/material/styles/createTypography'
import { Table, TableCell, TableHead, TableHeadClassKey, TableRow } from '@mui/material'
import Places from './Places'
import { useNavigate } from 'react-router-dom'

const Placeedit = (props) => {
    var [inputs,setInputs]=useState(props.data)
    console.log("method:",props.method)
    const navigate = useNavigate();

    const inputhandler =(e)=> {
        const {name,value}=e.target
        setInputs((inputs)=>({...inputs,[name]:value}))
       // console.log(inputs)
    }
    
    const addHandler =()=>{
      
        console.log("Clicked")
        if(props.method ==='put'){
          
            axios.put("http://localhost:4005/new",inputs)
            .then((response)=>{
                alert("Updated")
                navigate('/PlaceView');
               
              })
              .catch(err=>console.log(err))
        }
        if(props.method === 'put'){
            console.log("inside put")
            axios.put("http://localhost:4005/edit/"+inputs._id,inputs)
            .then(response=>{
                console.log("post data"+response.data)
                alert("success")
                window.location.reload(false);

            })
            .catch(err=>console.log(err))
        }
    }
    
   
    
    //update
    const updateValues = (value) =>{
        console.log("updated:",value)
        setSelected(value);
        setUpdate(true);
        }


var result=
        <div>
        <Typography variant='h5'>Place
        Details</Typography><br></br>
   
   <TableContainer component={Paper}>
   <Table sx={{ minWidth: 650 }} aria-label="simple table">
   <TableHead>
   <TableRow>
   <TableCell>Place Name</TableCell>
   <TableCell>Things to see</TableCell>
   <TableCell>Photo</TableCell>
   <TableCell>Location</TableCell>
   </TableRow>
   </TableHead>
   <TableBody>
   {Places.map((value,index)=>{
   return(
   <TableRow key={index}>
   <TableCell>{value.placename}</TableCell>
   <TableCell>{value.tsee}</TableCell>
   <TableCell>{value.photos}</TableCell>
   <TableCell>{value.Location}</TableCell>
   <TableCell><ModeEditIcon color='success' onClick={()=>updateValues(value)}/></TableCell>
   <TableCell><DeleteForeverIcon color='error' onClick={()=>deleteValues(value.id)}/></TableCell>
   </TableRow>
   )
   })}
   </TableBody>
   </Table>
   </TableContainer>
   </div>
    
   
    if(update){
        result=<Places data={selected} method='put'/>}
      return (result)
        
    }   

export default Placeedit