// TextBold component
import Text from "./Text"

export default ({ children, _class }) => {
    const styles = [
        "font-bold", _class
    ]
    return (
        <Text _class={`${styles.join(' ')}`}>
            { children }
        </Text>
    )
}