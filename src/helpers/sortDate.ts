import type { IData } from '../types/dataType'

// Для сортировки объектов по дате
export const sortDate = (arr: IData[]): IData[] => {
    const newArr = [...arr]
    newArr.sort((a, b) => new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime())
    return newArr.map(el => {
        const formDate = new Date(el.deliveryDate)
        return {
            ...el,
            deliveryDate: formDate.toDateString()
        };
    })
}

