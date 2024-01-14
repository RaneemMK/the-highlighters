// Function to fetch and display nail spa services based on gender
function displayNailSpaServices() {
    fetch('j.json')
        .then(response => response.json())
        .then(data => {
            // Filter services by gender
            const filteredServicesFemale = data.filter(service => service.gender === 'female');
            const filteredServicesMale = data.filter(service => service.gender === 'male');

            // Female section
            let contentFS = '';
            filteredServicesFemale.forEach(service => {
                contentFS += `<p><a href="${service.url}" class="service-link">${service.service}</a></p>`;
            });

            let contentFP = '';
            filteredServicesFemale.forEach(service => {
                contentFP += `<p>${service.price}</p>`;
            });

            // Male section
            let contentMS = '';
            filteredServicesMale.forEach(service => {
                contentMS += `<p><a href="${service.url}" class="service-link">${service.service}</a></p>`;
            });

            let contentMP = '';
            filteredServicesMale.forEach(service => {
                contentMP += `<p>${service.price}</p>`;
            });

            

            // Female  content
            document.getElementById('FS').innerHTML = contentFS;
            document.getElementById('FP').innerHTML = contentFP;

            // Male  content
            document.getElementById('MS').innerHTML = contentMS;
            document.getElementById('MP').innerHTML = contentMP;

        })
        .catch(error => {
            console.error('Error fetching the nail spa services:', error);
        });
}

// Example usage: Display only female services
displayNailSpaServices();