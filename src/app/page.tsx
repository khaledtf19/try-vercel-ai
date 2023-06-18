"use client";
import { useChat } from "ai/react";

export default function Home() {
  const { isLoading, input, messages, handleInputChange, handleSubmit } =
    useChat();

  return (
    <main className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.length > 0
        ? messages.map((message) => (
            <div key={message.id} className="whitespace-pre-wrap">
              {message.role === "user" ? "User: " : "AI: "}
              {message.content}
            </div>
          ))
        : null}
      {isLoading && <div>Loading...</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black"
          value={input}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
      </form>
    </main>
  );
}
