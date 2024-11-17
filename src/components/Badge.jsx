export default function Badge({ children, firstColor, secondColor, edges }) {


    const styles = {
        backgroundColor: secondColor,
        color: firstColor,
        borderRadius: edges === "pill" ? "8px" : "none"
    }


    return (
        <div
            style={styles}
            className={`badge`}>
            {children}
        </div>
    )
}