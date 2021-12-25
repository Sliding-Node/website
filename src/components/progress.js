import ProgressBar from "@ramonak/react-progress-bar";
const Progress = (props) => {
    return <ProgressBar
    completed={props.value}
    animateOnRender
    customLabel = {props.customLabel}    
    />;
  };

  export default Progress;