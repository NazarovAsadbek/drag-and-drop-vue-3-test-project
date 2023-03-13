export function ProductList() {
    return [
        {
            id: crypto.randomUUID(),
            name: 'Mastercard',
            children: [
                'Mastercard (Standart)',
                'Mastercard (World)',
                'Mastercard (Platinum)',
                'Mastercard (Gold)',
                'Master card',
                'Mastercard (Standart)',
                'Mastercard (World)',
                'Mastercard (Platinum)',
                'Mastercard (Gold)',
                'Master card',
                'Mastercard (Platinum)',
                'Mastercard (Gold)',
            ]
        },
        {
            id: crypto.randomUUID(),
            name: 'вклады',
            children: [
                'Максимал фойда (Нац. валюта)',
                'On-line (Нац. валюта)',
                'Аванс (Нац. валюта)',
                'Максимал фойда',
                'On-line (Ин. валюта)',
                'Аванс (Ин. валюта)',
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