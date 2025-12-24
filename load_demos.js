fetch("assets/demos/demo_list.json")
  .then(res => res.json())
  .then(demos => {
    let html = `
      <table>
        <tr>
          <th>Original Song</th>
          <th>SVS with Original Lyrics</th>
          <th>SVS with Adapted Lyrics</th>
        </tr>
    `;

    demos.forEach(d => {
      html += `
        <tr>
          <td>
            ${d.title}<br>
            <audio controls src="${d.audio}"></audio>
          </td>
          <td>
            <video controls width="250" src="${d.origin}"></video>
          </td>
          <td>
            <video controls width="250" src="${d.adapted}"></video>
          </td>
        </tr>
      `;
    });

    html += "</table>";
    document.getElementById("demo-table").innerHTML = html;
  });

