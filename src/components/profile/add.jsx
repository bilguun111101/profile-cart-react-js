import './main.css';

const Add = (props) => {
    console.log(props.data)
    return(
        <div className='add-middle'>
            <div className='add-imformation'>
                <i className='fas fa-heart'></i>
                <div>{props}</div>
            </div>
            <div className='add-imformation'>
                <i className='fas fa-heart'></i>
                <div>Actor</div>
            </div>
            <div className='add-imformation'>
                <i className='fas fa-heart'></i>
                <div>Actor</div>
            </div>
            <div className='add-imformation'>
                <i className='fas fa-heart'></i>
                <div>Actor</div>
            </div>
            <div className='add-imformation'>
                <i className='fas fa-heart'></i>
                <div>Actor</div>
            </div>
            <div className='add-imformation'>
                <i className='fas fa-heart'></i>
                <div>Actor</div>
            </div>
            <div className='add-imformation'>
                <i className='fas fa-heart'></i>
                <div>Actor</div>
            </div>
            <div className='add-imformation'>
                <i className='fas fa-heart'></i>
                <div>Actor</div>
            </div>
        </div>
    )
}

export default Add;