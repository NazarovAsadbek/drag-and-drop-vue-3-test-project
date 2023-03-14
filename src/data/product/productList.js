export function ProductList() {
    return [
        {
            id: crypto.randomUUID(),
            name: 'Mastercard',
            children: [
                {id: crypto.randomUUID(), name: 'Mastercard (Standart)'},
                {id: crypto.randomUUID(), name: 'Mastercard (World)'},
                {id: crypto.randomUUID(), name: 'Mastercard (Platinum)'},
                {id: crypto.randomUUID(), name: 'Mastercard (Gold)'},
                {id: crypto.randomUUID(), name: 'Master card'},
                {id: crypto.randomUUID(), name: 'Mastercard (Standart)'},
                {id: crypto.randomUUID(), name: 'Mastercard (World)'},
                {id: crypto.randomUUID(), name: 'Mastercard (Platinum)'},
                {id: crypto.randomUUID(), name: 'Mastercard (Gold)'},
                {id: crypto.randomUUID(), name: 'Master card'},
                {id: crypto.randomUUID(), name: 'Mastercard (Platinum)'},
                {id: crypto.randomUUID(), name: 'Mastercard (Gold)'}
            ]
        },
        {
            id: crypto.randomUUID(),
            name: 'вклады',
            children: [
                {id: crypto.randomUUID(), name: 'Максимал фойда (Нац. валюта)'},
                {id: crypto.randomUUID(), name: 'On-line (Нац. валюта)'},
                {id: crypto.randomUUID(), name: 'Аванс (Нац. валюта)'},
                {id: crypto.randomUUID(), name: 'Максимал фойда'},
                {id: crypto.randomUUID(), name: 'On-line (Ин. валюта)'},
                {id: crypto.randomUUID(), name: 'Аванс (Ин. валюта)'}
            ]
        },
        {
            id: crypto.randomUUID(),
            name: 'отправка в чат бот',
            children: []
        },
        {
            id: crypto.randomUUID(),
            name: 'Кредиты',
            children: []
        }
    ]
}