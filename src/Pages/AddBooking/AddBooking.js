import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AddBooking = () => {
    const {user} = useAuth();

    const {bookingId} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [bookings, setBooking] = useState([]);
    
    useEffect(() => {
        fetch(`https://pure-wave-13733.herokuapp.com/travels/${bookingId}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    }, [bookingId]);

    const onSubmit = data => {
        console.log(data)
        axios.post('https://pure-wave-13733.herokuapp.com/booking', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Booking Added Successfully');
                reset();
            }
            
        })
    };

    return (
        <div className="container">
            <div className="text-wrap p-2 p-lg-3 text-center">
                <div>
                    <h2 className="fs-2 ">Welcome to Add Travel</h2>
                    <p>Please fill the from with all info</p>
                    
                    <div>
                        <h2>{bookings.name}</h2>
                        <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control m-3" placeholder="Enter travel name" type="text"  {...register("user_name")} defaultValue={user?.displayName }/>
                            <input className="form-control m-3" placeholder="Enter the location" type="text"  {...register("location")} defaultValue={bookings.location}/>
                            <textarea className="form-control m-3" placeholder="Enter the Address" type="text"  {...register("address", { required: true})} />
                            <input className="form-control m-3" placeholder="Enter the Phone number" type="datetime-local"  {...register("date")} />
                            <input className="form-control m-3" placeholder="Enter the Phone number" type="text"  {...register("email")} defaultValue={user?.email }/>
                            
                            <input className="btn btn-outline-primary fw-bold" type="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBooking;