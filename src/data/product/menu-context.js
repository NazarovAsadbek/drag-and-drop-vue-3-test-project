export function MenuContext() {
    return [
        {id: crypto.randomUUID(), label: 'Редактировать', icon: "/icons/edit.svg", action: 'edit'},
        {id: crypto.randomUUID(), label: 'Удалить', icon: "/icons/trash.svg",action: 'delete'},
    ]
}