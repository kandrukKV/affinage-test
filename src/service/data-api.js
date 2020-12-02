class DataApi {
  async getData() {
    const res = await fetch(`https://swapi.dev/api/films/1/`);

    if (!res.ok) {
      throw new Error(`Error data`)
    }

    return await res.json();
  }
}

export default DataApi;
