const CarritoCompra = require("../index");

describe("Class CarritoCompra", () => {
    it("la clase CarritoCompra debe existir", () => {
        expect(typeof CarritoCompra).toBe('function');
    });

    it("puede instanciar objetos de su clase", () => {
        const carrito = new CarritoCompra();
        expect(carrito).toBeInstanceOf(CarritoCompra);
    });

    it("debe tener los siguientes métodos: ", () => {
        expect(CarritoCompra.prototype.constructor).toBeDefined();
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
    });
});

describe("Constructor: ", () => {
    it("Inicializa el carrito como un array vacío", () => {
        const carrito = new CarritoCompra();
        expect(carrito.productos).toEqual([]);
    });
});

describe("agregarProducto: ", () => {
    it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
        const carrito = new CarritoCompra();
        const nuevoProducto = {
            nombre: "Tv",
            precio: 200,
            cantidad: 2,
            marca: "Samsung"
        };
        carrito.agregarProducto(nuevoProducto);

        expect(carrito.productos).toEqual([nuevoProducto]);
        expect(carrito.productos.length).toBe(1);
    });

    it("Recibe muchos productos y los agrega al carrito", () => {
        const carrito = new CarritoCompra();
        const arrayProductos = [
            { nombre: "Laptop", precio: 1000, cantidad: 1, marca: "Apple" },
            { nombre: "Phone", precio: 800, cantidad: 3, marca: "Samsung" }
        ];
        arrayProductos.forEach(producto => carrito.agregarProducto(producto));

        expect(carrito.productos).toEqual(arrayProductos);
        expect(carrito.productos.length).toBe(2);
    });
});

describe("calcularTotal: ", () => {
    it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
        const carrito = new CarritoCompra();
        const arrayProductos = [
            { nombre: "Laptop", precio: 1000, cantidad: 1, marca: "Apple" },
            { nombre: "Phone", precio: 800, cantidad: 3, marca: "Samsung" }
        ];
        arrayProductos.forEach(producto => carrito.agregarProducto(producto));

        const total = carrito.calcularTotal();
        expect(total).toBe(1000 + 800 * 3);
    });
});

describe("aplicarDescuento: ", () => {
    it("Aplica un descuento al total de la compra según el porcentaje especificado", () => {
        const carrito = new CarritoCompra();
        const arrayProductos = [
            { nombre: "Laptop", precio: 1000, cantidad: 1, marca: "Apple" },
            { nombre: "Phone", precio: 800, cantidad: 3, marca: "Samsung" }
        ];
        arrayProductos.forEach(producto => carrito.agregarProducto(producto));

        const totalConDescuento = carrito.aplicarDescuento(10); // 10% de descuento
        const totalSinDescuento = 1000 + 800 * 3;
        const descuentoEsperado = totalSinDescuento * 0.9;

        expect(totalConDescuento).toBe(descuentoEsperado);
    });
});
