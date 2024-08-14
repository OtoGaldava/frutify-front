import { text } from 'stream/consumers';
import styles from './button.module.css'

type Props = {
    text: string;
    onClick?: any;
}

const Button = (props: Props) => {
    return (
        <div className={styles.button} onClick={props.onClick}>
            <span className={styles.text}>{props.text}</span>
        </div>
    );
}

export default Button