import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';

const ShelterForm = (props) => {
    const [petName,setPetName] = useState("");
    const [petType,setPetType] = useState("");
    const [description,setDescription] = useState("");
    const [skills1,setSkills1] = useState("");
    const [skills2,setSkills2] = useState("");
    const [skills3,setSkills3] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

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

    const handlePetName = (e) => {
        e.preventDefault();
        setPetName(e.target.value);
    }

    const handlePetType = (e) => {
        e.preventDefault();
        setPetType(e.target.value);
    }

    const handleDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    }

    const handleSkills1 = (e) => {
        e.preventDefault();
        setSkills1(e.target.value);
    }

    const handleSkills2 = (e) => {
        e.preventDefault();
        setSkills2(e.target.value);
    }

    const handleSkills3 = (e) => {
        e.preventDefault();
        setSkills3(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/shelters/new',{petName,petType,description,skills1,skills2,skills3})
            .then((res) => {console.log(res);navigate("/")})
            .catch((err)=> {console.log(err.response.data.err.errors);setErrors(err.response.data.err.errors)})
    }

    return (
        <div>
            <Link to={`/`} style={{position: 'absolute',right: '10px'}}>back to Home</Link>
            <h1 style={{textAlign:'left'}}>Pet Shelter</h1>
            <h4 style={{textAlign: 'left'}}>Know a pet needing a home?</h4>
            <form onSubmit={onSubmitHandler} style={{width:'90%', border: '2px solid #b4b1ae', padding: '30px'}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                    <div>
                        <label>Pet Name:
                            <input type="text" name="petName" value={petName} onChange={handlePetName} style={{marginLeft: '10px'}} />
                        </label>
                        {errors.petName ? <p>{errors.petName.message}</p> : null}
                        <p/>
                        <label>Pet Type:
                            <input type="text" name="petType" value={petType} onChange={handlePetType} style={{marginLeft: '10px'}} />
                        </label>
                        {errors.petType ? <p>{errors.petType.message}</p> : null}
                        <p/>
                        <label>Description:
                            <input type="text" name="description" value={description} onChange={handleDescription} style={{marginLeft: '10px'}} />
                        </label>
                        {errors.description ? <p>{errors.description.message}</p> : null}
                        <p/>
                    </div>
                    <div>
                        <label>Skill 1:
                            <input type="text" name="skills1" value={skills1} onChange={handleSkills1} style={{marginLeft: '10px'}} />
                        </label>
                        {errors.skills1 ? <p>{errors.skills1.message}</p> : null}
                        <p/>
                        <label>Skill 2:
                            <input type="text" name="skills2" value={skills2} onChange={handleSkills2} style={{marginLeft: '10px'}} />
                        </label>
                        {errors.skills2 ? <p>{errors.skills2.message}</p> : null}
                        <p/>
                        <label>Skill 3:
                            <input type="text" name="skills3" value={skills3} onChange={handleSkills3} style={{marginLeft: '10px'}} />
                        </label>
                        {errors.skills3 ? <p>{errors.skills3.message}</p> : null}
                        <p/>
                    </div>
                </div>
                <div>
                    <Link to={`/`} style={btnclass}>Cancel</Link>
                    <input type="submit" value='Add Pet' style={btnclass} />
                </div>
            </form>
        </div>
    );
}

export default ShelterForm;