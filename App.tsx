import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { theme } from './src/styles/theme';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded, isError] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  console.log(isError);

  return (
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? (
        <View>
          <Text>Loading ....</Text>
        </View>
      ) : (
        <Home />
      )}
      <StatusBar translucent animated style="dark" />
    </ThemeProvider>
  );
}
