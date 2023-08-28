// FormLine component
export default ({ children, _class }) => {
    const styles = [
        "p1", "mb-4", _class
    ]
    return (
        <div class={`formLine ${styles.join(' ')}`}>
            { children }
        </div>
    )
}