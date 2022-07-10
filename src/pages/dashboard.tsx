import type { NextPage } from "next";
import Header from "../components/templates/header";
import styles from '../styles/Dashboard.module.scss'

const Dashboard: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header>
            </Header>

        </div>
    )
}

export default Dashboard