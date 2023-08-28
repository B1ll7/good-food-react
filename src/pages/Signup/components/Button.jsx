// Button component
export default ({ children, _class }) => {
    const styles = [
        "bg-gray_c4", "text-white", "rounded-lg",
        "p-2", "shadow-lg", "hover:bg-gray_c5",
        "active:scale-105", "transistion-transform",
        _class
    ]
    return (
        <button class={`${styles.join(' ')}`}>
            { children }
        </button>
    )
}