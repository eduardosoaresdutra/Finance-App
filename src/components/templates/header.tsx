import Button from "../shared/button";
import styles from "../../styles/components/header.module.scss"

interface headerProps {

}

export default function Header(props: headerProps) {
    return (
        <header className={styles.container}>
            <h1>Finance App</h1>
            <Button onClick={() => 0}>
                Teste
            </Button>
        </header>
    )
}