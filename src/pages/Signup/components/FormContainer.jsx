// FormContainer component
export default ({ children }) => {
    const styles = [
        "w-4/6", "md:w-2/5", "lg:w-3/5"
    ]
    return (
        <div class={`${styles.join(' ')}`}>
            { children }
        </div>
    )
}