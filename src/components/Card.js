

export default function Card(props) {
    return (
        <div 
            className={`card ${props.rotate ? 'rotate': ''}`}
            data-id={props.id} 
            onClick={ () => props.actionRotate(props.id, props.pinUp) } 
            data-bind={props.bind}>
            <div className='card--inner'>
                <div className='card--front middle' style={{zIndex:props.rotate ? 1:2}}><i className="fas fa-question"></i></div>
                <div className='card--back middle' style={{zIndex:props.rotate ? 2:1}}><i className={props.symbol}></i></div>
            </div>
        </div>
    )
}
