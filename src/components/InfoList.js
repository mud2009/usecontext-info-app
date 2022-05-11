import React, { useState, useEffect } from 'react'
import Info from './Info'
import { db } from '../firebase';

export default function InfoList() {
  const [myData, setData] = useState([])

  const ref = db.collection("info")

  function getInfo() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  }

  useEffect(() => {
    getInfo();
  }, [])
  
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