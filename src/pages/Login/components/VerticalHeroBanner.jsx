// VerticalHeroBanner component
export default ({ _class }) => {
    const styles = [
        "h-screen", "w-full", "object-cover",
        "border-l-2", "border-gray-100", _class
    ]
    return (
        <img
            class={`${styles.join(' ')}`}
            src="/static/img/pizza.png"
            alt="pizza-bg"
        />
    )
}