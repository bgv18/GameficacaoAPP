import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HistoryText() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.view}>
        <Text style={styles.texto}>
          Era uma vez, uma menina chamada Alice. Ela tinha dois amigos: um chachorro levado chamado Bidu e uma gatinha alegre chamada Mimi. E os tres amigos gostavam muito de brincar na praça, de correr atrás da bola de linha.
          Mas um dia, Bidu resolveu correr atrás da Mini, e com um latido bem alto, espantou a amiga. Com o susto, Mimi correu e se escondeu no alto de uma árvore.
          Mimi não conseguia descer da árvore e Bidu ficou com muito medo que ela caisse, mas Alice rapidamente pensou en uma solução: emprestou uma escada, e depois de subir, conseguiu pegar a Mimi.
          Bidu pediu desculpas para a amiga e os três voltaram a brincar felizes como se nada tivesse acontecido.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    with: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
  },

  SafeArea: {
    flex: 1,
    backgroundColor: 'grey',
  },
  texto: {
    color: 'black', 
    fontSize: 22,
    fontFamily: 'lucida grande',
    fontWeight: 'bold'
  }

});