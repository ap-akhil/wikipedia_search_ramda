export default ([query, names, summaries, links]) => `
<h2>Searching for "${query}"</h2>
<ul class="list-group">
  ${names
    .map(
      (name, index) => `
      <li class="list-group-item">
        <a href=${links[index]} target="_blank">
          <h4>${name}</h4>
        </a>
        <p>${
          summaries[index].length === 0
            ? "Default article description"
            : summaries[index]
        }</p>
      </li>
    `
    )
    .join("")}
</ul>
`;
