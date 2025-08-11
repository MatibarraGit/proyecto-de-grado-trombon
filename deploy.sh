#!/bin/bash
set -e  # Si algo falla, detener el script inmediatamente

echo "🚀 Iniciando despliegue de Next.js en EasyPanel..."

# Detectar la carpeta raíz del proyecto
# Si EasyPanel lo clona en otra ruta, esto igual encuentra el package.json
PROJECT_DIR=$(find / -type f -name "package.json" 2>/dev/null | grep -v "node_modules" | head -n 1 | xargs dirname)

if [ -z "$PROJECT_DIR" ]; then
  echo "❌ No se encontró package.json. Verifica que el repositorio se clonó correctamente."
  exit 1
fi

echo "📂 Proyecto encontrado en: $PROJECT_DIR"
cd "$PROJECT_DIR"

echo "📦 Instalando dependencias..."
npm install --force

echo "🏗 Construyendo la app Next.js..."
npm run build

echo "✅ Despliegue completado."
