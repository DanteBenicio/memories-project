import React from 'react';

export interface FormProps {
  currentId: string;
  setCurrentId: React.Dispatch<React.SetStateAction<string | null>>
}
