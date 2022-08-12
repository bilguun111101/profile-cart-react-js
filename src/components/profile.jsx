import '../App.css'
import "https://kit.fontawesome.com/a076d05399.js";
import Add from './profile/add';
import { useState } from 'react';
// import customData from '../data.json'

const Profile = (props) => {
    let data = props.data;
    let [bool, setBool] = useState(false);
    const viewActive = () => setBool(!bool)
    return (
        <div className={bool ? "top-div top-div-height" : "top-div"}>
            <div className='header-pro'>
                <div className='name-pro'>{data.name}</div>
                <div className='image-pro'>
                    <img src={data.image} alt="" />
                </div>
            </div>
            <div className={bool ? "add-middle active" : "add-middle"}>
                <div className='add-imformation'>
                    <i className='fas fa-heart'></i>
                    <div>{data.job}</div>
                </div>
                <div className='add-imformation'>
                    <i className='fas fa-heart'></i>
                    <div>{data.type}</div>
                </div>
                <div className='add-imformation'>
                    <i className='fas fa-heart'></i>
                    <div>{data.age}</div>
                </div>
                <div className='add-imformation'>
                    <i className='fas fa-heart'></i>
                    <div>{data.wife}</div>
                </div>
                <div className='add-imformation'>
                    <i className='fas fa-heart'></i>
                    <div>{data.gender}</div>
                </div>
                <div className='add-imformation'>
                    <i className='fas fa-heart'></i>
                    <div>{data.salary}</div>
                </div>
                <div className='add-imformation'>
                    <i className='fas fa-heart'></i>
                    <div>{data.movies}</div>
                </div>
                <div className='add-imformation'>
                    <i className='fas fa-heart'></i>
                    <div>{data.Born}</div>
                </div>
            </div>
            <footer className='footer-view'>
                <button onClick={viewActive}>View more</button>
            </footer>
        </div>
    )
}

export default Profile;