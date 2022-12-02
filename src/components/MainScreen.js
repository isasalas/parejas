import Button from '../components/Button'

export default function MainScreen(props) {

    const levelText = ['Facil', 'Normal', 'Dificil'];

    return (
        <div className='mainscreen text-center'>
            <h1 className='mainscreen--title'>Juego de Memoria</h1>
            <div className='mainscreen--menu'>
                <p>Selecciona el nivel</p>
                <Button label={levelText[props.level]} action={props.changeDifficulty} /> <br />
                <Button label="Start" action={ () => props.setStart(1) } />
            </div>
            <p>Hecho por UEB</p>
        </div>
    )
}
