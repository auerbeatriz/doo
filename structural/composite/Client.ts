import { Menu, MenuItem } from "./Components"

/** Criando produtos do menu
 *  Note que eles possuem a mesma interface
 */
const pratos = [
    {name: "Alcachofra", price: 40},
    {name: "Salmão grelhado", price: 85},
    {name: "Carbonara", price: 50},
]

const bebidas = [
    {name: "Moscow Mule", price: 34.9},
    {name: "Mojito", price: 28},
    {name: "Refrigerante", price: 12},
]

/** Criando menus
 *  Note que, mesmo usando listas diferentes, 
 *  o código é o mesmo para ambos
 */
const menuPratosPrincipais:Menu = new Menu("Pratos Principais")
const menuBebidas:Menu = new Menu("Bebidas")

pratos.forEach(prato => {
    const item:MenuItem = new MenuItem(prato.name, prato.price)
    menuPratosPrincipais.Add(item)
})

bebidas.forEach(bebida => {
    const item:MenuItem = new MenuItem(bebida.name, bebida.price)
    menuBebidas.Add(item)
})

/** Criando o menu principal com os submenus
 */
const menuPrincipal:Menu = new Menu("Menu Principal")
menuPrincipal.Add(menuPratosPrincipais)
menuPrincipal.Add(menuBebidas)

menuPrincipal.Display()
