import React, {useState, useEffect} from 'react';
import api from '../service/API';
import { Produtos } from './style'


function Products() {
  const [data, setData] = useState([]);

  useEffect(() =>{
    async function fetchData(){
      const response = await api.get("/produtos");
      setData(response.data)
    }
    fetchData();
  }, []);
  
  return (
    <Produtos>
      {data.map(datas =>
      (  
        <div key={datas.id_produto}>
          <p>{datas.nome}</p>
          <p>R${datas.price}</p>
        </div>
      ))
      }
    </Produtos>
  );
}

export default Products;
