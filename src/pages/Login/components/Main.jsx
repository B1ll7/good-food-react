// Main component
export default ({ children }) => {
    const styles = [
        "flex", "min-h-screen"
    ]
    return (
        <main class={`${styles.join(' ')}`}>
            { children }
        </main>
    )
}