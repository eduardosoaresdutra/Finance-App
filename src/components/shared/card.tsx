import styles from '../../styles/components/card.module.scss'

interface cardProps {
    title?: string;
    size?: string;
    children?: React.ReactNode
}

export default function Card(props: cardProps) {
    
    return (
        <div className={`
                        ${styles.card}
                        ${props.size === 'small' ? styles.small : ''}
                        ${props.size === 'medium' ? styles.medium : ''}
                        ${props.size === 'large' ? styles.large : ''}
                        `}>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}