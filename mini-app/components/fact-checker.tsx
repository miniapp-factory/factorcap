"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FactChecker() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);

  const check = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      setResult(null);
      setExplanation(null);
      return;
    }
    const lower = trimmed.toLowerCase();
    if (lower.includes("fact") || lower.includes("true")) {
      setResult("fact");
      setExplanation("This statement contains evidence or is verifiable.");
    } else {
      setResult("cap");
      setExplanation("This statement appears to be a claim without evidence.");
    }
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <Input
        placeholder="Enter a statement"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={check}>Check</Button>
      {result && (
        <div className="p-4 bg-muted rounded">
          <p>
            <strong>{result.toUpperCase()}</strong>: {explanation}
          </p>
        </div>
      )}
    </div>
  );
}
