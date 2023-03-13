import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import hitoria1 from '../../Audio/historia1.mp3'

var Sound = require('react-native-sound');

Sound.setCategory('Playback')

export default function HistoryAudioPlayer() {
  const [sound, setSound] = useState(null);

  const playSound = () => {
    const newSound = new Sound('historia1.mp3', null, (error) => {
      if (error) {
        console.log('Erro ao carregar o som', error);
        return;
      }
      newSound.setVolume(1);
      newSound.play();
    });
    setSound(newSound);
  };

    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#363636'}}>
            <TouchableOpacity onPress={playSound} style={styles.button}>
                <Text style={{ color: 'white', fontSize: 30 }}>Pressione para ouvir a história</Text>
            </TouchableOpacity>
        </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#32CD32', // cor do botão verde
      padding: 10,
      borderRadius: 5,
      margin: 95
    }
  });  