import {Header} from "./header/Header";
import {Container} from "./container/Container";
import styles from './Layout.module.css';

export const Layout = ({
                           children,
                       }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <Container>{children}</Container>
        </div>
    );
};