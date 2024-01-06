import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
	return (
		<View>
			<Text>Ceci est une page de settings ...</Text>
			<Link href={'/'}>Home</Link>
		</View>
	);
}
