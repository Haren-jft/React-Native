import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Shimmer = () => {
  const [visible, setVisible] = useState(false);
  const [avatarVisible, setAvatarVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAvatarVisible(true);
    }, 3000);
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ShimmerPlaceholder style={styles.img} visible={avatarVisible}>
          <Image
            style={styles.img}
            source={require('../assets/hs.jpeg')}
            resizeMode="stretch"
          />
        </ShimmerPlaceholder>
        <View style={styles.infoContainer}>
          <ShimmerPlaceholder visible={visible}>
            <Text style={styles.text}>Haren Sharma</Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder visible={visible}>
            <Text style={styles.text}>MCA</Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder visible={visible}>
            <Text style={styles.text}>BVICAM</Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder visible={visible}>
            <Text style={styles.text}>Noida-sec-120</Text>
          </ShimmerPlaceholder>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  imgContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 30,
    borderRadius: 30,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 40,
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

export default Shimmer;
