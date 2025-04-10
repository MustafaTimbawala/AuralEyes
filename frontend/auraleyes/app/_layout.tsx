import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated'; 



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();



export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  } 
  
  return (
    <Stack 
    initialRouteName='home'
    >
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="descriptionPage" options={{}} /> 
      <Stack.Screen name="textCam" options={{}} /> 
      <Stack.Screen name="livefeed" options={{}} />
      
    </Stack>
  );
}
