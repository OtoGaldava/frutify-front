import { useRecoilState } from 'recoil';
import Select from '../../select/select';
import styles from './filterSelect.module.css'
import { sortState } from '@/app/recoilStates/recoil.';

const FilterSelect = () => {
    const [sort, setSort] = useRecoilState(sortState)
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <span className={styles.backgroundTxt}>Frutify</span>
            </div>

            <Select values={[{text: 'Price high to low', value: 'DESC'}, {text: 'Price low to high', value: 'ASC'}]} 
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setSort(e.target.value)
                    }}  
            />
        </div>
    );
}

export default FilterSelect;