import type { NextPage } from "next";
import Card from "../components/shared/card";
import Header from "../components/templates/header";
import styles from '../styles/Dashboard.module.scss'

const Dashboard: NextPage = () => {
    return (
        <div className={styles.container}>
            <Header>
            </Header>

            <Card size="large">
                
            </Card>
        </div>
    )
}

export default Dashboard