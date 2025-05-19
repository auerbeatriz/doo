export interface IMenuComponent {
    Display(indent?: string): void
    Add(component: IMenuComponent): void
}

export class MenuItem implements IMenuComponent {
    private name: string
    private price: number

    constructor(name:string, price: number) {
        this.name = name
        this.price = price
    } 

    public Display(indent: string = ""): void {
        console.log(`${indent}- ${this.name} (R$ ${this.price.toFixed(2)})`)
    }

    public Add(_: IMenuComponent): void {
        console.log(`Não é possível adicionar itens a ${this.name}, pois é um item de menu.`)
    }
}

export class Menu implements IMenuComponent {
    private name: string
    private menuComponents: IMenuComponent[] = []

    constructor(name:string) {
        this.name = name
    }

    public Display(indent: string = ""): void {
        console.log(`${indent}+ ${this.name}`)
        for (const component of this.menuComponents) {
            component.Display(indent + "  ") // aumenta o nível de indentação
        }
    }

    public Add(item: IMenuComponent): void {
        this.menuComponents.push(item)
    }

    public remove(item: IMenuComponent): void {
        this.menuComponents = this.menuComponents.filter(e => e !== item)
    }

    public getItems(): IMenuComponent[] {
        return this.menuComponents
    }

    public displayItem(item: IMenuComponent): void {
        item.Display()
    }

    public execute(): void {
        console.log("Menu is available to customers. Welcome!")
    }
}