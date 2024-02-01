import { StyleSheet, View, Text, ScrollView } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome6';
import WeeklyStreak from './WeeklyStreak';

export default function Profile() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <EvilIcons name='user' size={250} />
                <Text style={styles.username}>@danyil_c</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <FontAwesome name='fire-flame-simple' size={40} />
                        <Text style={styles.statText}>14</Text>
                    </View>
                    <View style={styles.statItem}>
                        <FontAwesome name='pencil' size={40} />
                        <Text style={styles.statText}>14</Text>
                    </View>
                </View>
                <WeeklyStreak />
                <View style={styles.promptContainer}>
                    <Text style={styles.promptText}>PROMPT: A man walks into a gas station...</Text>
                    <Text style={styles.promptDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etiam sit amet nisl purus in mollis nunc sed. Mauris augue neque gravida in fermentum et sollicitudin. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Volutpat est velit egestas dui.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    username: {
        fontSize: 32,
        marginTop: 10,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 25,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statText: {
        fontSize: 50,
    },
    promptContainer: {
        width: '100%',
    },
    promptText: {
        backgroundColor: 'lightgray',
        textAlign: 'center',
        padding: 20,
    },
    promptDescription: {
        marginHorizontal: '10%',
        fontSize: 17,
        marginTop: 10,
    },
});
