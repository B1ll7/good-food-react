// Space Arround component
export default ({ children }) => {
    const styles = [
        "flex", "justify-between"
    ]
    return (
        <div class={`${styles.join(' ')}`}>
            { children }
        </div>
    )
}