import { Table as TableAntd, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

export const Table: React.FC = () => {

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    // Данные для заголовков таблицы
    const columns: ColumnsType<DataType> = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Количество',
            dataIndex: 'quantity',
            key: 'quantity',
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
        },
        {
            title: 'Валюта',
            dataIndex: 'currency',
            key: 'currency',
        },
    ];

    return (
        <div>
            <TableAntd dataSource={dataSource} columns={columns} pagination={false} />
            <Button type="primary">Аннулировать</Button>
        </div>
    )
}