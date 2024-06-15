import { Button, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export function GestureTestPage() {
  const tap = Gesture.Tap();

  return (
    <GestureDetector gesture={tap}>
      <View>
        <Button title="Test" />
      </View>
    </GestureDetector>
  );
}
