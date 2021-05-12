import { useState, useEffect} from 'react';
import axios from 'axios';
import local from '../assets/location.svg'
import message from '../assets/email.svg'
import phone from '../assets/phone.svg'
import './Cards.css'



const Cards = () => {
    const [userCards, setUserCards] = useState([]);

    const getData = () => {
        axios.get('https://randomuser.me/api/').then((response)=>{
            setUserCards(response.data.results);
            console.log(response.data.results);
        })
    }
    useEffect(() => {
        getData()
    }, [])

    return(
        <div className='Cards'>
            {userCards?.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.picture.thumbnail} alt={item.name.fisrt} className="image"/>
                    <p className="fullName info">{item.name.title} {item.name.first} {item.name.last}</p>
                    <img src={message} alt='emailIcon' className='icon'/>
                    <p className='info'>{item.email}</p>
                    <img src={phone} alt='phoneIcon' className='icon'/>
                    <p className='info'>{item.cell}</p>
                    <img src={local} alt='locationIcon' className='icon'/>
                    <p className='info'>{item.location.state} - {item.location.country}</p>
                    <div className="footer">
                        <p>Age: {item.dob.age}</p>
                        <p>Register Date: {item.registered.date}</p>
                    </div>
                </div>
            ))}
            <button onClick={getData} className="button">Random User</button>
        </div>
    )
}

export default Cards;