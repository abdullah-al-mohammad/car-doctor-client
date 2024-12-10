import {useState, useEffect} from 'react'
import { data } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-4'>
            <div className='space-y-5 text-center'>
                <h3 className="font-bold text-orange-700">Service</h3>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;