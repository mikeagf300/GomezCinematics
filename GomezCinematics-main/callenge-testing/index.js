class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        return total - (total * (porcentaje / 100));
    }
}

module.exports = CarritoCompra;

