'use client'
import Link from 'next/link';
import Button from '../button/button';
import styles from './header.module.css'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { search } from '@/app/recoilStates/recoil.';

const Header = () => {
    const [searchData, setSearchData] = useRecoilState(search)

    const searchReq = (e: any) => {
        setSearchData(e)
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.mainTxt}>Frutify</h1>

            <div className={styles.container}>
                <Link href={'/addProduct'}>
                    <Button text='+ New Product' />
                </Link>

                <Link href={'/'}>
                    <Button text='Shop' />
                </Link>

                <input onChange={(e) => searchReq(e.target.value)} type='text' placeholder='Search' className={styles.search}></input>
            </div>
        </div>
    );
}

export default Header;