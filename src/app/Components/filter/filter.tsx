'use client'
import Button from '../button/button';
import styles from './filter.module.css'
import axios from 'axios';
import { constSelector, useRecoilState } from 'recoil';
import { categoryState } from '@/app/recoilStates/recoil.';
import { useEffect, useState } from 'react';
import CustomCheckbox from '../CustomCheckbox/CustomChekbox';
import Select, { Value } from '../select/select';
import { it } from 'node:test';
import { Fruit } from '../FruitCard/FruitCard';

const Filter = () => {
    const [categories, setCategories] = useState<Value[]>([])
    const [category,setCategory] = useRecoilState(categoryState)

    useEffect(() => {
      axios.get(`http://localhost:3001/category`)
        .then((result: any) => {
          const data = result.data.map(((item: any) => {
            return {
              value: item.id,
              text: item.name
            }
          }
        ))
          setCategories([{value: '', text: "all"}, ...data])
        })
    }, [])

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.title}>Filter</div>

            <div className={styles.chart}>
                <span className={styles.label}>Category</span>
                <Select values={categories} onChange={(item: any) =>  setCategory(item.target.value)}/>
            </div>

            <div className={styles.chart}>
                <span className={styles.label}>Price</span>
                <div className={styles.inputWrapper}>
                    <input className={styles.input} type="number" placeholder="Min" />
                    <input className={styles.input} type="number" placeholder="Max" />
                </div>
            </div>

            <div className={styles.chart}>
                <span className={styles.label}>sale</span>
                <CustomCheckbox />
            </div>

            <div className={styles.button}>
                <Button text="Apply" />
            </div>
        </div>
    );
}

export default Filter;