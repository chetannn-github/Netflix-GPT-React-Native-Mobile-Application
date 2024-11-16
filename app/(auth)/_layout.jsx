import { Slot } from 'expo-router'

import { SafeAreaView } from 'react-native-safe-area-context'

const _layout = () => {
  return ( 
  <SafeAreaView className="h-full bg-red-500 w-fit">
   
    <Slot/>
  </SafeAreaView>
  )
}

export default _layout