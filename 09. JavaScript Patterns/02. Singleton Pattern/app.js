
const  Singletong = (() => {

  let instance;

  function createInstace() {

    const object = new Object({ name: 'Brad' });
    return object;
  }
  return {

    getInstance() {

        if(!instance) {

            instance = createInstance();
        }
        return instance;
    }
  }
})();

const instanceA = Singletong.getInstance();
const instanceB = Singletong.getInstance();

console.log(instanceA === instanceB);