import React from 'react';
import './Button.scoped.css';

interface ButtonProps {
    text: string;
    backgroundColor: string;
    foregroundColor: string;
    onClick: () => Promise<void>;
    children?: React.ReactNode;
  }

function Button({
  text, backgroundColor, foregroundColor, onClick, children,
}: ButtonProps) {
  
    const [isLoading, setIsLoading] = React.useState(false);

    const handleButtonClick = async () => {
        try {
          setIsLoading(true);
          await onClick();
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setIsLoading(false);
        }
      };

    return (
    <button
      type="button"
      style={{
        backgroundColor,
        color: foregroundColor,
      }}
      onClick={handleButtonClick}
    >
      {isLoading ? 'Loading...' : children || text}
    </button>
  );
}

export default Button;