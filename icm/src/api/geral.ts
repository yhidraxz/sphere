export function initiateFlow(queries: Array<string> | string, message: string) {
  fetch("http://localhost:5000/flow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      queries: queries,
      message: message,
    }),
  }).then((res) => res.json());
}
