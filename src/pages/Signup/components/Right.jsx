// Container Right component
export default ({ children }) => {
    const styles = [
        "flex-1", "hidden", "lg:block"
    ]
    return (
        <div class={`${styles.join(' ')}`}>
            { children }
        </div>
    )
}