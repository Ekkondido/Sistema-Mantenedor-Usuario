# Sistema Mantenedor de Usuarios

## Integrantes

* Marcelo Mancilla
* Joaquin Medina

---

## Descripción del Proyecto

Sistema web Full Stack desarrollado para la administración de usuarios.

La aplicación permite:

* Iniciar sesión mediante correo y contraseña.
* Listar usuarios registrados.
* Crear usuarios.
* Editar usuarios.
* Eliminar usuarios.

La solución está compuesta por un Frontend desarrollado en React y un Backend desarrollado en Spring Boot conectado a una base de datos PostgreSQL mediante Supabase.

---

## Tecnologías Utilizadas

### Frontend

* React
* React Router DOM
* Axios
* Vite

### Backend

* Spring Boot
* Spring Data JPA
* Maven

### Base de Datos

* PostgreSQL (Supabase)

### Control de Versiones

* Git
* GitHub

---

## Estructura del Proyecto

/frontend

/backend

/database

README.md

---

## Dependencias Frontend

Instalar dependencias:

```bash
npm install
npm install axios
npm install react-router-dom
```

---

## Dependencias Backend

Dependencias configuradas mediante Maven en el archivo:

```text
pom.xml
```

---

## Puertos Utilizados

### Frontend

```text
http://localhost:5173
```

### Backend

```text
http://localhost:8080
```

---

## Ejecución Frontend

Ingresar a la carpeta frontend:

```bash
cd frontend
```

Ejecutar:

```bash
npm install
npm run dev
```

---

## Ejecución Backend

Ingresar a la carpeta backend:

```bash
cd backend
```

Ejecutar:

```bash
mvn spring-boot:run
```

o

```bash
./mvnw spring-boot:run
```

---

## Configuración Base de Datos

La aplicación utiliza PostgreSQL mediante Supabase.

La conexión se configura en:

```text
backend/src/main/resources/application.properties
```

---

## Funcionalidades Implementadas

### Login

Permite autenticar usuarios utilizando correo electrónico y contraseña.

### Mantenedor de Usuarios

* Crear usuario
* Listar usuarios
* Editar usuario
* Eliminar usuario

---

## API REST Utilizada

### Login

```http
POST /api/login
```

### Listar Usuarios

```http
GET /api/usuarios
```

### Crear Usuario

```http
POST /api/usuarios
```

### Editar Usuario

```http
PUT /api/usuarios/{id}
```

### Eliminar Usuario

```http
DELETE /api/usuarios/{id}
```

---

## Credenciales de Prueba

Correo:

```text
juan@test.com
```

Contraseña:

```text
1234
```

---

## Repositorio GitHub

Proyecto desarrollado utilizando Git y GitHub para el control de versiones y trabajo colaborativo.
