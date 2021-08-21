//import React from 'react'
//import { View, Text, StyleSheet } from 'react-native'

//export const Todo = ({todo}) => {
//	return (
//		<View style={ styles.todo } >
//			<Text>{todo.title}</Text>
//		</View>
//	)
//}

//const styles = StyleSheet.create({
//	todo: {
//		flexDirection: 'row',
//		alignItems: 'center',
//		padding: 15,
//		borderWidth: 1,
//		borderColor: '#eee',
//		borderRadius: 5,
//	}
//})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function Todo(props) {
	return (
		<View style={ styles.todo }>
			<Text>{props.todo.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
	}
})
