import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  // 定义一个状态变量 count，初始值为 0
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>我的第一个跨端应用</Text>
      
      {/* Platform.OS 可以用来判断当前是运行在 iOS 还是 Android 上 */}
      <Text style={styles.subtitle}>
        当前运行环境: {
          Platform.OS === 'ios' ? '🍎 iOS' : 
          Platform.OS === 'android' ? '🤖 Android' : 
          Platform.OS === 'web' ? '🌐 Web' : '❓ 未知'
        }
      </Text>

      <View style={styles.counterBox}>
        <Text style={styles.countText}>点击次数: {count}</Text>
      </View>

      {/* TouchableOpacity 相当于 Web 里的 button，点击会有透明度变化反馈 */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>点我 +1</Text>
      </TouchableOpacity>
    </View>
  );
}

// React Native 使用 JavaScript 对象来编写样式，非常类似 CSS，但默认使用 Flexbox 布局
const styles = StyleSheet.create({
  container: {
    flex: 1, // 占满全屏
    backgroundColor: '#f5f5f5',
    alignItems: 'center', // 水平居中
    justifyContent: 'center', // 垂直居中
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  counterBox: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    // iOS 阴影
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Android 阴影
    elevation: 3, 
    marginBottom: 30,
  },
  countText: {
    fontSize: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF', // iOS 标准蓝
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});