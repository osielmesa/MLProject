import React from 'react';
import {
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  Text,
} from 'react-native';
import {colors, dimensions} from '../../theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  outlined: boolean;
  style?: object;
}

function Button(props: ButtonProps): JSX.Element {
  const {title, outlined, style, ...others} = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        outlined ? styles.outlined : styles.primary,
        style,
      ]}
      {...others}>
      <Text style={outlined ? styles.outlinedTitle : styles.primaryTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: dimensions.medium,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  primaryTitle: {
    color: colors.white,
  },
  outlinedTitle: {
    color: colors.primary,
  },
});

export default Button;
