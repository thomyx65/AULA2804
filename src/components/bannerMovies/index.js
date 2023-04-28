import React, {Fragment} from 'react'
import {Image,Text} from 'react-native'
import styles from './style';

const imagem = Math.floor(Math.random() * 4 + 1);

export default function bannerMovies () {

    return (
             <>
             
             <Text style = {styles.textBanner}>Em cartaz</Text>
             <Image style = {styles.imageBanner}source = {require(`../../Img/${imagem}.jpg`)}/>
             </>   

    );

}