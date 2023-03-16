import React, { useState, useRef } from 'react';
import { StyleSheet, Image, PanResponder, Animated } from 'react-native';

function DraggableImage({ source, correctPosition }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [panResponderEnabled, setPanResponderEnabled] = useState(true);
  const [imageSize, setImageSize] = useState(130)
  const [pan] = useState(new Animated.ValueXY({ x: 0 , y: 0 }));
  const [isPositionCorrect, setIsPositionCorrect] = useState(false);


  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x:pan.x._value,
          y:pan.y._value
        })
      },
      onPanResponderMove: (_, gesture) => {
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
        console.log(pan);
        console.log(correctPosition);
        const threshold = 10; // define a threshold value to determine if the position is correct
        const isXCorrect = Math.abs(pan.x._value - correctPosition.x) < threshold;
        const isYCorrect = Math.abs(pan.y._value - correctPosition.y) < threshold;
        const isPositionCorrect = isXCorrect && isYCorrect;
        setIsPositionCorrect(isPositionCorrect);
        console.log(isPositionCorrect);
      }
    })
  ).current;

  const containerStyles = [
    styles.imageContainer,
    { left: position.x, top: position.y },
    panResponderEnabled && styles.active,
    { transform: pan.getTranslateTransform() },
    isPositionCorrect && styles.correctPosition // add this line to conditionally apply the correctPosition style
  ];

  return (
    <Animated.View
      style={containerStyles}
      {...panResponder.panHandlers}
    >
      <Image source={source} style={{ width: imageSize + 20, height: imageSize }} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 5,
    borderWidth: 2,
    borderColor: 'transparent' // set the default border color to transparent
  },
  active: {
    zIndex: 2,
  },
  correctPosition: {
    borderWidth: 2,
    borderColor: 'green', // set the border color to green when the position is correct
  },
});

export default DraggableImage;