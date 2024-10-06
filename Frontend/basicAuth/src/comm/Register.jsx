import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        firstName: "", lastName: "", Email: "", password: "", phone: "", address: ""
    });
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }
    
    const handlesubmit = async (e) => {
    
        e.preventDefault();
        try {
            const url = `${import.meta.env.VITE_REACTAPP_BACKEND_BASEURL}/api/auth/signup`;
            const { data: res } = await axios.post(url, data);
           
            navigate("/login");
            console.log(res.message)

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className="form_container p-5 rounded bg-white">
                <Form>
                    <h3 className='mb-4 text-center'>Register</h3>
                    <Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control className='mb-3' type='firstName' name='firstName' onChange={handleChange} placeholder="First name" value={data.firstName} />
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control className='mb-3' placeholder="Last name" type='lastName' name='lastName' onChange={handleChange} value={data.lastName} />
                        </Col>
                    </Row>
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

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" type='name' name='address' onChange={handleChange} value={data.address} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type='number' placeholder="enter your phone number" name='phone' onChange={handleChange} value={data.phone} />
                    </Form.Group>

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

export default Register
