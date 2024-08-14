import { atom } from "recoil";

export const categoryState = atom({
    key: 'category',
    default: ''
})

export const sortState = atom({
    key: 'sort',
    default: 'DESC'
})

export const productState = atom({
    key: 'product',
    default: 0
})

export const updateState = atom({
    key: 'update',
    default: 0
})

export const search = atom({
    key: 'search',
    default: ''
})