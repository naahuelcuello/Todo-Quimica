  import React from 'react';
  import { useState, useEffect } from "react";
  import { getProductos, getProdByCat } from "../asynmock";
  import ItemList from './ItemList';
  import { useParams } from "react-router-dom";
  import { Flex } from '@chakra-ui/react';
  
  const ItemListContainer = () => {
      const [productos, setProductos] = useState([]);
  
      const { idCategoria } = useParams();
  
      useEffect(() => {
  
          const funcionProductos = idCategoria ? getProdByCat : getProductos;
  
          funcionProductos(idCategoria)
              .then(res => setProductos(res))
  
      }, [idCategoria])
  
      return (
          <>
              <ItemList productos={productos} />
          </>
      )
  }
  
  export default ItemListContainer