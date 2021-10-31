import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddTravels = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/travels',data)
        .then(res => {
            if(res.data.insertedId){
                alert('Travels Added Successfully');
                reset();
            }
            
        })
    };
    return (
        <>
            <div className="container my-5">
              <div className="row mx-auto align-items-center">
                <div className="w-75 mx-auto border rounded shadow ">
                    <div className="text-wrap p-2 p-lg-3 text-center">
                            <div>
                                <h2 className="fs-2 ">Welcome to Add Travel</h2>
                                <p>Please fill the from with all info</p>
                                <div>
                                    <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                                        <input className="form-control m-3" placeholder="Enter travel name" type="text"  {...register("name")} />
                                        <input className="form-control m-3" placeholder="Enter the location" type="text"  {...register("location")} />
                                        <textarea className="form-control m-3" placeholder="Enter travel short description" {...register("short_des")} />
                                        <textarea className="form-control m-3" placeholder="Enter travel full description" {...register("full_des")} />
                                        <input className="form-control m-3" placeholder="Enter travel price"  type="number" {...register("Price")} />
                                        <input className="form-control m-3" placeholder="Enter travel image Url" type="text"  {...register("img")} />
                                        <input className="btn btn-outline-primary fw-bold" type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddTravels;