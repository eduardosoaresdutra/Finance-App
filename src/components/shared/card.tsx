import styles from '../../styles/components/card.module.scss'

interface cardProps {
    title?: string;
    children?: React.ReactNode
}

export default function Card(props: cardProps) {
    return (
        <div className={styles.card}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}