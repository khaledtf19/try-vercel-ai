import { HfInference } from "@huggingface/inference";

const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export const runtime = "edge";

function buildPompt(
  messages: {
    contne: string;
    role: "system" | "user" | "assistant";
  }[]
) {
  return (
    messages
      .map(({ contne, role }) => {
        if (role === "user") {
          return `<|prompter|>${contne}<|endoftext|>`;
        } else {
          return `<|assistant|>${contne}<|endoftext|>`;
        }
      })
      .join("") + "<|assistant|>"
  );
}
