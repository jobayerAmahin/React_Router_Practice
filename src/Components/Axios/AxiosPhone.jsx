import axios from "axios";
import { useEffect, useState } from "react";

const AxiosPhone = () => {
    const [newPhone,setNewPhone]=useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data=>{
                const phoneArray=data.data.data;
                setNewPhone(phoneArray)
            })
    })
    console.log(newPhone)
    return (
        <div>
            
        </div>
    );
};

export default AxiosPhone;