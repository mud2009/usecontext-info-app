import React, { useState, useEffect } from 'react'
import Info from './Info'
import { db } from '../firebase';

export default function InfoList() {
  const [myData, setData] = useState([])

  const fetchData = async () => {
    const response = db.collection('info');
    const data = await response.get();
    data.docs.forEach(item => {
      setData([...myData, item.data()])
    })
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  Object.entries(myData).forEach(x => {
    console.log("mydate " + x.name)
    console.log("mData "+ x.number)
  })
  return (
    <div>
      {
        myData.map(x =>{
          return(
            <Info name={x.name} number={x.number} key={x.number}/>
          )
        })
      }
    </div>
  );
}