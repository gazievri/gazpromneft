import { useEffect, useState } from 'react';
import { Table as TableAntd, Button, Divider, Typography, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    name: string;
    quantity: number;
    price: number;
    currency: string;
    deliveryDate: string;
}

export const Table: React.FC = () => {
    const [selectedRows, setSelectedRows] = useState<DataType[]>([]);
    const [total, setTotal] = useState(0)

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            quantity: 32,
            price: 1000,
            currency: 'RUB',
            deliveryDate: "01.02.2023"
        },
        {
            key: '2',
            name: 'John',
            quantity: 40,
            price: 1100,
            currency: 'USD',
            deliveryDate: "12.02.2023"
        },
    ];

    // Данные для заголовков таблицы
    const columns: ColumnsType<DataType> = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Количество',
            dataIndex: 'quantity',
            key: 'quantity',
            sorter: (a, b) => a.quantity - b.quantity,
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
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Валюта',
            dataIndex: 'currency',
            key: 'currency',
            sorter: (a, b) => a.currency.localeCompare(b.currency),
        },
    ];

    const rowSelection = {
        onChange: (_selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            setSelectedRows(selectedRows)
        },
    };

    const handleClick = () => {
        alert('!!!')
    }

    useEffect(() => {
        if (selectedRows.length !== 0) {
            const sum = selectedRows.reduce((sum, row) => sum + row.quantity, 0);
            setTotal(sum);
        } else {
            setTotal(0)
        }
    }, [selectedRows])

    return (
        <Space direction='vertical' style={{ display: 'flex' }}>
            <TableAntd dataSource={dataSource} columns={columns} pagination={false} rowSelection={rowSelection} />
            <Typography.Text strong>Общее количество: {total}</Typography.Text>
            {
                total > 0 && <Button type="primary" onClick={handleClick}>Аннулировать</Button>
            }
        </Space>
    )
}