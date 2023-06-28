/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Image} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  Asset,
  ImageLibraryOptions,
} from 'react-native-image-picker';
import {colors, spacing} from './src/theme';
import Button from './src/components/Button';
import Title from './src/components/Title';

const options: ImageLibraryOptions = {
  selectionLimit: 1,
};

function App(): JSX.Element {
  const [uploadedImage, setUploadedImage] = useState<Asset | null>(null);
  const uploadImage = async (isCamera = false) => {
    try {
      let result: ImagePickerResponse;

      if (isCamera) {
        result = await launchCamera(options);
      } else {
        result = await launchImageLibrary(options);
      }

      if (result?.assets?.length) {
        setUploadedImage(result.assets[0]);
      }
    } catch (error) {
      console.log('Error getting image', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={colors.background}
      />
      <Title title={'Pick up an image'} />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: uploadedImage
              ? uploadedImage.uri
              : 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
          }}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.buttonsView}>
        <Button
          title={'Camera'}
          outlined
          style={styles.leftButton}
          onPress={() => uploadImage(true)}
        />
        <Button
          title={'Gallery'}
          outlined={false}
          style={styles.rightButton}
          onPress={() => uploadImage()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  imageContainer: {
    width: '100%',
    padding: spacing.small,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  buttonsView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: spacing.small,
  },
  leftButton: {
    marginRight: spacing.small / 2,
  },
  rightButton: {
    marginLeft: spacing.small / 2,
  },
});

export default App;
