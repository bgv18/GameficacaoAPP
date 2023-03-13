import { Text, View } from "react-native";
import { TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';
import React, { useState } from 'react';

export default function HistoryAudioPlayer() {
  const [sound, setSound] = useState(null);

  const playSound = () => {
    const audioPath = require('../../Audio/historia1.mp3');
    const newSound = new Sound(audioPath, null, (error) => {
      if (error) {
        console.log('Erro ao carregar o som', error);
        return;
      }
      newSound.play();
    });
    setSound(newSound);
  };

    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#363636'}}>
            <TouchableOpacity onPress={playSound} style={{margin: 100}}>
                <Text style={{ color: 'white', fontSize: 30 }}>Pressione para ouvir a história</Text>
            </TouchableOpacity>
        </View>
    );
  }