import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import DraggableImage from '../../Components/index';

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column', marginHorizontal: 40, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: 'white', width: 180, height: 150, marginRight: 20, marginLeft: 15 }}>
            <Text style={{ textAlign: 'center', marginTop: 60 }}>Cenario</Text>
          </View>
          <View style={{ backgroundColor: 'white', width: 180, height: 150, marginRight: 20, marginLeft: 15 }}>
            <Text style={{ textAlign: 'center', marginTop: 60 }}>Tema</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'white', width: 180, height: 150, marginRight: 20, marginLeft: 15 }}>
            <Text style={{ textAlign: 'center', marginTop: 60 }}>Enredo</Text>
          </View>
          <View style={{ backgroundColor: 'white', width: 180, height: 150, marginRight: 20, marginLeft: 15}}>
            <Text style={{ textAlign: 'center', marginTop: 60 }}>Resolucao</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginHorizontal: 20, marginBottom: 20 }}>
          <DraggableImage source={require('../../images/Tema.png')} />
          <DraggableImage source={require('../../images/Enredo.png')} />
          <DraggableImage source={require('../../images/Imagem1.png')} />
          <DraggableImage source={require('../../images/Resolucao.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#363636',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
    alignSelf: 'flex-start'
  },
  square: {
    width: 150,
    height: 150,
    margin: 20,
    backgroundColor: 'white',
  },
  bottomRow: {
    flexDirection: 'row',
  },
  bottomSquare: {
    width: 90,
    height: 90,
    margin: 4,
    backgroundColor: '#32CD32',
    alignSelf: 'flex-end',
  },
});
