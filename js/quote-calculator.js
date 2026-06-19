(function () {
    var calculator = document.querySelector("[data-quote-calculator]");

    if (!calculator) {
        return;
    }

    var currency = new Intl.NumberFormat("en-ZA", {
        style: "currency",
        currency: "ZAR",
        maximumFractionDigits: 0
    });

    var service = document.getElementById("quote-service");
    var users = document.getElementById("quote-users");
    var sites = document.getElementById("quote-sites");
    var support = document.getElementById("quote-support");
    var timeline = document.getElementById("quote-timeline");
    var total = document.getElementById("quote-total");
    var breakdown = document.getElementById("quote-breakdown");
    var calculateButton = document.getElementById("calculate-quote");
    var estimatedQuote = document.getElementById("estimated-quote");
    var form = document.getElementById("quote-form");
    var serviceNeeded = document.getElementById("service-needed");
    var businessSize = document.getElementById("business-size");
    var timelineField = document.getElementById("timeline");

    function numberFromInput(input, fallback) {
        var value = Number(input.value);
        return Number.isFinite(value) && value > 0 ? value : fallback;
    }

    function selectedText(select) {
        return select.options[select.selectedIndex].text;
    }

    function calculateQuote() {
        var selectedService = service.options[service.selectedIndex];
        var base = Number(selectedService.dataset.base);
        var perDevice = Number(selectedService.dataset.perDevice);
        var userCount = numberFromInput(users, 1);
        var siteCount = numberFromInput(sites, 1);
        var supportMultiplier = Number(support.value);
        var timelineMultiplier = Number(timeline.value);
        var additionalSiteCost = Math.max(siteCount - 1, 0) * 1800;
        var estimate = (base + (userCount * perDevice) + additionalSiteCost) * supportMultiplier * timelineMultiplier;
        var roundedEstimate = Math.round(estimate / 100) * 100;
        var formattedEstimate = currency.format(roundedEstimate).replace(/\s/g, " ");
        var serviceLabel = selectedText(service);
        var supportLabel = selectedText(support);
        var timelineLabel = selectedText(timeline);
        var userLabel = userCount === 1 ? "user/device" : "users/devices";
        var siteLabel = siteCount === 1 ? "site" : "sites";

        total.textContent = formattedEstimate;
        breakdown.textContent = "Estimated " + serviceLabel + " for " + userCount + " " + userLabel + " across " + siteCount + " " + siteLabel + ", with " + supportLabel + " support and a " + timelineLabel.toLowerCase() + " timeline.";
        estimatedQuote.value = formattedEstimate + " - " + breakdown.textContent;

        if (serviceNeeded && !serviceNeeded.value.trim()) {
            serviceNeeded.value = serviceLabel;
        }

        if (businessSize && !businessSize.value.trim()) {
            businessSize.value = userCount + " " + userLabel + ", " + siteCount + " " + siteLabel;
        }

        if (timelineField && !timelineField.value.trim()) {
            timelineField.value = timelineLabel;
        }

        return {
            amount: formattedEstimate,
            summary: breakdown.textContent
        };
    }

    function fieldValue(id) {
        var field = document.getElementById(id);
        return field && field.value.trim() ? field.value.trim() : "Not provided";
    }

    function emailEnquiry(event) {
        event.preventDefault();

        if (!estimatedQuote.value) {
            calculateQuote();
        }

        var businessName = fieldValue("business-name");
        var subject = encodeURIComponent("Quote enquiry - " + businessName);
        var bodyLines = [
            "Business Name: " + businessName,
            "Contact Person: " + fieldValue("contact-person"),
            "Email Address: " + fieldValue("email"),
            "Phone Number: " + fieldValue("phone"),
            "",
            "Service Needed: " + fieldValue("service-needed"),
            "Business Size: " + fieldValue("business-size"),
            "Project Timeline: " + fieldValue("timeline"),
            "Business Location: " + fieldValue("location"),
            "Estimated Quote: " + (estimatedQuote.value || "Not calculated"),
            "",
            "Additional Information:",
            fieldValue("message")
        ];

        window.location.href = "mailto:Info@CDAfrica.tech?subject=" + subject + "&body=" + encodeURIComponent(bodyLines.join("\n"));
    }

    calculateButton.addEventListener("click", calculateQuote);
    service.addEventListener("change", calculateQuote);
    users.addEventListener("input", calculateQuote);
    sites.addEventListener("input", calculateQuote);
    support.addEventListener("change", calculateQuote);
    timeline.addEventListener("change", calculateQuote);

    if (form) {
        form.addEventListener("submit", emailEnquiry);
    }
})();
