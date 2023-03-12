import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './deleteButton';

const AuthorList = (props) => {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/shelters")
            .then((res) => { console.log(res.data); setPets(res.data) } )
            .catch((err) => console.log(err))
    },[])

    const removeFromDom = petID => {
        setPets(pets.filter(pets => pets._id != petID))
    }

    const btnclass = {
        margin: '10px',
        textAlign: 'center',
        color: '#000000',
        backgroundColor: '#ffffff',
        padding: '10px',
        border: '2px solid #008CBA',
        borderRadius: '5px',
        fontSize: '16px',
        boxShadow: '5px',
    }

    return (
        <div>
            <Link to={`/api/shelters/new`} style={{position: 'absolute',right: '10px'}}>Add a pet to the shelter</Link>
            <h1 style={{textAlign:'left'}}>Pet Shelter</h1>
            <h3 style={{textAlign:'left'}}>These pets are looking for a good home</h3>
            <table style={{marginLeft:'auto',marginRight:'auto',border: '2px solid #b4b1ae', padding: '30px',borderCollapse: 'collapse', width:'90%'}}>
                <thead>
                    <tr style={{border: '2px solid #b4b1ae'}}>
                        <th scope="col" style={{border: '2px solid #b4b1ae'}}>Pet</th>
                        <th scope="col" style={{border: '2px solid #b4b1ae'}}>Type</th>
                        <th scope="col" style={{border: '2px solid #b4b1ae'}}>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet,index) => (
                        <tr key={index}>
                            <td style={{textTransform: 'capitalize',border: '2px solid #b4b1ae'}}>{pet.petName}</td>
                            <td style={{textTransform: 'capitalize',border: '2px solid #b4b1ae'}}>{pet.petType}</td>
                            <td style={{border: '2px solid #b4b1ae'}}>
                            <Link to={`/api/shelters/${pet._id}`}><button style={btnclass}>Details</button></Link> 
                                <Link to={`/api/shelters/edit/${pet._id}`}><button style={btnclass}>Edit</button></Link>
                                <DeleteButton petId={pet._id} successCallback={()=>removeFromDom(pet._id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;