"use client";

import { useFormStatus } from "react";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="g-button">
      Submit
    </button>
  );
}
