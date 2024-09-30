import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold, Inter_800ExtraBold } from "@expo-google-fonts/inter";
import { Home } from "@/app";
import { Login } from "@/app/login";
import { Register } from "@/app/register";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if (!fontsLoaded) {
    return null
  }

  return <Register />
}