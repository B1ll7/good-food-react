// Link component
export default ({ children, href, _class }) => {
    const styles = [
        "text-xs", "font-bold", "text-yellow_c1",
        "underline", "underline-offset-3", "visited:text-yellow_c2", 
        _class
    ]
    return (
        <a class={`${styles.join(' ')}`} href={ href || "#" }>
            { children }
        </a>
    )
}