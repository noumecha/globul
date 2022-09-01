import react from 'react'
import { View, useWindowDimensions } from 'react-native'
import CustButton from './CustButton';
//import styles from '../styles'

export default function FooterComp({
    backgroundColor,
    rightButtonLabel = false,
    rightButtonPress = false
})
{
    const windowWidth = useWindowDimensions().width;
    const HEIGHT = windowWidth * 0.21;
    const FOOTER_PADDING = windowWidth * 0.1;
  
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          height: HEIGHT,
          backgroundColor,
          width: '100%',
          //opacity: 0.6,
          alignItems: 'center',
          paddingHorizontal: FOOTER_PADDING
        }}
      >
        <CustButton label={rightButtonLabel} onPress={rightButtonPress} />

      </View>
    )
}