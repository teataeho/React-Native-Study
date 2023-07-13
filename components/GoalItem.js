import { StyleSheet, View, Text } from "react-native";

const GoalItem = () => {
  return (
    // react-native는 스타일 상속의 개념이 없습니다.
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  )
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'    
  },
  goalText: {
    color: 'white'
  }
});