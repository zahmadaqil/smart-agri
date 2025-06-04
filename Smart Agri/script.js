document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        { id: "A", plant: "Mango (Mangifera indica)", trees: 10, plantingDate: "2024-01-15", lastFertilization: "2024-03-01", fertilizerType: "Organic" },
        { id: "B", plant: "Papaya (Carica papaya)", trees: 8, plantingDate: "2024-02-10", lastFertilization: "2024-03-15", fertilizerType: "Nitrogen-rich" },
        { id: "C", plant: "Banana (Musa acuminata)", trees: 12, plantingDate: "2024-01-20", lastFertilization: "2024-02-28", fertilizerType: "Compost" }
    ];

    const totalSections = sections.length;
    const totalTrees = sections.reduce((sum, section) => sum + section.trees, 0);

    document.getElementById("totalSections").textContent = totalSections;
    document.getElementById("totalTrees").textContent = totalTrees;

    const farmSectionsDiv = document.getElementById("farmSections");
    sections.forEach(section => {
        let sectionDiv = document.createElement("div");
        sectionDiv.className = "bg-green-200 p-4 rounded-lg shadow cursor-pointer";
        sectionDiv.innerHTML = `<h4 class='text-lg font-bold'>Section ${section.id}</h4>
                              <p>Plant: ${section.plant}</p>
                              <p>Planting Date: ${section.plantingDate}</p>
                              <p>Last Fertilization: ${section.lastFertilization} (${section.fertilizerType})</p>
                              <p>Trees: ${section.trees}</p>`;
        sectionDiv.onclick = function() { showTrees(section); };
        farmSectionsDiv.appendChild(sectionDiv);
    });
});

function showTrees(section) {
    const treeDetailsDiv = document.getElementById("treeDetails");
    treeDetailsDiv.innerHTML = `<h3 class='text-lg font-bold'>Section ${section.id} - ${section.plant}</h3>
                                <p>Planting Date: ${section.plantingDate}</p>
                                <p>Last Fertilization: ${section.lastFertilization} (${section.fertilizerType})</p>
                                <table class='w-full mt-4 border'>
                                    <thead>
                                        <tr>
                                            <th class='border px-4 py-2'>Tree ID</th>
                                            <th class='border px-4 py-2'>Leaf Condition</th>
                                            <th class='border px-4 py-2'>Trunk Condition</th>
                                            <th class='border px-4 py-2'>Soil Condition</th>
                                            <th class='border px-4 py-2'>Water Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${Array.from({ length: section.trees }, (_, i) => `<tr>
                                            <td class='border px-4 py-2'>${section.id}/${section.plant.split(" ")[0]}/${i+1}</td>
                                            <td class='border px-4 py-2'>Healthy</td>
                                            <td class='border px-4 py-2'>Stable</td>
                                            <td class='border px-4 py-2'>Moist</td>
                                            <td class='border px-4 py-2'>Sufficient</td>
                                        </tr>`).join('')}
                                    </tbody>
                                </table>`;
    treeDetailsDiv.classList.remove("hidden");
}

function searchSection() {
    const searchTerm = document.getElementById("searchSection").value.toUpperCase();
    const sections = document.querySelectorAll("#farmSections > div");
    sections.forEach(section => {
        const sectionId = section.querySelector("h4").textContent.split(" ")[1];
        if (sectionId.includes(searchTerm)) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);