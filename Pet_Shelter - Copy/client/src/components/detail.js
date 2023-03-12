import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import DeleteButton from './deleteButton';

const Detail = (props) => {
    const [pet,setPet] = useState("");
    const {id} = useParams();
    const [pageName,setPageName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/shelters/" + id)
            .then( (res) => {setPet(res.data);setPageName(res.data.petName)})
            .catch( (err) => console.log(err) );
    },[]);

    const removeFromDom = petID => {
        setPet(pet.filter(pe => pe._id != petID));
        navigate('/');
    }

    return (
        <div> 
            <Link to={`/`} style={{position: 'absolute',right: '10px'}}>back to Home</Link>
            <h1 style={{textAlign:'left'}}>Pet Shelter</h1>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <h4 style={{textAlign: 'left', textTransform: 'capitalize'}}>Details about: {pageName}</h4>
                <DeleteButton petId={pet._id} successCallback={()=>removeFromDom(pet._id)} />
            </div>
            <table style={{marginLeft:'auto',marginRight:'auto',border: '2px solid #b4b1ae', padding: '30px',borderCollapse: 'collapse', width: 'max-content'}}>
                <tbody>
                    <tr>
                        <td> <h3 style={{margin: '10px'}}>Pet Type:</h3> </td>
                        <td> <p style={{margin: '10px'}}>{pet.petType}</p> </td>
                    </tr>
                    <tr>
                        <td> <h3 style={{margin: '10px'}}>Description:</h3> </td>
                        <td> <p style={{margin: '10px'}}>{pet.description}</p> </td>
                    </tr>
                    <tr>
                        <td> <h3 style={{margin: '10px'}}>Skills:</h3> </td>
                        <td>
                            <ol style={{margin: '10px'}}>
                                <li>{pet.skills1}</li>
                                <li>{pet.skills2}</li>
                                <li>{pet.skills3}</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    );
}

export default Detail;