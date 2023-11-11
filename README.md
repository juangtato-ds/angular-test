**Table of Contents**

- [Angular Test](#angular-test)
  - [Tareas](#tareas)
    - [Tarea: página /position](#tarea-página-position)
    - [Tarea: página /overall](#tarea-página-overall)


# Angular Test

Ejercicio práctico sobre aplicación Angular 17.

## Tareas

El objetivo principal de las tareas es crear tres gráficas con información que, en un escenario real, sería proporcionada por un servidor.
Las respuestas del servidor se simularán mediante el uso de assets que están disponibles en esta aplicación.

> [!IMPORTANT]
> **Esta información deberá ser consultada como si se tratara de un backend REST.**

Se puede modificar el proyecto a placer, no existe limitación sobre los cambios que se consideren oportunos.

> [!NOTE]
> **No es indispensable terminar las dos tareas al 100%.** El objetivo es identificar la forma de trabajar con el código.

### Tarea: página /position

Crear una página que se cargue cuando se acceda a la ruta `/position`.

Esta página deberá consultar los **gastos de John**. Esta información se encuentra en el fichero [john_expenses.json](src/assets/data/john_expenses.json).
Con esta información se deberá presentar en la página dos gráficas:
1. Una gráfica **circular** agrupando los **gastos por categoría**. Es decir, cada sector representará el gasto total en una categoría.
2. Una gráfica de **barras** con el **gasto total de cada mes** (nótese que los datos se corresponden a un único año).

### Tarea: página /overall

Crear una página que se cargue cuando se acceda a la ruta `/overall`.

Esta página deberá mostar la información de gasto de tres personas. Esta información se encuentra en el fichero [overall_expenses.json](src/assets/data/overall_expenses.json). Con esta información se deberá presentar **una única gráfica**.

**La gráfica deberá mostrar por cada mes el gasto individual de cada persona y la media de gasto.**
