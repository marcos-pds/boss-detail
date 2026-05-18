import React, { useEffect, useRef, useState } from 'react';

export default function ScrollAnimate({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se o card entrou na tela, ativa a animação
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: desconecta o observer após animar para poupar memória
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Ativa quando 15% do card estiver visível na tela
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12 pointer-events-none'
      }`}
    >
      {children}
    </div>
  );
}