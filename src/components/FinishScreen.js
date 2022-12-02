import Button from "./Button";

export default function FinishScreen(props) {
  return (
    <div className='finishscreen text-center'>
        <h1 className='finishscreen--title'>Ganastee!</h1>
        <Button label="Intentar otra vez" action={props.setRestart}/>
    </div>
  );
}