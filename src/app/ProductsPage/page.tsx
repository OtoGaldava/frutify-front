'use client'
import Image from 'next/image';
import styles from './ProductsPage.module.css'
import Button from '../Components/button/button';
import { useRecoilState } from 'recoil';
import { productState } from '../recoilStates/recoil.';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Fruit } from '../Components/FruitCard/FruitCard';

const ProductsPage = () => {
    const [productId, setProductId] = useRecoilState(productState)
    const [product, setProduct] = useState<Fruit>()

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${productId}`)
        .then((result) => {
            setProduct(result.data)
        })
    }, [productId])
    
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <img className={styles.img} src={product?.imageUrl}></img>
                </div> 

                <div className={styles.container}>
                    <div>
                        <h1 className={styles.text}>{product?.name}</h1>
                        <span className={styles.description}>{product?.description}</span>
                    </div>

                    <div className={styles.productCont}>
                        <span className={styles.price}>{product?.originalPrice}</span>
                        <span className={styles.cash}>$</span>
                    </div>

                    <div className={styles.button}>Buy Now</div>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;