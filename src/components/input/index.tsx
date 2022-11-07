import React, { useEffect, useRef } from "react";
import { TextInputContainer } from "./style";

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
  type?: React.HTMLInputTypeAttribute;
  shouldFocus?: boolean;
  onSubmit?: () => void;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const { setText, text, type, shouldFocus, onSubmit, placeholder } = props;

  useEffect(() => {
    if (shouldFocus) {
      ref.current && ref.current.focus();
    }
  }, [shouldFocus]);

  return (
    <TextInputContainer>
      <input
        ref={ref}
        placeholder={placeholder}
        type={type || "text"}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit && onSubmit();
          }
        }}
      ></input>
    </TextInputContainer>
  );
};
