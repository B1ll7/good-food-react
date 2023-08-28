// Text component
export default ({ children, _class }) => {
    const styles=[
        "text-xs", "font-poppins", _class
    ]
    return (
        <p class={`${styles.join(' ')}`}>
            { children }
        </p>
    )
}