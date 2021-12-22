import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import App from "./App"
import  Start from './Start'


const Example = (props) => {
	const { color, text } = props

	return(
		<View style={styles.wrapper}>
			<Text style={{ color }}>{text}</Text>
			<Start />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default Example
