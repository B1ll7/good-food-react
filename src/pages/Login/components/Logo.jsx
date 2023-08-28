// Logo component
export default ({ _class }) => {
    const styles = [
        "absolute", "left-8", "top-8",
        _class
    ]
    return (
        <img
            class={`${styles.join(' ')}`}
            src="/static/img/logo.svg"
            alt="logo"
        />
    )
}