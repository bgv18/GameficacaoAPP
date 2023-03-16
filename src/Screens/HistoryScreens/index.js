import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import DraggableImage from '../../Components/index';

export default function HistoryScreen() {
  
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column', marginHorizontal: 40, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <View style={{ backgroundColor: 'white', width: 180, height: 150, marginRight: 20, marginLeft: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 7 }}>
            <Text style={{ textAlign: 'center', marginTop: 60 }}>CENÁRIO</Text>
          </View>
          <View style={{ backgroundColor: 'white', width: 180, height: 150, marginRight: 20, marginLeft: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 7}}>
            <Text style={{ textAlign: 'center', marginTop: 60 }}>TEMA</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'white', width: 180, height: 150, marginRight: 20, marginLeft: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 7}}>
            <Text style={{ textAlign: 'center', marginTop: 60 }}>ENREDO</Text>
          </View>
          <View style={{ backgroundColor: 'white', width: 180, height: 150, marginRight: 20, marginLeft: 15, borderStyle: 'solid', borderColor: 'black', borderWidth: 7}}>
            <Text style={{ textAlign: 'center', marginTop: 60 }}>RESOLUÇÃO</Text>
          </View>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', margin: 6 }}>
          <DraggableImage
            source={ require('../../images/Tema.png') }
            correctPosition = {{x: 186, y: -315}}
          />
          <DraggableImage
            source={ require('../../images/Cenario.png') }
            correctPosition = {{x: -187, y: -315}}
            />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', margin: 1 }}>
           <DraggableImage
            source={ require('../../images/Enredo.png') }
            correctPosition = {{x: 27, y: -281}}
            />
           <DraggableImage
            source={ require('../../images/Resolucao.png') }
            correctPosition = {{x: 28, y: -282}}
            />
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
    border: 1,
    borderStyle: 'solid'
  }
});
