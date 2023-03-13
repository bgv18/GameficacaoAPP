import React, { useState, useRef } from 'react';
import { StyleSheet, Image, PanResponder, Animated } from 'react-native';

function DraggableImage({ source }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [panResponderEnabled, setPanResponderEnabled] = useState(true);
  const [pan] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        // Move the image
        Animated.event([null, { dx: pan.x, dy: pan.y }])(event, gesture);
        setPanResponderEnabled(false);
      },
      onPanResponderRelease: (event, gesture) => {
        // Update the position of the image
        setPosition({
          x: position.x + gesture.dx,
          y: position.y + gesture.dy,
        });
        pan.setOffset({ x: position.x, y: position.y });
        pan.setValue({ x: 0, y: 0 });
        setPanResponderEnabled(true);
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
      <Image source={source} style={styles.image} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
  },
  active: {
    zIndex: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default DraggableImage;