import React from 'react';
import useInitialSate from '../../hooks/useInitialState';
import Search from '../../components/Search';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductDetail from '../../components/ProductDetail';

const API = 'http://localhost:3000/api/items/MLA932320622'; 

const initialState = {
  "author": {
      "name": "Fabian",
      "lastname": "Orrego"
  },
  "item": {
      "id": "MLA932320622",
      "title": "Apple iPhone SE (2da Generación) 128 Gb - Negro",
      "price": {
          "currency": "ARS",
          "amount": 137239
      },
      "picture": "http://http2.mlstatic.com/D_615774-MLA46552695388_062021-I.jpg",
      "condition": "new",
      "free_shipping": true,
      "sold_quantity": 2,
      "description": "El iPhone SE es el iPhone de 4,7 pulgadas más potente hasta ahora (1). Tiene el chip A13 Bionic, que ofrece un rendimiento increíble en apps, juegos y fotos. Viene con modo Retrato y seis efectos de iluminación para tomar retratos con calidad de estudio, HDR Inteligente de última generación que ofrece un nivel de detalle sorprendente en las luces y las sombras de las fotos, video 4K de calidad cinematográfica y todas las funcionalidades avanzadas de iOS. Además de una batería de larga duración (2) y resistencia al agua (3). Tiene todo lo que te gusta del iPhone en un diseño compacto que te encantará.\n\n\nAvisos Legales\n(1) El tamaño de la pantalla se mide en diagonal.\n(2) La duración de la batería varía según el uso y la configuración.\n(3) El iPhone SE es resistente a las salpicaduras, al agua y al polvo, y fue probado en condiciones de laboratorio controladas; el iPhone SE tiene una clasificación IP67 según la norma IEC 60529 (hasta 30 minutos a una profundidad máxima de 1 metro). La resistencia a las salpicaduras, al agua y al polvo no es una condición permanente, y podría disminuir como consecuencia del uso normal. No intentes cargar un iPhone mojado; consulta el manual del usuario para ver las instrucciones de limpieza y secado. La garantía no cubre daños producidos por líquidos.\n(4) Los cargadores inalámbricos Qi se venden por separado.",
      "categories": [
          "Celulares y Teléfonos",
          "Celulares y Smartphones"
      ]
  }
}

const Detail = () => {
  //const initialState = useInitialSate(API);
  return (
    <>
      <Search />
      <Breadcrumbs crumbsList={initialState.item.categories} />
      <ProductDetail key={initialState.item.id} {...initialState.item}/>
    </>
  );
}

export default Detail;