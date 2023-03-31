import './Spinner.scss';

const Spinner = ({customClass}) => {
    return (
        <div className={`lds-ellipsis ${customClass}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Spinner;