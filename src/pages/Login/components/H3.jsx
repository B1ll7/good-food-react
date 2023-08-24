// H3 component
export default ({ children, _class }) => {
    const styles = [
        "text-4xl", "font-poppins", "font-bold",
        "mb-2", _class
    ]
    return (
        <h3 class={`${styles.join(' ')}`}>
            { children }
        </h3>
    )
}