export default function initiateFlow(
  queries: Array<string> | string,
  message: string
) {
  fetch("http://localhost:3000/Flow", {
    method: "POST",
    body: JSON.stringify({
      queries: queries,
      message: message,
    }),
  }).then((res) => res.json());
}
