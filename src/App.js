import React, { useState,useEffect} from 'react'

import styles from'./App.module.css';
import Card from './Card.js'


import Alert from '@mui/material/Alert';

import Stack from '@mui/material/Stack';

import Item from '@mui/material/ListItem';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line no-restricted-globals
let pantalla=screen.width;


function App() {
  const [countries] = useState(["México","Brasil","Perú","Colombia","Argentina","Resto de Latinoamérica"]);
  const [country, setCountry] = useState("");
  const [select, setSelect] = useState("");
  const [error,setError] = useState(false);
  const [ancho,setAncho] = useState(pantalla);

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    setAncho(screen.width)
    console.log(ancho);

  }, [ancho])
  

  const handleChange = (event) => {
    setSelect(event.target.value);

  };
  const handleClick = (event) => {
    setCountry(select);
    if(select==="")
      setError(true);
    else
    setError(false);

  };
  return (
    <div className={styles.main} >
      <div className={styles.nav} style={ancho<565?{height:"8.5rem", padding: "1rem 0"}:{height:"7rem", padding: "1.5rem 0"}}>
        <h1 className={styles.titulo} >
          E-commerce Latinoamericano
        </h1>
      </div>

      <div className={styles.contenedorGeneral} style={ancho<721?{flexDirection:"row"}:{flexDirection:"column"}}>
      {ancho<721?
       <Stack className={styles.stack}
       direction="column"
       alignItems="center"
       justifyContent="center"
       spacing={1}
      >
        {country!==""?
        countries.map((name)=>name===country?<Item sx={{margin:"auto"}}><Card name={name} /></Item>:<></>):
        countries.map((name)=><Item><Card name={name} /></Item>)
        }
      </Stack>:
      <Stack className={styles.stack}
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        {country!==""?
      countries.map((name)=>name===country?<Item sx={{margin:"auto"}}><Card name={name} /></Item>:<></>):
      countries.map((name)=><Item><Card name={name} /></Item>)
      }
      </Stack>
        }
      
    
      <div className={styles.contenedor}>
      <Alert variant="filled" severity="error" className={styles.alert} style={error?{}:{visibility:"hidden"}}>
      Error
      </Alert>
        <FormControl className={styles.formulario} sx={{ minWidth: 120 }} >
          <InputLabel id="demo-simple-select-error-label" sx={{color:"white"}} >País</InputLabel>
          <Select className={styles.select}
            labelId="demo-simple-select-error-label"
            id="demo-simple-select-error"
            value={select}
            label="country"
            onChange={handleChange}
            sx={{border:".1rem solid rgba(255, 255, 255, 1)",color:"white"}}
            
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"México"}>México</MenuItem>
            <MenuItem value={"Brasil"}>Brasil</MenuItem>
            <MenuItem value={"Colombia"}>Colombia</MenuItem>
            <MenuItem value={"Argentina"}>Argentina</MenuItem>
            <MenuItem value={"Perú"}>Perú</MenuItem>
            <MenuItem value={"Resto de Latinoamérica"}>Resto de Latinoamérica</MenuItem>
          </Select>
          
        
        </FormControl>
        <Button className={styles.boton} variant="text"  onClick={handleClick} >
            <SearchIcon fontSize='large' sx={{ color: "rgba(255, 255, 255, 0.841)" }}/>
          </Button>
      </div>

      </div>
      
      
      
    </div>
  );
}

export default App
