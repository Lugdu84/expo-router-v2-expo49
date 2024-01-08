import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function BackButton() {
	const handleBack = () => {
		router.back();
	};
	return (
		<Pressable
			disabled={!router.canGoBack()}
			onPress={handleBack}
			style={styles.buttonBack}>
			<Ionicons
				name="arrow-back"
				size={24}
				color={router.canGoBack() ? 'black' : 'lightgray'}
			/>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	buttonBack: {
		position: 'absolute',
		top: 24,
		left: 24,
	},
});
