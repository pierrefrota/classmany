**Uma função simples e leve para manipular classes condicionais no JavaScript e React.**

---

## Instalação

Instale via NPM:

```bash
npm i classmany
```

ou via Yarn:

```bash
yarn add classmany
```

---

## Motivação

O **classmany** foi criado para resolver um problema comum em projetos React e Tailwind CSS:

> ❝Combinar várias classes de forma condicional, sem ficar escrevendo longos ternários dentro do atributo `className`.❞

Exemplo antes:

```jsx
<button
  className={`px-4 py-2 rounded ${
    active ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
  } ${disabled && "opacity-50 cursor-not-allowed"}`}
>
  Enviar
</button>
```

Com `classmany`:

```jsx
import { classmany } from "classmany";

<button
  className={classmany(
    "px-4 py-2 rounded",
    {
      "bg-blue-600 text-white": active,
      "bg-gray-100 text-gray-700": !active,
      "opacity-50 cursor-not-allowed": disabled,
    }
  )}
>
  Enviar
</button>
```

Muito mais limpo e fácil de manter.

---

## Uso básico

### Strings simples

```js
classmany("p-4", "bg-gray-100", "rounded-md");
// → "p-4 bg-gray-100 rounded-md"
```

### Arrays (são achatados automaticamente)

```js
classmany(["p-4", ["text-sm", "font-semibold"]]);
// → "p-4 text-sm font-semibold"
```

### Objetos condicionais

```js
classmany({
  "bg-green-500": true,
  "bg-red-500": false,
  "text-white": true,
});
// → "bg-green-500 text-white"
```

### Combinação mista

```js
classmany(
  "p-4",
  ["rounded-lg", "shadow"],
  {
    "bg-blue-500": isActive,
    "bg-gray-300": !isActive,
  }
);
```

---

## Exemplo em React + Tailwind

```jsx
import { classmany } from "classmany";

export default function Button({ active, disabled, children }) {
  return (
    <button
      className={classmany(
        "px-4 py-2 font-semibold rounded-lg transition-colors duration-200",
        {
          "bg-blue-600 text-white hover:bg-blue-700": active && !disabled,
          "bg-gray-200 text-gray-500 cursor-not-allowed": disabled,
          "bg-white text-gray-800 border border-gray-300": !active && !disabled,
        }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

### Resultado visual

| Estado | Classes aplicadas |
|--------|--------------------|
| `active = true` | `bg-blue-600 text-white hover:bg-blue-700` |
| `disabled = true` | `bg-gray-200 text-gray-500 cursor-not-allowed` |
| `default` | `bg-white text-gray-800 border border-gray-300` |

---

## Importação

```js
import { classmany } from "classmany";
```

---

## Teste rápido no console

```js
import { classmany } from "classmany";

console.log(
  classmany("p-4", ["rounded", "shadow"], { "bg-blue-500": true, "hidden": false })
);
// Saída: "p-4 rounded shadow bg-blue-500"
```

---

## API

```ts
function classmany(
  ...args: (string | false | null | undefined | Record<string, boolean> | (string | Record<string, boolean>)[])[]
): string
```

**Retorna:**  
Uma string única contendo todas as classes válidas concatenadas com espaço.

---

## Licença

MIT © [Pierre Frota](https://github.com/pierrefrota)
