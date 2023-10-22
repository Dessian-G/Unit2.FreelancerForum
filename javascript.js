const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    
    { name: "Carol", price: 70, occupation: "programmer" },
    
  ];

  document.addEventListener('DOMContentLoaded', function () {
    const freelancerList = document.getElementById('freelancer-list');
    const averagePriceSpan = document.getElementById('average-price');

    const freelancers = [];
    console.log(freelancerList)
    
    // Function to calculate and update the average starting price
    const updateAveragePrice = () => {
        const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
        const average = total / freelancers.length;
        averagePriceSpan.textContent = `$${average.toFixed(2)}`;
    };

    // Function to add a new freelancer to the list
    const addFreelancer = (name, occupation, price) => {
        const li = document.createElement('li');
        li.textContent = `${name}, ${occupation}, Starting Price: $${price.toFixed(2)}`;
        freelancerList.appendChild(li);

        // Add the freelancer to the list and update the average
        freelancers.push({ name, occupation, price });
        updateAveragePrice();
    };

    // Simulate the appearance of new freelancers
    setTimeout(function() {
        addFreelancer('Alice', 'Writer', 30);
    }, 200);

    setTimeout(function() {
        addFreelancer('Bob', 'Teacher', 50);
    }, 400);

    setTimeout(function() {
        addFreelancer('Carol', 'Programmer', 70);
    }, 600);
});
