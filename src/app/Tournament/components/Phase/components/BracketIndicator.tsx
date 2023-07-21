import { Text } from '@chakra-ui/react'

export function BracketIndicator(props: { state: string }){
    
    function formatBracketType(bracketType: string): string{
        let words = bracketType.split('_')
        
        words = words.map(word => { 
            let tempWord = word;
            tempWord = tempWord.toLowerCase(); 
            let chars = tempWord.split('')
            chars[0] = chars[0].toUpperCase(); 
            tempWord = chars.join('')
            return tempWord;
        })
        bracketType = words.join(' ');
        
        return bracketType
    }

    return(
        <Text>{formatBracketType(props.state)}</Text>
    )
}