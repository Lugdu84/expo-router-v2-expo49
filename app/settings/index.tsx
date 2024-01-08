import { router } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SettingsScreen() {
	const handlePush = () => {
		router.push('/');
	};
	const handlePushWithParams = () => {
		router.push({
			pathname: '/blog/[slug]',
			params: { slug: 'super-article-de-blog' },
		});
	};
	const handleReplace = () => {
		router.replace('/');
	};
	const handleBack = () => {
		router.back();
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
				onPress={handlePushWithParams}
			/>
			<Button
				title="Replace"
				onPress={handleReplace}
			/>
			<Button
				title="Back"
				onPress={handleBack}
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
