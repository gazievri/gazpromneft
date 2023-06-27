import { useEffect, useState } from 'react';
import { Table as TableAntd, Button, Typography, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../store/modalSlice';
import { setSelectedData } from '../store/dataSlice';
import type { IData } from '../types/dataType';
import type { RootState } from '../store';


export const Table: React.FC = () => {
    const dataSource = useSelector((state: RootState) => state.data.data)
    const [selectedRows, setSelectedRows] = useState<IData[]>([]);
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();

    // Данные для заголовков таблицы
    const columns: ColumnsType<IData> = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            sorter: (a: IData, b: IData) => a.name.localeCompare(b.name),
        },
        {
            title: 'Количество',
            dataIndex: 'quantity',
            key: 'quantity',
            sorter: (a: IData, b: IData) => a.quantity - b.quantity,
        },
        {
            title: 'Дата доставки',
            dataIndex: 'deliveryDate',
            key: 'deliveryDate',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
            sorter: (a: IData, b: IData) => a.price - b.price,
        },
        {
            title: 'Валюта',
            dataIndex: 'currency',
            key: 'currency',
            sorter: (a: IData, b: IData) => a.currency.localeCompare(b.currency),
        },
    ];

    // 
    const rowSelection = {
        onChange: (_selectedRowKeys: React.Key[], selectedRows: IData[]) => {
            setSelectedRows(selectedRows)
        },
    };

    // Обработчик клика по кнопке Анулировать
    const handleClick = () => {
        dispatch(setSelectedData(selectedRows))
        dispatch(openModal())
    }

    useEffect(() => {
        if (selectedRows.length !== 0) {
            const sum = selectedRows.reduce((sum: number, row: IData) => sum + row.quantity, 0);
            setTotal(sum);
        } else {
            setTotal(0)
        }
    }, [selectedRows])

    return (
        <Space direction='vertical' style={{ display: 'flex' }}>
            <TableAntd dataSource={dataSource} columns={columns} pagination={false} rowSelection={rowSelection} rowKey="id" />
            <Typography.Text strong>Общее количество: {total}</Typography.Text>
            {
                total > 0 && <Button type="primary" onClick={handleClick}>Аннулировать</Button>
            }
        </Space>
    )
}