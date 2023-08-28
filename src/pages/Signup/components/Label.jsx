// Label component
export default ({ children, name, _class }) => {
    const styles = [
        "text-xs", "font-bold", "mb-1",
        _class
    ]
    return (
        <label class={`${styles.join(' ')}`} for={name}>
            {children}
        </label>
    )
}