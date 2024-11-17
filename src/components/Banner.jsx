import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faTriangleExclamation,  faCircleExclamation, faCircleInfo} from '@fortawesome/free-solid-svg-icons';

export default function Banner({ title, text, type, firstColor, secondColor }) {

 

    let icon;

    if (type === "error") {
      icon = <FontAwesomeIcon icon={faCircleExclamation} style={{ color: 'red' }} />;
    } else if (type === "warning") {
      icon = <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: 'orange' }} />;
    } else if (type === "info") {
      icon = <FontAwesomeIcon icon={faCircleInfo} style={{ color: 'blue' }} />;
    } else {
      icon = <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'green' }} />;
    }


    const styles = {
        backgroundColor: secondColor,
        color: firstColor
    }

    return (
        <div className={`banner`} style={styles}>
            <div className="icon-box">
                {icon}
            </div>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}