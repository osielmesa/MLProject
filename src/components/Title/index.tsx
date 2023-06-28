import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';

interface TitleProps extends TextProps {
  title: string;
}

function Title(props: TitleProps): JSX.Element {
  const {title, ...others} = props;
  return (
    <Text style={styles.title} {...others}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default Title;
