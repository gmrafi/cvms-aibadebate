async function searchCertificate() {
    let query = document.getElementById("searchInput").value.trim().toLowerCase();
    let resultDiv = document.getElementById("result");

    try {
        let response = await fetch("certificates.json");
        let certificates = await response.json();

        let found = certificates.find(cert => cert.cert_no.toLowerCase() === query || cert.id.toLowerCase() === query);

        if (found) {
            resultDiv.innerHTML = `
                <h1>Certificate Found ✅</h1>
                <h2><strong></strong> ${found.event_name}</h2>
                <p><strong>Debate Format & Event Type:</strong> ${found.debate_format} & ${found.event_type}</p>
                <p><strong>Event Date:</strong> ${found.event_date}</p>
                <h3>Participant Details</h3>
  <p><strong></strong></p>
                <img src="${found.photo}" alt="Debater Photo" style="max-width: 200px; max-height: 200px;">
              <p><strong>Name:</strong> ${found.name}</p>
                <p><strong>Role:</strong> ${found.role}</p>
                <p><strong>Position/Speaker:</strong> ${found.position}</p>
                <p><strong>Motion/Topic:</strong> ${found.motion_debated}</p>
                <p><strong>Team Name (For Debaters Only):</strong> ${found.team_name}</p>
                <p><strong>Organization/Institution:</strong> ${found.organization}</p>
                <p><strong>Batch & Section:</strong> ${found.batch}</p>
                <p><strong>ID:</strong> ${found.id}</p>
                <h3>Performance & Feedback</h3>
                <p><strong>Scores & Feedback:</strong> ${found.scores_feedback}</p>
                <p><strong>Judge’s Comment:</strong> ${found.judges_comment}</p>
                <p><strong>Additional Comments:</strong> ${found.comment}</p>
                <h3>Certificate Information</h3>
                <p><strong>Certificate Number:</strong> ${found.cert_no}</p>
                <p><strong>Issued By:</strong> ${found.issued_by}</p>

                
            `;
        } else {
            resultDiv.innerHTML = "<h2>Certificate Not Found ❌ or Error fetching certificate ❌  <p> <h5>Please contact with Rafi on WhatsApp (+8801300560126) for assistance <b></h2>";
        }
    } catch (error) {
        console.error('Error fetching certificates:', error);
        resultDiv.innerHTML = `
            <h2>Error fetching certificate ❌</h2>
            <p>Please contact with <b> Rafi </b> at <a href="https://wa.me/8801300560126" target="_blank">+8801300560126</a> on WhatsApp for assistance.</p>
        `;
    }
}

document.getElementById('verifyButton').addEventListener('click', searchCertificate);