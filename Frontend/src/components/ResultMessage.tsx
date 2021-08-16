import React, {useState} from 'react'
import { Message } from 'semantic-ui-react'
import {useHistory} from "react-router-dom";


interface Props {
    message:String;
    status:String;
}
const ResultMessage: React.FC<Props> = ({message, status}) => {
    const [dismiss, setDismiss] = useState<boolean>(true)
    const history = useHistory();
    function handleDismiss (){
        console.log("dismiss clicked")
        setDismiss(prev => prev =false)
        history.goBack()
    }

    if (dismiss){
        return(
            <div>
            {status==='success'?
                <Message onDismiss={handleDismiss} success visible>
                    <Message.Header>{message}</Message.Header>
                </Message>
                :
                <Message onDismiss={handleDismiss} negative visible>
                    <Message.Header>{message}</Message.Header>
                </Message>
            }
            </div>
        )
    }
    else {
        return (
            <p></p>
        )
    }
    
}

export default ResultMessage