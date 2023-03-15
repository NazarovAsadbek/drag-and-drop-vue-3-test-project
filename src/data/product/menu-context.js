// The id was taken from the web api method of the crypto.randomUUID(),
// but was removed due to the fact that it is not supported by node.js versions 16 and below

export function MenuContext() {
    return [
        {id: 'fae1f996-df3a-4221-8b1a-dcaaa5d6e13c', label: 'Редактировать', icon: "/icons/edit.svg", action: 'edit'},
        {id: '410e27f5-2113-4553-9ac0-29738e01d3f4', label: 'Удалить', icon: "/icons/trash.svg",action: 'delete'},
    ]
}