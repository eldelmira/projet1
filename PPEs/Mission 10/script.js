function calculate() {
    let rows = document.querySelectorAll("#invoice-lines tr");
    let subtotal = 0;

    rows.forEach(row => {
        let qty = parseFloat(row.querySelector("td:nth-child(2) input").value) || 0;
        let unitPrice = parseFloat(row.querySelector("td:nth-child(3) input").value) || 0;
        let total = qty * unitPrice;

        row.querySelector(".line-total").textContent = total.toFixed(2);
        subtotal += total;
    });

    document.getElementById("subtotal").textContent = subtotal.toFixed(2);

    let discount = parseFloat(document.getElementById("discount").value) || 0;
    let subtotalAfterDiscount = subtotal - (subtotal * discount / 100);

    document.getElementById("subtotal-discounted").textContent = subtotalAfterDiscount.toFixed(2);

    let taxRate = parseFloat(document.getElementById("tax-rate").value) || 0;
    let taxTotal = subtotalAfterDiscount * taxRate / 100;

    document.getElementById("tax-total").textContent = taxTotal.toFixed(2);

    let shipping = parseFloat(document.getElementById("shipping").value) || 0;
    let totalDue = subtotalAfterDiscount + taxTotal + shipping;

    document.getElementById("total-due").textContent = totalDue.toFixed(2);
}

function addLine() {
    let tableBody = document.getElementById("invoice-lines");
    let newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td><input type="text"></td>
        <td><input type="number" min="0"></td>
        <td><input type="number" min="0"></td>
        <td class="line-total">0.00</td>
    `;

    tableBody.appendChild(newRow);
}

function autoFill() {
    let sampleData = [
        { description: "Produit A", quantity: 5, price: 50 },
        { description: "Produit B", quantity: 3, price: 30 }
    ];

    let tableBody = document.getElementById("invoice-lines");
    tableBody.innerHTML = "";

    sampleData.forEach(item => {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="text" value="${item.description}"></td>
            <td><input type="number" value="${item.quantity}" min="0"></td>
            <td><input type="number" value="${item.price}" min="0"></td>
            <td class="line-total">${(item.quantity * item.price).toFixed(2)}</td>
        `;
        tableBody.appendChild(newRow);
    });

    calculate();
}

function resetForm() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    document.getElementById("invoice-lines").innerHTML = `
        <tr>
            <td><input type="text"></td>
            <td><input type="number" min="0"></td>
            <td><input type="number" min="0"></td>
            <td class="line-total">0.00</td>
        </tr>
    `;
    calculate();
}


async function generatePDF() {
    const { jsPDF } = window.jspdf;

    // Création d'un document PDF
    const doc = new jsPDF();

    // Ajout des informations générales
    doc.setFontSize(16);
    doc.text("Facture", 10, 10);

    // Informations de la société
    doc.setFontSize(12);
    doc.text("Nom de la compagnie : " + document.querySelector(".company-info h2").innerText, 10, 20);
    doc.text("Adresse postale : " + document.querySelector(".company-info p:nth-child(2)").innerText, 10, 30);
    doc.text("Détails du contact : " + document.querySelector(".company-info p:nth-child(3)").innerText, 10, 40);

    // Informations du destinataire
    doc.text("Destinataire :", 10, 50);
    doc.text("Nom : " + document.querySelector(".address input:nth-of-type(1)").value, 10, 60);
    doc.text("Nom de la société : " + document.querySelector(".address input:nth-of-type(2)").value, 10, 70);
    doc.text("Adresse postale : " + document.querySelector(".address input:nth-of-type(3)").value, 10, 80);
    doc.text("Téléphone : " + document.querySelector(".address input:nth-of-type(4)").value, 10, 90);
    doc.text("Email : " + document.querySelector(".address input:nth-of-type(5)").value, 10, 100);

    // Tableau des articles
    const tableStartY = 110;
    let currentY = tableStartY;

    doc.text("Tableau des articles :", 10, currentY);
    currentY += 10;

    // Ajouter les en-têtes du tableau
    doc.text("DESCRIPTION", 10, currentY);
    doc.text("QUANTITÉ", 70, currentY);
    doc.text("PRIX UNITAIRE", 110, currentY);
    doc.text("TOTAL", 160, currentY);
    currentY += 10;

    // Récupération des données du tableau
    const rows = document.querySelectorAll("#invoice-lines tr");
    rows.forEach(row => {
        const description = row.querySelector("td:nth-child(1) input").value;
        const quantity = row.querySelector("td:nth-child(2) input").value;
        const unitPrice = row.querySelector("td:nth-child(3) input").value;
        const total = row.querySelector("td:nth-child(4)").innerText;

        doc.text(description, 10, currentY);
        doc.text(quantity, 70, currentY);
        doc.text(unitPrice, 110, currentY);
        doc.text(total, 160, currentY);

        currentY += 10;
        if (currentY > 280) { // Gérer le débordement sur une nouvelle page
            doc.addPage();
            currentY = 20;
        }
    });

    // Résumé des totaux
    currentY += 10;
    doc.text("Résumé :", 10, currentY);
    currentY += 10;
    doc.text("Sous-total : " + document.getElementById("subtotal").innerText, 10, currentY);
    doc.text("Remise : " + document.getElementById("discount").value + "%", 70, currentY);
    currentY += 10;
    doc.text("Total après remise : " + document.getElementById("subtotal-discounted").innerText, 10, currentY);
    doc.text("Taux de taxe : " + document.getElementById("tax-rate").value + "%", 70, currentY);
    currentY += 10;
    doc.text("Taxe totale : " + document.getElementById("tax-total").innerText, 10, currentY);
    doc.text("Expédition : " + document.getElementById("shipping").value, 70, currentY);
    currentY += 10;
    doc.text("Total dû : " + document.getElementById("total-due").innerText, 10, currentY);

    // Télécharger le fichier PDF
    doc.save("facture.pdf");
}
