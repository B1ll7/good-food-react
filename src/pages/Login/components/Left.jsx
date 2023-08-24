// Container Left component
export default ({ children }) => {
    const styles = [
        "flex-1", "flex", "justify-center",
        "items-center", "relative"
    ]
    return (
        <div class={`${styles.join(' ')}`}>
            { children }
        </div>
    )
}