import {
	Link,
	router,
	useGlobalSearchParams,
	useSearchParams,
} from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function SettingsScreen() {
	const params = useGlobalSearchParams();
	const handlePressed = () => {
		router.push('/');
	};

	const handleSetParams = () => {
		router.setParams({ test: 'test' });
	};

	console.log(params);
	return (
		<View>
			<Text>Ceci est une page de settings ...</Text>
			<Link href={'/'}>Home</Link>
			<Pressable onPress={handlePressed}>
				<Text>Valider les modifications</Text>
			</Pressable>
			<Pressable onPress={handleSetParams}>
				<Text>Changer les paramètres</Text>
			</Pressable>
		</View>
	);
}
