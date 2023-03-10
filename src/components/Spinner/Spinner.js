import './Spinner.scss';

const Spinner = ({customClass}) => {
    return (
        <div class={`lds-ellipsis ${customClass}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner;