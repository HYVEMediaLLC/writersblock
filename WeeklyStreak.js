import { StyleSheet, View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function WeeklyStreak() {
    return (
        <View style={styles.container}>
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <View key={day} style={styles.weekItem}>
                    <Text>{day}</Text>
                    <FontAwesome name='fire-flame-simple' size={50} />
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 20,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        marginBottom: 20,
    },

    weekItem: {
        alignItems: 'center'
    },
});
