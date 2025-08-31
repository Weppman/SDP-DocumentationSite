import React, { useEffect, useState } from "react";

const getHeaders = () => {
  const headers = [];
  document.querySelectorAll("h1, h2, h3, h4").forEach((header) => {
    if (!header.id) {
      header.id = header.textContent.replace(/\s+/g, "-").toLowerCase();
    }
    headers.push({
      id: header.id,
      text: header.textContent,
      level: header.tagName,
    });
  });
  return headers;
};

const Sidebar = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    setHeaders(getHeaders());
    const observer = new MutationObserver(() => setHeaders(getHeaders()));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="w-64 p-4 border-r h-full top-8 bg-white overflow-y-auto">
      <ul>
        {headers.map((header) => {
          const levelToMargin = {
            H1: "ml-0",
            H2: "ml-4",
            H3: "ml-8",
            H4: "ml-12",
            H5: "ml-16",
            H6: "ml-20",
          };
          const marginClass = levelToMargin[header.level] || "ml-0";
          return (
            <li key={header.id} className={marginClass}>
              <a
                href={`#${header.id}`}
                className="text-blue-600 hover:underline"
              >
                {header.text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;