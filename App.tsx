import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';

import { theme } from './src/styles/theme';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'GeneralSans-400': require('./assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./assets/fonts/GeneralSans-Bold.otf'),
  });

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
