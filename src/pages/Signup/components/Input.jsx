// Input component
export default ({ name, type, placeholder, _class }) => {
    const styles = [
        "block", "w-full", "border-2",
        "border-gray_c2", "p-3", "rounded",
        "text-xs", _class
    ]
    return (
            <input 
                class={`${styles.join(' ')}`}
                name={name} type={type}
                placeholder={placeholder || ''}
            />
    )
}