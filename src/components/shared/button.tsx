import styles from "../../styles/components/button.module.scss";

interface ButtonProps {
    onClick: () => void
    children?: React.ReactNode
}

export default function Button(props: ButtonProps) {
    return (
        <button className={styles.buttonComponent} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
