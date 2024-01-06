import { useLocalSearchParams } from 'expo-router';

import { Text, View } from 'react-native';

export default function Page() {
	const { slug } = useLocalSearchParams();

	return (
		<View>
			<Text>Blog post: {slug}</Text>
		</View>
	);
}
