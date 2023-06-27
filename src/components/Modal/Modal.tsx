import { Modal as ModalAntd, Typography } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/modalSlice';
import { removeSelectedData } from '../../store/dataSlice';

export const Modal: React.FC = () => {
    const modalIsOpened = useSelector((state) => state.modal.modalIsOpened)
    const selectedData = useSelector(state => state.data.selectedData)
    const dispatch = useDispatch()

    // Обработчики кликов по кнопкам Применить и отменить
    const handleConfirm = () => {
        dispatch(closeModal())
    }

    const handleCancel = () => {
        dispatch(removeSelectedData())
        dispatch(closeModal())
    }

    // Получение названий позиций для отображения в модальном окне
    const getItemsList = () => {
        return selectedData.map(item => item.name).join(', ')
    }

    return (
        <>
            <ModalAntd title="Вы уверены что хотите аннулировать товар(ы):"
                centered
                open={modalIsOpened}
                onOk={handleConfirm}
                onCancel={handleCancel}
                okText="Применить"
                cancelText="Отклонить"
            >
                <Typography.Text>{getItemsList()}</Typography.Text>
            </ModalAntd>
        </>
    )
}