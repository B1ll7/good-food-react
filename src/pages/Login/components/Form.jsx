// Form component
export default ({ children, action, _class }) => {
    const styles = [
        "flex", "flex-col", "my-4",
        "p-1", _class
    ]
    return (
        <form
            class={`${styles.join(' ')}`}
            action={ action || "" } >
            { children }
        </form>
    )
}