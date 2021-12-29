import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./styles";
import css from './styles'

class Lista extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feed: this.props.data
        };
        this.carregaIconeLike = this.carregaIconeLike.bind(this)
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like =this.like.bind(this)
    }

    carregaIconeLike(likeada){
        return likeada ? require('../img/likeada.png') : 
        require('../img/like.png')
    }

like(){
    let feed = this.state.feed;
    if (feed.likeada === true) {
        this.setState({
            feed:{
                ...feed,
                likeada: false,
                likers: feed.likers -1
            }
        });
    }else{
        this.setState({
            feed:{
                ...feed,
                likeada: true,
                likers: feed.likers  + 1
            }
        });

    }

}
    mostraLikes(likers) {
        let feed =this.state.feed;
       if (feed.likers <= 0) {
         return;
       }

       return(
           //se curtudas for maior que 1 esiba curtidas senão exiba curtida
        <Text style= {css.likes}>
            
            {feed.likers} {feed.likers > 1 ? 'curtidas': 'curtida' } 
        </Text>

       )
    }


    render() {
        return (
            <View style={css.areaFeed} >

                <View style={css.viewPerfil} >
                    <Image
                        source={{ uri: this.state.feed.imgperfil }}
                        style={css.fotoPerfil}
                    />

                    <Text style={css.nomeUsuario}> {this.state.feed.nome} </Text>

                </View>

                <Image
                    resizeMode="cover"
                    style={css.fotoPublicacao}
                    source={{ uri: this.state.feed.imgPublicacao }}
                />

                <View style={css.areaBtn} >
                    <TouchableOpacity onPress={ this.like}>
                        <Image
                            source={this.carregaIconeLike(this.state.feed.likeada)}
                            style={css.iconeLike}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={css.btnSend}>
                        <Image
                            source={require('../img/send.png')}
                            style={css.iconeLike}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes (this.state.feed.likers)}

                <View style ={css.viewRodape} >
                  <Text style ={css.nomeRodape} >{this.state.feed.nome } </Text>
                  <Text style ={css.desRodape} >{this.state.feed.descricao } </Text>
                </View>

            </View>)
    }

}


export default Lista;