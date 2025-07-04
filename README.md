# API Taller NestJS

**Descripción**  
API RESTful para gestionar Usuarios, Categorías, Productos y Pedidos.  
Construida con NestJS, TypeORM y PostgreSQL (en Docker).

---

## 📋 Prerrequisitos

- Node.js v18+  
- npm v9+  
- Docker Desktop  
- Tu editor de codigo favorito (IDE)  

---

## ⚙️ Instalación

1. Clona el repositorio
git clone https://https://github.com/iFelise/CreacionApi.git
cd api-taller

2. Inicia el contenedor de PostgreSQL
# 2.1. Descarga la imagen oficial
   docker pull postgres:15

   # 2.2. Inicia el contenedor (si ya lo creaste antes, usa 'docker start')
   docker run --name taller-postgres \
     -e POSTGRES_USER=postgres \
     -e POSTGRES_PASSWORD=tu_contraseña \
     -e POSTGRES_DB=tallerdb \
     -p 5432:5432 -d postgres:15

3. Copia y edita las variables de entorno
cambia el nombre de .env.example a .env

Luego abre .env y completa tus valores:
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=tu_contraseña
DB_NAME=tallerdb

4. Instala dependencias y arranca la aplicación
npm install
npm run start:dev

5. Deberías ver en consola:
Servidor corriendo en http://localhost:3000

## 📂 Colección Postman

Importa la colección Postman desde el archivo `Api Taller.postman_collection.json` que esta en la raiz del proyecto.
Configura el entorno Local con la variable: baseUrl = http://localhost:3000

## 🛠️ Endpoints

Usa Postman con el entorno Local (baseUrl = http://localhost:3000) para probar:
| Recurso       | Método | Ruta             | Descripción                                |
| ------------- | ------ | ---------------- | ------------------------------------------ |
| **Usuario**   | POST   | `/usuario`       | Crear usuario                              |
|               | GET    | `/usuario`       | Listar todos los usuarios                  |
|               | GET    | `/usuario/:id`   | Obtener un usuario por ID                  |
|               | DELETE | `/usuario/:id`   | Eliminar un usuario por ID                 |
| **Categoría** | POST   | `/categoria`     | Crear categoría                            |
|               | GET    | `/categoria`     | Listar categorías                          |
|               | GET    | `/categoria/:id` | Obtener categoría por ID                   |
|               | DELETE | `/categoria/:id` | Eliminar categoría por ID                  |
| **Producto**  | POST   | `/producto`      | Crear producto (requiere `categoriaId`)    |
|               | GET    | `/producto`      | Listar productos                           |
|               | GET    | `/producto/:id`  | Obtener producto por ID                    |
|               | DELETE | `/producto/:id`  | Eliminar producto por ID                   |
| **Pedido**    | POST   | `/pedido`        | Crear pedido (`usuarioId`, `productosIds`) |
|               | GET    | `/pedido`        | Listar pedidos                             |
|               | GET    | `/pedido/:id`    | Obtener pedido por ID                      |
|               | DELETE | `/pedido/:id`    | Eliminar pedido por ID                     |

