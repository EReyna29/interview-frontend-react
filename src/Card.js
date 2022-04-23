import React, { useState } from 'react'
import styles from'./App.module.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function card({name}) {
    let url="";
    let mensaje1="",mensaje2="";

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow]= useState(false);

    
    
    if(name!==null && name!==""){
        if(name==="México")
        {
            url='../static/images/mexico.jpg'
            mensaje1="2019 - 14,3"
            mensaje2="2024 - 24,2"
        }
        else if(name==="Brasil")
        {
            url="/static/images/brasil.jpg"
            mensaje1="2019 - 17,2"
            mensaje2="2024 - 30,0"
        }
        else if(name==="Colombia")
        {
            url="/static/images/colombia.jpg"
            mensaje1="2019 - 4,0"
            mensaje2="2024 - 7,8"
        }
        else if(name==="Argentina")
        {
            url="/static/images/argentina.jpg"
            mensaje1="2019 - 4,0"
            mensaje2="2024 - 10,1"
        }
        else if(name==="Perú")
        {
            url="/static/images/peru.jpg"
            mensaje1="2019 - 2,1"
            mensaje2="2024 - 4,7"
        }
        else 
        {
            url="/static/images/resto.jpg"
            mensaje1="2019 - 8,4"
            mensaje2="2024 - 18,2"
        }
    }
    
  

  return (
    <>
    <Card className={styles.card} >
      <CardMedia className={styles.imagen} onClick={()=>{show? setShow(false) : setShow(true)}}
        component="img"
        src= {url}
        alt={name}
      />
      <CardContent className={styles.contenido} style={show?{display:"inline"}:{display:"none"}}>
        <Typography gutterBottom variant="subtitle2" component="div" >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {mensaje1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {mensaje2}
        </Typography>
      </CardContent>
      
    </Card>

    </>
  )
}

export default card