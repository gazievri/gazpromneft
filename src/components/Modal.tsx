import { Modal as ModalAntd, Typography } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';
import { removeSelectedData } from '../store/dataSlice';
import { BASE_URL } from '../utils/constants';
import type { IData } from '../types/dataType';
import type { RootState } from '../store';

export const Modal: React.FC = () => {
    const modalIsOpened = useSelector((state: RootState) => state.modal.modalIsOpened);
    const selectedData = useSelector((state: RootState) => state.data.selectedData);
    const dispatch = useDispatch();

    // Обработчики кликов по кнопкам Применить и отменить
    const handleConfirm = () => {
        const ids = selectedData.map((item: IData) => item.id);

        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/cancel`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify(ids)
                });

                const data = response.json();

                console.log('Данные успешно отправлены!!!', data)

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
        dispatch(closeModal());
    }

    const handleCancel = () => {
        dispatch(removeSelectedData());
        dispatch(closeModal());
    };

    // Получение названий позиций для отображения в модальном окне
    const getItemsList = () => {
        return selectedData.map((item: IData) => item.name).join(', ');
    };

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
};