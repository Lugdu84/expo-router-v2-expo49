import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from '../components/back-button';

export default function HomeScreen() {
	const slug = 'super-article-de-blog';
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.title}>Hello World</Text>
				<Link href={'/settings/'}>Settings</Link>
				<Link href={{ pathname: '/blog/[slug]', params: { slug: slug } }}>
					Article de blog
				</Link>
				<Link href={'/about'}>About</Link>
			</View>
			<BackButton />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		position: 'relative',
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		maxWidth: 960,
		marginHorizontal: 'auto',
	},
	title: {
		fontSize: 64,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 36,
		color: '#38434D',
	},
});
