import { useRef, ReactNode } from 'react';
import { m, useInView, Variants } from 'framer-motion';

type Direction = "up" | "down" | "left" | "right";

const getDirectionOffset = (direction: Direction) => {
  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };
  return offsets[direction];
};

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  amount?: number;
}

export function SectionReveal({ 
  children, 
  className = '', 
  delay = 0, 
  direction = "up",
  amount = 0.1 
}: SectionRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  const offset = getDirectionOffset(direction);

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      ...offset,
      scale: 0.98 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay
      },
    },
  };

  return (
    <m.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </m.div>
  );
}

interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  stagger?: number;
  direction?: Direction;
}

export function StaggerReveal({ 
  children, 
  className = '', 
  itemClassName = '', 
  stagger = 0.1,
  direction = "up"
}: StaggerRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px', amount: 0.2 });
  const offset = getDirectionOffset(direction);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      ...offset,
      scale: 0.98 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <m.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children.map((child, i) => (
        <m.div
          key={i}
          variants={itemVariants}
          className={itemClassName}
          style={{ willChange: "opacity, transform" }}
        >
          {child}
        </m.div>
      ))}
    </m.div>
  );
}
