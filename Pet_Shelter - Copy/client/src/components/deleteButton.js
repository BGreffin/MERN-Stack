import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const DeleteButton = (props) => {
    const { petId, successCallback } = props;
    const navigate = useNavigate();

    const deletePet = e => {
        axios.delete('http://localhost:8000/api/shelters/' + petId)
            .then( (res) => successCallback())
            .catch( (err) => console.log(err.response))
    }

    const btnclass = {
        margin: '10px',
        textAlign: 'center',
        color: '#ff4032',
        backgroundColor: '#bcb5b6',
        padding: '10px',
        border: '2px solid #000000',
        borderRadius: '5px',
        fontSize: '16px',
        boxShadow: '5px',
    }

    return (
        <button onClick={deletePet} style={btnclass}>
            Delete
        </button>
    )
}
export default DeleteButton;
