import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
const COLORS = {
    
    black: '#000',
    white: 'white',
   
    Babyblue: '#13ebeb',
    DarkBabyblue: '#017070',
    LightBabyblue: '#85c3c3',

    Green: '#17a657',
    DarkGreen: '#055c2c',
    LightGreen: '#3fe98b',

    Orange: '#b76f11',
    DarkOrange: '#704002',
    LightOrange: '#e7a755',

    Red: '#ff2f68',
    LightRed: '#ff4f7e',
    DarkRed: '#d9365e',

    Purple: '#8720a1',
    DarkPurple: '#4b045c',
    LightPurple: '#d379e9',

   
}

const SIZES = {
    // global sizes
    RegFont: RFPercentage(2.3),
    BoldFont: RFPercentage(2.7),
   
    ButtonRadius:RFPercentage(2),
    // app dimensions
    width,
    height,
};
const FONTS = {
    Reg_Text: {
        fontFamily: 'Changa-Regular',
        fontSize: SIZES.RegFont,
    },
   Bold_Text:{
    fontFamily: 'Changa-Bold',
    fontSize: SIZES.BoldFont,
   },
    fontFamily: 'Janna LT Bold',
};


export {
    COLORS,
    SIZES,
    FONTS
}