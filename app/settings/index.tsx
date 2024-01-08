import { router } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SettingsScreen() {
	const handlePush = () => {
		router.push('/');
	};
	const handlePushWuthParams = () => {
		router.push({
			pathname: '/blog/[slug]',
			params: { slug: 'super-article-de-blog' },
		});
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Settings</Text>
			<Button
				title="Push"
				onPress={handlePush}
			/>
			<Button
				title="Push avec params"
				onPress={handlePushWuthParams}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
		gap: 12,
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
	},
});
