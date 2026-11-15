export const Form = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-4 text-center">registrar producto</h2>
      <div className="my-4 bg-gray-200 p-5 rounded mx-auto mb-4 w-1/2 border">
        <input
          className="p-2 border rounded bg-white w-full mb-4"
          type="text"
          name="nombre del producto"
          placeholder="ingresa el nombre del producto"
        />
        <input
          className="p-2 border rounded bg-white w-full mb-4"
          type="text"
          name="precio del producto"
          placeholder="ingresa el precio del producto"
        />
        <button
          className="bg-sky-700 px-4 py-2 rounded text-white hover:bg-sky-900 cursor-pointer"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};