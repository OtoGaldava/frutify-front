import React, { useState } from "react";
import styles from "./FruitCard.module.css";
import Link from "next/link";
import { useRecoilState, useResetRecoilState } from "recoil";
import { productState, updateState } from "@/app/recoilStates/recoil.";
import Image from "next/image";
import axios from "axios";

export interface Fruit {
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  originalPrice: number;
  remainingStock: number;
  category: any;
}

type Props = {
  fruit: Fruit;
};

const FruitCard = (props: Props) => {
  const [product, setProduct] = useRecoilState(productState)
  const [update, setUpdate] = useRecoilState(updateState)

  return (
    <div className={styles.fruitCard}>
      <div className={styles.imageWrapper}>

        <img src={props.fruit.imageUrl} />
        <div className={styles.iconsWrapper}>

          <Link href={'updateProduct'} onClick={() => setUpdate(props.fruit.id)}>
            <div className={styles.iconWrapper} >
              <Image src={'pen.svg'} alt={""} width={24} height={24}></Image>
            </div>
          </Link>

          <div className={styles.iconWrapper} onClick={() => axios.delete(`http://localhost:3001/products/${props.fruit.id}`)}>
            <Image src={'trash.svg'} alt={""} width={24} height={24}></Image>
          </div>

        </div>
      </div>

      <div className={styles.fruitDescription}>
        <div className={styles.fruitName}>
          <span className={styles.fruitname}>{props.fruit.name}</span>
        </div>

        <div>
          <span className={styles.fruitPrice}>{props.fruit.originalPrice} </span>
        </div>
      </div>

      <div onClick={() => setProduct(props.fruit.id)} className={styles.fruitBuyNow}>
        <Link href={`/ProductsPage`} className={styles.link}>
          <div className={styles.buyNowText}>Buy Now</div>
        </Link>
      </div>
    </div>
  );
};
export default FruitCard;
