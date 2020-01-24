export class Room {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    price: number;

    constructor(id: string, name: string, description: string, categoryId: string, price: string) {
        this.id = Number.parseInt(id, 10);
        this.name = name;
        this.description = description;
        this.categoryId = Number.parseInt(categoryId, 10);
        this.price = Number.parseInt(price, 10);
    }
}
