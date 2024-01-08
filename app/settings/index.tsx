import { router } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';
import BackButton from '../../components/back-button';

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
			<BackButton />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
		gap: 12,
		position: 'relative',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
	},
});
