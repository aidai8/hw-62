import {useState} from "react";
import Modal, {ButtonConfig} from "../../components/UI/Modal/Modal.tsx";
import Button from "../../components/UI/Button/Button.tsx";
import Alert from "../../components/UI/Alert/Alert.tsx";

const UiWork = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState(true);

    const modalButtons: ButtonConfig[] = [
        {
            type: 'primary',
            label: 'Continue',
            onClick: () => {
                console.log('Clicked Continue');
                alert('Continue button clicked!');
            },
        },
        {
            type: 'danger',
            label: 'Close',
            onClick: () => {
                console.log('Clicked Close');
                setShowModal(false);
            },
        },
    ];


    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <>
            <div className="mt-4">
                <h2>Modal</h2>
                <Button
                    text='Show Modal'
                    color='primary'
                    width={'30%'}
                    onClickBtn={() => setShowModal(!showModal)}
                />
                <Modal
                    show={showModal}
                    title="Modal window"
                    onClose={() => setShowModal(false)}
                    buttons={modalButtons}
                >
                    Helloooo!!
                </Modal>
            </div>

            <div className="mt-4">
                <h2>Alerts</h2>
                {showAlert && (
                    <Alert type="warning" onDismiss={closeAlert}>
                        This is a warning type alert
                    </Alert>
                )}
                <Alert type="success">This is a success type alert</Alert>
            </div>
        </>
    );
};

export default UiWork;