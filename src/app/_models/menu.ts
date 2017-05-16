export class Menu {
    name?: string;
    submenus: Array<Submenu>;
}

export class Submenu {
    name?: string;
    opciones?: Array<Opciones>;
}

export class Opciones {
    name?: string;
}
