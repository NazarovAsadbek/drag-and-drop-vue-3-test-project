// The id was taken from the web api method of the crypto.randomUUID(),
// but was removed due to the fact that it is not supported by node.js versions 16 and below

export function ProductList() {
    return [
        {
            id: 'd1f92b68-14c6-47e5-a16e-fe76c552b9cb',
            name: 'Mastercard',
            children: [
                {id: '6eb368a3-7acb-486c-b122-634ba0b3bf57', name: 'Mastercard (Standart)'},
                {id: '931816c7-06e5-45f0-b97a-7ca479207c0c', name: 'Mastercard (World)'},
                {id: 'fec49964-19f7-40cd-973d-c3a171d5a1f1', name: 'Mastercard (Platinum)'},
                {id: '99182b9e-300c-44a7-99fe-baf81bf87e78', name: 'Mastercard (Gold)'},
                {id: 'df57e670-642f-4626-8c98-aad3b634be99', name: 'Master card'},
                {id: '0483d692-0a0f-4dfb-9b5f-461b4414fdf4', name: 'Mastercard (Standart)'},
                {id: '78f12006-d631-42eb-875c-0e14de9dff9a', name: 'Mastercard (World)'},
                {id: '257d09c0-6d65-466a-ac13-ed6e268a0b0e', name: 'Mastercard (Platinum)'},
                {id: '561a6b10-04ea-4651-848d-01be06960c76', name: 'Mastercard (Gold)'},
                {id: 'bb4c2a60-1df1-4c37-8c70-0cff98a31bc5', name: 'Master card'},
                {id: '84352c8a-2f11-4762-b6ae-2a1a57da9357', name: 'Mastercard (Platinum)'},
                {id: '4c36e6f3-c814-48df-a42b-b8a0194cc261', name: 'Mastercard (Gold)'}
            ]
        },
        {
            id: '212900c6-1c05-42f1-b01f-7aa26db4b445',
            name: 'вклады',
            children: [
                {id: '1cbe3b1a-f380-4b79-92a1-19d9d99f0c88', name: 'Максимал фойда (Нац. валюта)'},
                {id: 'f9fcc6ab-f44f-480b-9a11-23b2b3354159', name: 'On-line (Нац. валюта)'},
                {id: 'b23a2f40-de5f-48db-afe5-38ba9aa09538', name: 'Аванс (Нац. валюта)'},
                {id: '55fb95bd-a3aa-428e-873a-b078d2c97a7a', name: 'Максимал фойда'},
                {id: '9ffc569d-a2b4-4381-94f6-8db6230202aa', name: 'On-line (Ин. валюта)'},
                {id: 'c7fc6255-78d7-449f-bd3b-e9a7e191b6a9', name: 'Аванс (Ин. валюта)'}
            ]
        },
        {
            id: 'adf461b7-f80c-4558-b2f4-cc707fb43d69',
            name: 'отправка в чат бот',
            children: []
        },
        {
            id: 'a0d9212e-f96a-46bf-b287-af862296021b',
            name: 'Кредиты',
            children: []
        }
    ]
}