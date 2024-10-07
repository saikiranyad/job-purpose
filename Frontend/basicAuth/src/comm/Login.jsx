import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        Email: "", password: ""
    });
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    
    const handlesubmit = async (e) => {
    
        e.preventDefault();
        try {
            const url = `https://job-purpose-backend.onrender.com/api/auth/logged`;
            const { data: res } = await axios.post(url, data);
           
            navigate("/home",{state:data});
            console.log(res.message)


        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className="form_container p-5 rounded bg-white">
                <Form>
                    <h3 className='mb-4 text-center'>Login</h3>
                   
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name='Email' onChange={handleChange} value={data.Email} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} value={data.password} />
                        </Form.Group>
                    </Row>

                    

                    <Button variant="primary" type="submit" onClick={handlesubmit}>
                        Submit
                    </Button>
                    <p className="text-end mt-2">

                    </p>
                </Form>


            </div>

        </div>
    )
}

export default Login
