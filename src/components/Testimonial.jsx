import './Testimonial.css';

function Testimonial(props){
    return(
        <div className="Testimonial_container">
            <div className='Testimonial_user'>
                <img  className="Testimonial_photo" src={props.photo} alt="Photo_user" />
                <h2 className="Testimonial_name">{props.name} </h2>
            </div>
            <div className="Testimonial_content">
                <p className='Testimonial_calification'>{props.calification}</p>
                <p className='Testimonial_text'>{props.text}</p>
            </div>
        </div>
    );
}
export default Testimonial;