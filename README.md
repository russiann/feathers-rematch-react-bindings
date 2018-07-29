# feathers-rematch-react-bindings

## Instalation

```
yarn add feathers-rematch-react-bindings
or
npm install feathers-rematch-react-bindings --save
```

## Usage

```js
<Snapshot
      name="products"
      publication="expensives"
      find={siftQuery} // https://www.npmjs.com/package/sift
      renderEach={(data, idx) => (
        <div key={idx}>
          <p>renderEach:</p>
          <pre>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    />

    <Service
      name="products"
      find={{ query: {price: 2000} }}
      renderEach={(data, idx) => (
        <pre key={idx}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    />
```