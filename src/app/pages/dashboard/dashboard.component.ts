import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  alertasStock = [
    { nombre: 'Aceite de Oliva Extra Virgen', tipo: 'Insumo', stock: 5, min: 20 },
    { nombre: 'Harina de Trigo Pastelera', tipo: 'Materia Prima', stock: 8, min: 25 },
    { nombre: 'Tablas de Porcelana', tipo: 'Utensilios', stock: 12, min: 20 },
    { nombre: 'Cafetera Industrial', tipo: 'Equipo', stock: 1, min: 3 },
    { nombre: 'Azúcar Refinada', tipo: 'Insumo', stock: 15, min: 40 },
  ];

  movimientos = [
    { producto: 'Harina de Panadería', tipo: 'Entrada', usuario: 'Ana García', cantidad: 150, fecha: '2025-01-15' },
    { producto: 'Aceite Vegetal', tipo: 'Salida', usuario: 'Carlos López', cantidad: -10, fecha: '2025-01-15' },
    { producto: 'Vajilla Nueva', tipo: 'Entrada', usuario: 'María Henríquez', cantidad: 24, fecha: '2025-01-14' },
    { producto: 'Ingredientes Panadería', tipo: 'Salida', usuario: 'Juan Pérez', cantidad: -15, fecha: '2025-01-14' },
    { producto: 'Batidora Industrial', tipo: 'Préstamo', usuario: 'Sofia Marín', cantidad: 1, fecha: '2025-01-12' },
  ];

  presupuesto = [
    { label: 'Presupuesto Utilizado', valor: '$52,300,000', porcentaje: 62, sub: '62% del presupuesto trimestral', color: 'bar-green' },
    { label: 'Compras Programadas', valor: '$18,200,000', porcentaje: 79, sub: '79% pendiente en compras', color: 'bar-blue' },
    { label: 'Reserva de Emergencia', valor: '$12,500,000', porcentaje: 105, sub: '105% para imprevistos', color: 'bar-orange' },
  ];
}
