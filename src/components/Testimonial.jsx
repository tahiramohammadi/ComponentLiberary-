
export default function Testimonial({ opnion, job, name, img, backColor, textColor }) {
    return (
        <div
            className="testimonial"
            style={{
                backgroundColor: backColor,
                color: textColor
            }}>
            <div className="profile-box">
                <img src={img} alt="Profile Picture" />
            </div>
            <div className="testimonial-text">
                <div className="white-box"></div>
                <span className="qoute-icon">
                    <i className="fa-solid fa-quote-left"></i>
                </span>
                <p className="text">{opnion}</p>
                <p className="name">{name}</p>
                <p className="job">{job}</p>
            </div>
        </div>
    )
}