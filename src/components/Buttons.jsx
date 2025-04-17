export function PrimaryButton({ children, ...props }) {
    return (
      <button
        {...props}
        className="bg-[var(--primary)] cursor-pointer text-white px-5 py-2 rounded hover:bg-[var(--primary-hover)] transition active:scale-95"
      >
        {children}
      </button>
    );
  }
  
  export function SecondaryButton({ children, ...props }) {
    return (
      <button
        {...props}
        className="border border-[var(--primary)] cursor-pointer text-[var(--primary)] px-5 py-2 rounded hover:bg-[var(--primary)] hover:text-white transition active:scale-95"
      >
        {children}
      </button>
    );
  }
  
  export function DisabledButton({ children }) {
    return (
      <button
        disabled
        className="bg-gray-300 text-gray-500 px-5 py-2 rounded cursor-not-allowed"
      >
        {children}
      </button>
    );
  }
  