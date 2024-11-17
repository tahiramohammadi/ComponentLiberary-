
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
export default function Card({ icon, title, text, firstColor, secondColor, textColor }) {

    const styles = {
        backgroundColor: secondColor,
        color: firstColor
    }

    return (
        <div className={`card`}
            style={{
                backgroundColor: secondColor || "#fff",
                color: textColor
            }}>
            <div className="icon"                 style={{
                    backgroundColor: firstColor
                }}>
                   <FontAwesomeIcon icon={icon} style={{fontSize: '24px', color: 'black' }} />
             
            </div>

            <h3>{title}</h3>
            <p>{text} </p>
        </div>
    )
}