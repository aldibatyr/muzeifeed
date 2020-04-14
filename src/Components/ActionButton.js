import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';

const xml = `
<svg width="39" height="8" viewBox="0 0 39 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.3536 4.35355C38.5488 4.15829 38.5488 3.84171 38.3536 3.64645L35.1716 0.464466C34.9763 0.269204 34.6597 0.269204 34.4645 0.464466C34.2692 0.659728 34.2692 0.976311 34.4645 1.17157L37.2929 4L34.4645 6.82843C34.2692 7.02369 34.2692 7.34027 34.4645 7.53553C34.6597 7.7308 34.9763 7.7308 35.1716 7.53553L38.3536 4.35355ZM0 4.5L38 4.5V3.5L0 3.5L0 4.5Z" fill="white"/>
</svg>
`;

const ActionButton = () => {
  const window = useWindowDimensions();
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={styles.discussButton}>
      <View style={{...styles.buttonBody, backgroundColor: colors.card}}>
        <Text style={{...styles.buttonText, color: colors.text}}>Discuss</Text>
        <SvgXml xml={xml} />
      </View>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  discussButton: {
    marginTop: 50,
    marginHorizontal: 20,
    width: window.width,
  },
  buttonBody: {
    height: 50,
    backgroundColor: '#5438d3',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
    borderRadius: 10,
    flexDirection: 'row',
  },
  buttonText: {
    fontFamily: 'PlayfairDisplay-Regular',
    fontSize: 19.2,
  },
});
