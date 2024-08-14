import styles from './select.module.css'

export type Value = {
    value: string;
    text: string;
}

type Props = {
    onChange?: any;
    values: Value[]
}

const Select = (props: Props) => {
    return (
        <select className={styles.select} onChange={props.onChange}>
            {props.values.map((item: any) => <option value={item.value}>{item.text}</option>)}
        </select>
    );
}

export default Select;