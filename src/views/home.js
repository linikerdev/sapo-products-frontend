import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { allProducts } from "../services/product_service";
import TableList from '../components/product/table'
import { useParams } from "react-router";

const Home = () => {
    const { filter = "" } = useParams()
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const getAllProducts = useCallback(async () => {
        try {
            setLoading(true)
            const res = await allProducts(filter);
            setProducts(res.data)
            setLoading(false)
        } catch (error) {
            console.log('####', error)
            setError(true)
        }
    }, [filter]);


    useEffect(() => {
        getAllProducts()
    }, [getAllProducts, filter])

    return (
        <Content>
            {loading ? (<div>Carregando...</div>) : <TableList list={products} />}
        </Content>
    )
}
export default Home;

const Content = styled.div`
    display:flex;
    justify-content:center;
    
`
