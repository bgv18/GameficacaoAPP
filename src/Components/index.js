import React, { useState, useRef } from 'react';
import { StyleSheet, Image, PanResponder, Animated } from 'react-native';

function DraggableImage({ source, correctPosition }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [panResponderEnabled, setPanResponderEnabled] = useState(true);
  const [imageSize, setImageSize] = useState(95)
  const [pan] = useState(new Animated.ValueXY({ x: position.x , y: position.y }));
  const [isPositionCorrect, setIsPositionCorrect] = useState(false);


  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        // Move the image
        Animated.event([null, { dx: pan.x, dy: pan.y }])(event, gesture);
        console.log('Valor Pan:', pan);
        setPanResponderEnabled(false);
      },
      onPanResponderRelease: (event, gesture) => {
        // Update the position of the image
        setPosition({
          x: position.x + gesture.dx,
          y: position.y + gesture.dy,
        });
        console.log('Valor posi', gesture);
        pan.setOffset({ x: position.x, y: position.y });
        pan.setValue({ x: 0, y: 0 });
        setPanResponderEnabled(true);
        /* if ((position.x > correctPosition.x - 20 && position.x < correctPosition.x + 20) && (position.y > correctPosition.y - 20 && position.y < correctPosition.y + 20)) {
          setIsPositionCorrect(true);
          setImageSize(150);
        }
        else {
          setIsPositionCorrect(false);
          setPosition({ x: 0, y: 0 })
        } */
      },
    })
  ).current;

  return (
    <Animated.View
      style={[
        styles.imageContainer,
        { left: position.x, top: position.y },
        panResponderEnabled && styles.active,
        { transform: pan.getTranslateTransform() },
      ]}
      {...panResponder.panHandlers}
    >
      <Image source={source} style={ { width: imageSize, height: imageSize } } />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 5
  },
  active: {
    zIndex: 2,
  },
  correctPosition: {
    borderWidth: 2,
    borderColor: 'green',
  },
});

export default DraggableImage;