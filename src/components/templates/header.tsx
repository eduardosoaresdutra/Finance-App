import Link from "next/link";
import styles from "../../styles/components/header.module.scss"

interface headerProps {
    children?: React.ReactNode;
}

export default function Header(props: headerProps) {
    return (
        <header className={styles.container}>
            <h1>Finance App</h1>
            <div className={styles.listContainer}>
                {props.children}
                <Link href="/">Home</Link>
            </div>
        </header>
    )
}