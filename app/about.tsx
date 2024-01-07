import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function AboutScreen() {
	return (
		<View style={{ flex: 1 }}>
			<Text>About Page !</Text>
			<Link href={'/'}>Home</Link>
		</View>
	);
}
