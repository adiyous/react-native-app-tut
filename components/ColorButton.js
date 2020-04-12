import React from 'react'
import { 
    TouchableHighlight, 
    View, 
    Text, 
    StyleSheet 
} from 'react-native'

// export default  class ColorButton extends Component {
    //render(){
        //return (
const ColorButton = ({backgroundColor, onSelect=f=>f }) => {
    return(
    <TouchableHighlight 
                    style={styles.button}
                    onPress={() => onSelect(backgroundColor)}
                    underlayColor='orange'>
        <View style={styles.row}>
        <View style={[styles.sample,{backgroundColor}]} />
            <Text style={styles.text}>
                {backgroundColor}
            </Text>
        </View>
    </TouchableHighlight>
    )
}
            
        //)
    //}
//}

const styles = StyleSheet.create({
    button: {
        fontSize: 30,
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,.8)'
      },
      row: {
        flexDirection: 'row',
        alignItems: "center"
      },
      sample: {
        height: 20,
        width: 20,
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'white'
      },
      text: {
        fontSize: 30,
        margin: 5
      }
})

export default ColorButton
