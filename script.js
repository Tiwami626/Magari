document.addEventListener("DOMContentLoaded", function() {
    const carList = document.getElementById('carList');
    const makeFilter = document.getElementById('makeFilter');
    const modelFilter = document.getElementById('modelFilter');
    const searchInput = document.getElementById('searchInput');
    const filterBtn = document.getElementById('filterBtn');
  
    // Dummy car data (replace with real data)
    const cars = [
      { make: 'Toyota', model: 'Camry', price: 25000 },
      { make: 'Honda', model: 'Accord', price: 27000 },
      { make: 'Ford', model: 'Fusion', price: 23000 },
      // Add more cars as needed
    ];
  
    // Populate car list
    function populateCars(cars) {
      carList.innerHTML = '';
      cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h2>${car.make} ${car.model}</h2>
          <p>Price: $${car.price}</p>
        `;
        carList.appendChild(card);
      });
    }
  
    // Filter cars based on selected make and model
    function filterCars() {
      let filteredCars = cars.filter(car => {
        const make = makeFilter.value;
        const model = modelFilter.value;
        const search = searchInput.value.toLowerCase();
        return (make === '' || car.make === make) && (model === '' || car.model === model) && (car.make.toLowerCase().includes(search) || car.model.toLowerCase().includes(search));
      });
      populateCars(filteredCars);
    }
  
    // Populate models based on selected make
    makeFilter.addEventListener('change', function() {
      const selectedMake = this.value;
      const models = [...new Set(cars.filter(car => car.make === selectedMake).map(car => car.model))];
      modelFilter.innerHTML = '<option value="">All Models</option>';
      models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelFilter.appendChild(option);
      });
    });
  
    // Apply filters when the filter button is clicked
    filterBtn.addEventListener('click', filterCars);
  
    // Initial population of cars
    populateCars(cars);
  });
  