class myPets {
  constructor(ayax, ozzy, copy, toby, perla, falcor, zafiro, minina, fufy) {
    this.ayax = ayax;
    this.ozzy = ozzy;
    this.copy = copy;
    this.toby = toby;
    this.perla = perla;
    this.falcor = falcor;
    this.zafiro = zafiro;
    this.minina = minina;
    this.fufy = fufy;
  }
}

class myPetsBuilder {
  setAyax(ayax) {
    this.ayax = ayax;
    return this;
  }

  setOzzy(ozzy) {
    this.ozzy = ozzy;
    return this;
  }

  setCopy(copy) {
    this.copy = copy;
    return this;
  }

  setToby(toby) {
    this.toby = toby;
    return this;
  }

  setPerla(perla) {
    this.perla = perla;
    return this;
  }

  setFalcor(falcor) {
    this.falcor = falcor;
    return this;
  }

  setZafiro(zafiro) {
    this.zafiro = zafiro;
    return this;
  }

  setMinina(minina) {
    this.minina = minina;
    return this;
  }

  setFufy(fufy) {
    this.fufy = fufy;
    return this;
  }

  build() {
    return new myPets(
      this.ayax,
      this.ozzy,
      this.copy,
      this.toby,
      this.perla,
      this.falcor,
      this.zafiro,
      this.minina,
      this.fufy
    );
  }
}

const pets = new myPetsBuilder()
  .setAyax("tito")
  .setOzzy("Ricardito")
  .setCopy("Copito")
  .setToby("Gumor")
  .setPerla("Perla")
  .setFalcor("falcorrrr")
  .setZafiro("zafirex")
  .setMinina("mininis")
  .setFufy("fufylis");

console.log(pets);
