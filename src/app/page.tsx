'use client'
import Image from "next/image";
import styles from "./page.module.css";
import FilterSelect from "./Components/filter/FilterSelect/filterSelect";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./Components/filter/filter";
import { useRecoilState } from "recoil";
import { categoryState, search, sortState } from "./recoilStates/recoil.";
import FruitCard, { Fruit } from "./Components/FruitCard/FruitCard";

export default function Home() {
  const [sort, setSort] = useRecoilState(sortState)
  const [category, setCategory] = useRecoilState(categoryState)
  const [products, setProduct] = useState([])
  const [searchData, setSearchData] = useRecoilState(search)

  useEffect(() => {
    let url = '';
  
    if (searchData.length == 0) {
      url = category == '' ? `http://localhost:3001/products/sort=${sort}` : `http://localhost:3001/category/${category}`
    } else {
      url = `http://localhost:3001/search/${searchData}`
    }

    axios.get(url)
      .then(result => {

        if (category == '') {
          setProduct(result.data)
        } else setProduct(result.data.products)
      })
  }, [sort, category, searchData])

  return (
    <div className={styles.main}>
      <div className={styles.bodyWrapper}>
        <FilterSelect />

        <div className={styles.wrapper}>
          <Filter />

          <div className={styles.section}>
            <div className={styles.fruitWrapper}>

              {products && products.length > 0 && products.map((fruit: Fruit, idx) => (
                <FruitCard fruit={fruit} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
