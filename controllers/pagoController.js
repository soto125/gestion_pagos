const prisma = require('../models/prisma');

// Crear un nuevo pago
const createPago = async (req, res) => {
  try {
    const nuevoPago = await prisma.pago.create({
      data: req.body,
    });
    res.status(201).json(nuevoPago);
  } catch (error) {
    console.error('Error al crear el pago:', error);
    res.status(500).json({ error: 'Error al crear el pago' });
  }
};

// Obtener todos los pagos
const getPagos = async (req, res) => {
  try {
    const pagos = await prisma.pago.findMany();
    res.json(pagos);
  } catch (error) {
    console.error('Error al obtener pagos:', error);
    res.status(500).json({ error: 'Error al obtener pagos' });
  }
};

// Actualizar un pago
const updatePago = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    const pagoActualizado = await prisma.pago.update({
      where: { id: parseInt(id) },
      data: datosActualizados,
    });
    res.json(pagoActualizado);
  } catch (error) {
    console.error('Error al actualizar el pago:', error);
    res.status(500).json({ error: 'Error al actualizar el pago' });
  }
};

// Eliminar un pago
const deletePago = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.pago.delete({
      where: { id: parseInt(id) },
    });
    res.json({ mensaje: 'Pago eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el pago:', error);
    res.status(500).json({ error: 'Error al eliminar el pago' });
  }
};

module.exports = {
  createPago,
  getPagos,
  updatePago,
  deletePago,
};
