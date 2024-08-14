'use client'
import { useEffect, useState } from 'react';
import Button from '../Components/button/button';
import styles from './page.module.css'
import axios from 'axios';
import { headers } from 'next/headers';
let str: number

const AddProduct = () => {
    const [data, setData] = useState({name: '', originalPrice: str, imageUrl: '', description: ''})


    const handleChange = (e: any) => {
        const {name, value} = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }


    const newProduct = async (e: any) => {
        e.preventDefault()
        try {
            const request = await axios.post('http://localhost:3001/products', data);
            console.log('response:', request.data)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2 className={styles.text}>Add New Fruit</h2>

                <div className={styles.inputsContainer}>

                    <form onSubmit={newProduct}>
                        <div className={styles.inputContainer}>
                            <span className={styles.inputName}>Name</span>
                            <input value={data.name} onChange={handleChange} name='name' className={styles.input} type='text'></input>
                        </div>

                        <div className={styles.priceCont}>
                            <div className={styles.inputContainer}>
                                <span className={styles.inputName}>Price</span>

                                <div className={styles.price}>
                                    <input value={data.originalPrice} onChange={handleChange} name='originalPrice' className={styles.priceTxt} type='number' placeholder='0'></input>
                                    <span className={styles.priceTxt}>$</span>
                                </div>
                            </div>

                            <div className={styles.inputContainer}>
                                <span className={styles.inputName}>Sale</span>

                                <div className={styles.sale}>
                                    <input className={styles.saleTxt} type='number' value='0'></input>
                                    <span className={styles.priceTxt}>%</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <span className={styles.inputName}>Image Url</span>
                            <input onChange={handleChange} value={data.imageUrl} name='imageUrl' className={styles.input} type='url'></input>
                        </div>

                        <div className={styles.inputContainer}>
                            <span className={styles.inputName}>Description</span>
                            <input onChange={handleChange} value={data.description} name='description' className={styles.description} type='text'></input>
                        </div>

                        <button className={styles.button} type='submit'>Add Fruit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;